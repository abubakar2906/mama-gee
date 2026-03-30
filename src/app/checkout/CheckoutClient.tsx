"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import StepIndicator from "@/components/StepIndicator";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatCAD } from "@/lib/formatCurrency";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface FormData {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  aptSuite: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  address?: string;
  city?: string;
}

export default function CheckoutClient() {
  const {
    items,
    subtotalCents,
    deliveryFeeCents,
    totalCents,
    totalItems,
    increment,
    decrement,
    removeItem,
  } = useCart();
  const { profile } = useAuth();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [form, setForm] = useState<FormData>({
    fullName: profile?.full_name ?? "",
    phone: profile?.phone ?? "",
    address: profile?.delivery_address ?? "",
    city: profile?.city ?? "",
    aptSuite: profile?.apt_suite ?? "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.address.trim()) newErrors.address = "Delivery address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function goToDetails() {
    if (totalItems === 0) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goToConfirm() {
    if (!validate()) return;
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleOrder() {
    const link = buildWhatsAppLink({
      ...form,
      items,
      subtotalCents,
      deliveryFeeCents,
      totalCents,
    });
    window.open(link, "_blank");
  }

  const inputClass =
    "w-full h-14 px-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body";
  const errorClass = "text-xs text-red-600 mt-1 ml-2";

  return (
    <>
      <Navbar variant="checkout" backLabel="Back to Menu" backHref="/menu" />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Step indicator */}
        <div className="mb-16">
          <StepIndicator currentStep={step} />
        </div>

        {/* ══════════════════════════════════════════════ */}
        {/* STEP 1 — Cart Review                          */}
        {/* ══════════════════════════════════════════════ */}
        {step === 1 && (
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">
                Your Plate
              </h1>
              <p className="text-on-surface-variant">
                Review your items before we get your delivery details.
              </p>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">
                  shopping_cart
                </span>
                <h2 className="text-2xl font-headline font-extrabold text-on-surface">
                  Your plate is empty
                </h2>
                <p className="text-on-surface-variant">
                  Head to the menu and add some soul food.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform mt-4"
                >
                  <span className="material-symbols-outlined">restaurant_menu</span>
                  Browse Menu
                </Link>
              </div>
            ) : (
              <>
                {/* Item list */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm space-y-3"
                    >
                      {/* Row 1: image + name/price */}
                      <div className="flex gap-3 items-center">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h4 className="font-headline font-bold text-on-surface truncate">
                            {item.name}
                          </h4>
                          <p className="text-sm text-on-surface-variant">
                            {formatCAD(item.price)} each
                          </p>
                        </div>
                      </div>

                      {/* Row 2: qty controls + total + delete */}
                      <div className="flex items-center justify-between">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => decrement(item.id)}
                            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">remove</span>
                          </button>
                          <span className="w-8 text-center font-bold text-on-surface">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increment(item.id)}
                            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-variant transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">add</span>
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <p className="font-bold text-primary whitespace-nowrap">
                            {formatCAD(item.price * item.quantity)}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-on-surface-variant/50 hover:text-error transition-colors"
                          >
                            <span className="material-symbols-outlined text-lg">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="bg-surface-container-low rounded-2xl p-6 space-y-3 font-label">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>{formatCAD(subtotalCents)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Delivery Fee</span>
                    <span>{formatCAD(deliveryFeeCents)}</span>
                  </div>
                  <div className="h-px bg-outline-variant/20" />
                  <div className="flex justify-between text-2xl font-headline font-extrabold text-on-surface pt-2">
                    <span>Total</span>
                    <span className="text-primary">{formatCAD(totalCents)}</span>
                  </div>
                </div>

                {/* Continue */}
                <button
                  onClick={goToDetails}
                  className="w-full h-16 bg-primary-container text-on-primary-container rounded-full font-headline font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-container/20"
                >
                  Continue to Delivery Details
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </>
            )}
          </div>
        )}

        {/* ══════════════════════════════════════════════ */}
        {/* STEP 2 — Delivery Details                     */}
        {/* ══════════════════════════════════════════════ */}
        {step === 2 && (
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-2">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back to cart
              </button>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">
                Delivery Information
              </h1>
              <p className="text-on-surface-variant max-w-md">
                Tell us where we&apos;re bringing the heat. All orders are
                freshly prepared and packed with soul.
              </p>
            </div>

            <div className="space-y-8">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block font-label font-semibold ml-2">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. Amara Johnson"
                    type="text"
                  />
                  {errors.fullName && (
                    <p className={errorClass}>{errors.fullName}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="block font-label font-semibold ml-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+1 (416) ..."
                    type="tel"
                  />
                  {errors.phone && (
                    <p className={errorClass}>{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label className="block font-label font-semibold ml-2">
                  Delivery Address
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Street name and number"
                  type="text"
                />
                {errors.address && (
                  <p className={errorClass}>{errors.address}</p>
                )}
              </div>

              {/* City + Apt */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-1">
                  <label className="block font-label font-semibold ml-2">
                    City / Area
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Toronto, ON"
                    type="text"
                  />
                  {errors.city && (
                    <p className={errorClass}>{errors.city}</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label className="block font-label font-semibold ml-2">
                    Apt / Suite
                  </label>
                  <input
                    name="aptSuite"
                    value={form.aptSuite}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Optional"
                    type="text"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-1">
                <label className="block font-label font-semibold ml-2">
                  Delivery Notes
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full p-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body"
                  placeholder="Buzzer code, landmark, or spice preference..."
                  rows={3}
                />
              </div>
            </div>

            <button
              onClick={goToConfirm}
              className="w-full h-16 bg-primary-container text-on-primary-container rounded-full font-headline font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary-container/20"
            >
              Review Order
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        )}

        {/* ══════════════════════════════════════════════ */}
        {/* STEP 3 — Confirm & Send via WhatsApp          */}
        {/* ══════════════════════════════════════════════ */}
        {step === 3 && (
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="space-y-2">
              <button
                onClick={() => setStep(2)}
                className="flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary transition-colors mb-4"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Edit delivery details
              </button>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">
                Confirm Order
              </h1>
              <p className="text-on-surface-variant max-w-md">
                Everything looks good? Hit the button below to send your order
                via WhatsApp.
              </p>
            </div>

            {/* Delivery info summary */}
            <div className="bg-surface-container-low rounded-2xl p-6 space-y-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline font-bold text-on-surface">
                  Delivery To
                </h3>
                <button
                  onClick={() => setStep(2)}
                  className="text-primary text-sm font-bold hover:underline"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                    Name
                  </p>
                  <p className="font-medium text-on-surface">{form.fullName}</p>
                </div>
                <div>
                  <p className="text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <p className="font-medium text-on-surface">{form.phone}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="font-medium text-on-surface">
                    {form.address}
                    {form.aptSuite ? `, ${form.aptSuite}` : ""}, {form.city}
                  </p>
                </div>
                {form.notes && (
                  <div className="sm:col-span-2">
                    <p className="text-on-surface-variant text-xs uppercase tracking-wide mb-1">
                      Notes
                    </p>
                    <p className="font-medium text-on-surface">{form.notes}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Order items summary */}
            <div className="bg-surface-container-low rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline font-bold text-on-surface">
                  Order Summary
                </h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-primary text-sm font-bold hover:underline"
                >
                  Edit
                </button>
              </div>

              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-headline font-bold text-on-surface text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-on-surface-variant">
                      ×{item.quantity}
                    </p>
                  </div>
                  <p className="font-bold text-primary text-sm">
                    {formatCAD(item.price * item.quantity)}
                  </p>
                </div>
              ))}

              <div className="h-px bg-outline-variant/20 mt-2" />

              <div className="space-y-2 font-label text-sm pt-2">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>{formatCAD(subtotalCents)}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Delivery Fee</span>
                  <span>{formatCAD(deliveryFeeCents)}</span>
                </div>
                <div className="flex justify-between text-xl font-headline font-extrabold text-on-surface pt-2">
                  <span>Total</span>
                  <span className="text-primary">{formatCAD(totalCents)}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleOrder}
              className="group w-full h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center gap-3 font-headline font-extrabold text-lg shadow-xl shadow-primary-container/20 active:scale-95 transition-all duration-200"
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                send
              </span>
              Send Order via WhatsApp
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>

            <div className="flex items-center gap-3 justify-center text-secondary font-semibold text-sm">
              <span className="material-symbols-outlined text-lg">
                verified_user
              </span>
              Order is confirmed when the restaurant replies on WhatsApp
            </div>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
