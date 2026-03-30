"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { createClient } from "@/lib/supabase";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "1XXXXXXXXXX";

const CONTACT_INFO = [
  {
    icon: "location_on",
    label: "Visit Us",
    value: "123 Spice Garden Lane, Toronto, ON M5V 1A1",
    sub: "Canada",
  },
  {
    icon: "schedule",
    label: "Business Hours",
    value: "Mon – Fri: 11 AM – 10 PM",
    sub: "Sat – Sun: 12 PM – 11 PM",
  },
  {
    icon: "call",
    label: "WhatsApp Us",
    value: `+${WHATSAPP_NUMBER}`,
    sub: "Tap to chat directly",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    icon: "alternate_email",
    label: "Email",
    value: "hello@mamagee.ca",
    sub: "We reply within 24 hours",
    href: "mailto:hello@mamagee.ca",
  },
];

const SOCIALS = [
  { icon: "photo_camera", label: "Instagram", href: "https://instagram.com/mamageekitchen" },
  { icon: "smart_display", label: "TikTok", href: "https://tiktok.com/@mamageekitchen" },
  { icon: "group", label: "Facebook", href: "https://facebook.com/mamageekitchen" },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const supabase = createClient();
      const { error: dbError } = await supabase
        .from("contact_messages")
        .insert({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        });

      if (dbError) throw dbError;
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full h-14 px-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body";

  return (
    <>
      <Navbar variant="default" />

      <main className="pt-20">
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="bg-surface-container-low px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                waving_hand
              </span>
              Get In Touch
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
              We&apos;d Love to <br />
              <span className="text-primary italic">Hear From You.</span>
            </h1>
            <p className="text-on-surface-variant text-lg mt-4 max-w-xl">
              Have a question, catering enquiry, or just want to say hello?
              Reach out — our door is always open.
            </p>
          </div>
        </section>

        {/* ── Info cards ────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_INFO.map((info) => {
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href
                ? {
                    href: info.href,
                    target: "_blank" as const,
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <Wrapper
                  key={info.label}
                  {...wrapperProps}
                  className="bg-surface-container-low p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-on-primary-container text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {info.icon}
                    </span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-1">
                    {info.label}
                  </h3>
                  <p className="text-on-surface-variant text-sm">
                    {info.value}
                  </p>
                  {info.sub && (
                    <p className="text-on-surface-variant/60 text-xs mt-1">
                      {info.sub}
                    </p>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* ── Contact form + Social ────────────────────── */}
        <section className="py-16 lg:py-24 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-[2rem] p-8 lg:p-12 shadow-sm">
                <h2 className="text-3xl font-headline font-extrabold tracking-tight text-on-surface mb-2">
                  Send Us a Message
                </h2>
                <p className="text-on-surface-variant mb-8">
                  We&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <span
                      className="material-symbols-outlined text-6xl text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <h3 className="text-2xl font-headline font-extrabold text-on-surface">
                      Message Sent!
                    </h3>
                    <p className="text-on-surface-variant">
                      Thank you for reaching out. We&apos;ll reply soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold hover:underline mt-4"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="block font-label font-semibold ml-2 text-sm">
                          Your Name
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Amara Johnson"
                          type="text"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label font-semibold ml-2 text-sm">
                          Email Address
                        </label>
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="you@email.com"
                          type="email"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block font-label font-semibold ml-2 text-sm">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full p-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body"
                        placeholder="Tell us what's on your mind — questions, catering requests, or just to say hi..."
                        rows={5}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-red-600 text-sm font-medium ml-2">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-14 bg-primary-container text-on-primary-container rounded-full font-headline font-extrabold text-lg hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {submitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <span className="material-symbols-outlined">send</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Social + WhatsApp sidebar */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-secondary p-8 lg:p-10 rounded-xl text-on-secondary relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <span
                    className="material-symbols-outlined text-4xl mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    chat
                  </span>
                  <h3 className="text-2xl font-headline font-extrabold mb-2">
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-on-secondary/80 mb-6">
                    Chat with us directly for the fastest response — whether
                    it&apos;s placing an order or asking a question.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-secondary px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Chat on WhatsApp
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-headline font-extrabold text-on-surface mb-6">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span
                          className="material-symbols-outlined text-on-primary-container"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {social.icon}
                        </span>
                      </div>
                      <div>
                        <p className="font-headline font-bold text-on-surface">
                          {social.label}
                        </p>
                        <p className="text-on-surface-variant text-xs">
                          @mamageekitchen
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant ml-auto group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-surface-container rounded-xl p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 block">
                  map
                </span>
                <p className="text-on-surface-variant text-sm">
                  Embedded Google Map coming in Phase 2
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
