"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatCAD } from "@/lib/formatCurrency";
import type { MenuItem } from "@/lib/menuData";

interface FoodCardProps {
  item: MenuItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const { addItem, items } = useCart();

  const cartItem = items.find((i) => i.id === item.id);
  const inCart   = (cartItem?.quantity ?? 0) > 0;

  function handleAdd() {
    addItem({
      id:    item.id,
      name:  item.name,
      price: item.priceCents,
      image: item.image,
    });
  }

  return (
    <div className="group flex flex-col h-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {item.badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm ${
                item.badgeColor === "orange" ? "bg-primary" : "bg-secondary"
              }`}
            >
              {item.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-baseline mb-3">
          <h3 className="font-headline font-extrabold text-2xl text-on-surface">
            {item.name}
          </h3>
          <span className="font-headline font-bold text-primary text-xl whitespace-nowrap ml-2">
            {formatCAD(item.priceCents)}
          </span>
        </div>

        <p className="font-body text-on-surface-variant text-base mb-8 line-clamp-2">
          {item.description}
        </p>

        <button
          onClick={handleAdd}
          className={`mt-auto w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${
            inCart
              ? "bg-secondary-container text-on-secondary-container"
              : "bg-primary-container text-on-primary-container hover:bg-[#F5A623] hover:text-white"
          }`}
        >
          <span className="material-symbols-outlined text-xl">
            {inCart ? "check_circle" : "add_shopping_cart"}
          </span>
          {inCart ? `In Plate (${cartItem!.quantity})` : "Add to Plate"}
        </button>
      </div>
    </div>
  );
}
