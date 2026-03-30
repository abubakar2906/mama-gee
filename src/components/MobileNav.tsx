"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/",          icon: "home",            label: "Home" },
  { href: "/menu",      icon: "restaurant_menu", label: "Explore" },
  { href: "/checkout",  icon: "receipt_long",    label: "Orders" },
  { href: "/dashboard", icon: "person",          label: "Profile" },
] as const;

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#fbf9f3]/90 backdrop-blur-lg rounded-t-[2rem] shadow-[0_-4px_24px_rgba(27,28,25,0.06)]">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex flex-col items-center justify-center gap-0.5 px-4 py-2 rounded-full transition-all duration-200 active:scale-90 ${
              active
                ? "bg-[#F5A623] text-white"
                : "text-stone-500 hover:bg-stone-100"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {tab.icon}
            </span>
            <span className="font-body text-[10px] font-medium">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
