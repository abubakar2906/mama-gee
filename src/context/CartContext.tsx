"use client";

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  ReactNode,
} from "react";

// ── Types ────────────────────────────────────────────────

export interface CartItem {
  id: string;
  name: string;
  price: number;        // in CAD cents (e.g. 1500 = $15.00)
  image: string;
  quantity: number;
  notes?: string;       // e.g. "Extra spice"
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "ADD_ITEM"; item: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string }
  | { type: "CLEAR" };

interface CartContextValue extends CartState {
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotalCents: number;       // sum of (price × quantity)
  deliveryFeeCents: number;    // flat fee — configurable later
  totalCents: number;
}

// ── Reducer ──────────────────────────────────────────────

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.item, quantity: 1 }] };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        items: state.items
          .map((i) =>
            i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null);

const DELIVERY_FEE_CENTS = 499; // $4.99 CAD flat fee

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem    = useCallback((item: Omit<CartItem, "quantity">) => dispatch({ type: "ADD_ITEM", item }), []);
  const removeItem = useCallback((id: string) => dispatch({ type: "REMOVE_ITEM", id }), []);
  const increment  = useCallback((id: string) => dispatch({ type: "INCREMENT", id }), []);
  const decrement  = useCallback((id: string) => dispatch({ type: "DECREMENT", id }), []);
  const clearCart  = useCallback(() => dispatch({ type: "CLEAR" }), []);

  const totalItems      = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotalCents   = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryFeeCents = totalItems > 0 ? DELIVERY_FEE_CENTS : 0;
  const totalCents      = subtotalCents + deliveryFeeCents;

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
        totalItems,
        subtotalCents,
        deliveryFeeCents,
        totalCents,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within <CartProvider>");
  return ctx;
}
