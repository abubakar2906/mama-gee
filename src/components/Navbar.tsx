"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

interface NavbarProps {
  variant?: "default" | "checkout" | "dashboard";
  backLabel?: string;
  backHref?: string;
}

export default function Navbar({
  variant = "default",
  backLabel = "Back to Menu",
  backHref = "/menu",
}: NavbarProps) {
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // ── Shared sub-components ──────────────────────────────

  const CartIcon = () => (
    <Link href="/checkout" className="relative p-2 text-on-surface-variant hover:text-primary active:scale-90 transition-all">
      <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 bg-secondary text-white text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );

  const UserMenu = () => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdownOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-sm hover:ring-2 hover:ring-primary-container/50 transition-all"
      >
        {user?.email?.[0]?.toUpperCase() ?? "U"}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-3 w-56 bg-surface-container-lowest rounded-2xl shadow-2xl shadow-on-surface/8 border border-outline-variant/15 overflow-hidden z-[60]">
          {/* User email header */}
          <div className="px-5 py-4 bg-surface-container-low">
            <p className="text-[11px] uppercase tracking-widest text-on-surface-variant/60 font-bold mb-1">
              Signed in as
            </p>
            <p className="text-sm text-on-surface font-medium truncate">
              {user?.email}
            </p>
          </div>

          <div className="py-2">
            <Link
              href="/dashboard"
              onClick={() => setDropdownOpen(false)}
              className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors"
            >
              <span
                className="material-symbols-outlined text-[20px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                dashboard
              </span>
              Dashboard
            </Link>

            <div className="h-px bg-outline-variant/10 mx-4" />

            <button
              onClick={() => {
                setDropdownOpen(false);
                signOut();
              }}
              className="w-full flex items-center gap-3 px-5 py-3 text-sm font-medium text-error hover:bg-error-container/20 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const NavLinks = () => (
    <div className="hidden md:flex items-center gap-6">
      <Link href="/"        className="text-sm font-headline font-bold uppercase tracking-wide text-on-surface/60 hover:text-primary transition-colors">Home</Link>
      <Link href="/menu"    className="text-sm font-headline font-bold uppercase tracking-wide text-on-surface/60 hover:text-primary transition-colors">Menu</Link>
      <Link href="/about"   className="text-sm font-headline font-bold uppercase tracking-wide text-on-surface/60 hover:text-primary transition-colors">Our Story</Link>
      <Link href="/contact" className="text-sm font-headline font-bold uppercase tracking-wide text-on-surface/60 hover:text-primary transition-colors">Contact</Link>
    </div>
  );

  // ── Render ─────────────────────────────────────────────

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/85 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-6 md:px-8 h-16 md:h-[72px] max-w-screen-2xl mx-auto">

        {/* Logo — consistent across all variants */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Mama Gee Nigerian Kitchen"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* ── Default variant ────────────────────────── */}
        {variant === "default" && (
          <>
            <NavLinks />
            <div className="flex items-center gap-2">
              <CartIcon />
              {user ? (
                <UserMenu />
              ) : (
                <Link
                  href="/auth"
                  className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-sm font-headline font-bold uppercase tracking-wide hover:scale-105 active:scale-95 transition-all"
                >
                  Sign In
                </Link>
              )}
            </div>
          </>
        )}

        {/* ── Checkout variant ───────────────────────── */}
        {variant === "checkout" && (
          <Link
            href={backHref}
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            {backLabel}
          </Link>
        )}

        {/* ── Dashboard variant (same nav links + cart + user menu) */}
        {variant === "dashboard" && (
          <>
            <NavLinks />
            <div className="flex items-center gap-2">
              <CartIcon />
              <UserMenu />
            </div>
          </>
        )}

      </div>
    </nav>
  );
}
