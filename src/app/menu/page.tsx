"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import CartFab from "@/components/CartFab";
import FoodCard from "@/components/FoodCard";
import {
  menuItems,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  getItemsByCategory,
} from "@/lib/menuData";
import type { MenuCategory } from "@/lib/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(
    CATEGORY_ORDER[0]
  );
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Intersection Observer — highlight tab of section in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id as MenuCategory);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    for (const cat of CATEGORY_ORDER) {
      const el = sectionRefs.current[cat];
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  function scrollToCategory(cat: MenuCategory) {
    setActiveCategory(cat);
    sectionRefs.current[cat]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <Navbar variant="default" />

      <main className="pt-20 pb-32">
        {/* ── Hero banner ────────────────────────────────── */}
        <section className="bg-surface-container-low px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                restaurant_menu
              </span>
              Full Menu
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
              The Menu
            </h1>
            <p className="text-on-surface-variant text-lg mt-4 max-w-xl">
              From smoky Jollof to silky Egusi — explore every dish Mama Gee&apos;s
              kitchen has to offer. Pick your favourites and build your plate.
            </p>
          </div>
        </section>

        {/* ── Sticky category tabs ───────────────────────── */}
        <nav className="sticky top-[72px] z-40 bg-background/90 backdrop-blur-xl border-b border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto no-scrollbar">
            <div className="flex gap-2 py-3">
              {CATEGORY_ORDER.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => scrollToCategory(cat)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-primary-container text-on-primary-container shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container"
                    }`}
                  >
                    {CATEGORY_LABELS[cat]}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {/* ── Category sections ──────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {CATEGORY_ORDER.map((cat) => {
            const items = getItemsByCategory(cat);
            return (
              <section
                key={cat}
                id={cat}
                ref={(el) => { sectionRefs.current[cat] = el; }}
                className="pt-16 scroll-mt-[140px]"
              >
                <div className="flex items-end justify-between mb-8">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-headline font-extrabold tracking-tight text-on-background">
                      {CATEGORY_LABELS[cat]}
                    </h2>
                    <div className="h-1.5 w-16 bg-primary-container rounded-full mt-3" />
                  </div>
                  <span className="text-on-surface-variant text-sm font-medium">
                    {items.length} {items.length === 1 ? "dish" : "dishes"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) => (
                    <FoodCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <CartFab />
      <Footer />
      <MobileNav />
    </>
  );
}
