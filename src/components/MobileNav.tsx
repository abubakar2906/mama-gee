"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const tabs = [
  { href: "/",          icon: "home",            label: "Home" },
  { href: "/menu",      icon: "restaurant_menu", label: "Explore" },
  { href: "/checkout",  icon: "receipt_long",    label: "Orders" },
  { href: "/dashboard", icon: "person",          label: "Profile" },
] as const;

export default function MobileNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-[#fbf9f3]/95 backdrop-blur-lg rounded-t-[2rem] shadow-[0_-10px_40px_rgba(27,28,25,0.08)]">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`relative flex flex-col items-center justify-center gap-1 px-5 py-2.5 rounded-full transition-all duration-200 active:scale-90 ${
              active
                ? "bg-[#F5A623] text-white"
                : "text-stone-500 hover:bg-stone-100"
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {tab.icon}
            </span>
            <span className="font-body text-[11px] font-bold tracking-wide">{tab.label}</span>

            {/* Badge for Orders */}
            {tab.href === "/checkout" && totalItems > 0 && (
              <span className="absolute top-1 right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow-md border-2 border-[#fbf9f3]">
                {totalItems}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
