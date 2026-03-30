import { CartItem } from "@/context/CartContext";
import { formatCAD } from "./formatCurrency";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "1XXXXXXXXXX"; // Set in .env

interface OrderDetails {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  aptSuite?: string;
  notes?: string;
  items: CartItem[];
  subtotalCents: number;
  deliveryFeeCents: number;
  totalCents: number;
}

/**
 * Builds a pre-filled WhatsApp message and returns the wa.me deep link.
 * Opens WhatsApp app on mobile, WhatsApp Web on desktop.
 */
export function buildWhatsAppLink(order: OrderDetails): string {
  const itemLines = order.items
    .map(
      (item) =>
        `  • ${item.name} x${item.quantity} — ${formatCAD(item.price * item.quantity)}`
    )
    .join("\n");

  const address = [order.address, order.aptSuite, order.city, "Canada"]
    .filter(Boolean)
    .join(", ");

  const message = [
    "🛍️ *New Order — Mama Gee Nigerian Kitchen*",
    "",
    `*Name:* ${order.fullName}`,
    `*Phone:* ${order.phone}`,
    `*Delivery Address:* ${address}`,
    "",
    "*Order:*",
    itemLines,
    "",
    `*Subtotal:* ${formatCAD(order.subtotalCents)}`,
    `*Delivery Fee:* ${formatCAD(order.deliveryFeeCents)}`,
    `*Total:* ${formatCAD(order.totalCents)}`,
    ...(order.notes ? ["", `*Notes:* ${order.notes}`] : []),
    "",
    "_Order is confirmed when the restaurant replies. Thank you! 🙏_",
  ].join("\n");

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
