"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
export default function CartFab() {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      href="/checkout"
      className="hidden md:flex fixed bottom-28 md:bottom-12 right-6 md:right-8 z-50 items-center gap-3 bg-[#F5A623] text-white pl-4 pr-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all font-headline font-bold"
    >
      <span className="material-symbols-outlined text-2xl">shopping_bag</span>
      <span>{totalItems} item{totalItems > 1 ? "s" : ""}</span>
    </Link>
  );
}
