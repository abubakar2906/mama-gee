"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import { useAuth } from "@/context/AuthContext";
import { createClient } from "@/lib/supabase";

export default function DashboardClient() {
  const { user, profile, loading, refreshProfile } = useAuth();
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formCity, setFormCity] = useState("");
  const [formApt, setFormApt] = useState("");

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!loading && !user) router.push("/auth");
  }, [loading, user, router]);

  // Populate form when profile loads
  useEffect(() => {
    if (profile) {
      setFormName(profile.full_name ?? "");
      setFormPhone(profile.phone ?? "");
      setFormAddress(profile.delivery_address ?? "");
      setFormCity(profile.city ?? "");
      setFormApt(profile.apt_suite ?? "");
    }
  }, [profile]);

  async function handleSave() {
    if (!user) return;
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: formName.trim(),
        phone: formPhone.trim(),
        delivery_address: formAddress.trim(),
        city: formCity.trim(),
        apt_suite: formApt.trim(),
      }, { onConflict: "id" });

    if (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save changes. Please try again.");
    } else {
      await refreshProfile();
      setEditing(false);
    }
    setSaving(false);
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="material-symbols-outlined text-primary text-4xl animate-spin">
          progress_activity
        </span>
      </div>
    );
  }

  const displayName =
    profile?.full_name?.split(" ")[0] ?? user.email?.split("@")[0] ?? "Friend";

  const inputClass =
    "w-full h-14 px-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body";

  return (
    <>
      <Navbar variant="dashboard" />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* ── Greeting ──────────────────────────────────── */}
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-primary leading-tight">
            Welcome back,{" "}
            <span className="text-secondary">{displayName}!</span>
          </h1>
          <p className="text-on-surface-variant text-lg mt-4 max-w-2xl font-medium">
            Manage your profile and delivery details. The Jollof is always
            steaming — what are we feasting on today?
          </p>
        </header>

        {/* ── Dashboard Grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Quick actions */}
          <section className="md:col-span-8">
            <div className="bg-secondary p-8 md:p-12 rounded-xl text-on-secondary relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-4">
                  Ready to order?
                </h2>
                <p className="text-on-secondary/80 mb-8 max-w-md">
                  Browse the menu and build your plate. Mama Gee&apos;s kitchen is
                  waiting for you.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-transform"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      restaurant_menu
                    </span>
                    Browse Menu
                  </Link>
                  <Link
                    href="/checkout"
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-secondary transition-all"
                  >
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Account info */}
          <section className="md:col-span-4">
            <div className="bg-primary p-8 md:p-10 rounded-xl text-on-primary h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-container/20 rounded-full blur-3xl" />
              <div>
                <span
                  className="material-symbols-outlined text-4xl mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_circle
                </span>
                <h3 className="text-2xl font-headline font-extrabold mb-2">
                  Your Account
                </h3>
                <p className="text-on-primary/70 text-sm break-all">
                  {user.email}
                </p>
              </div>
              <p className="text-primary-fixed-dim text-xs mt-8">
                Member since{" "}
                {new Date(user.created_at).toLocaleDateString("en-CA", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </section>

          {/* ── Saved details (editable) ─────────────────── */}
          <section className="md:col-span-12">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-headline font-bold">
                  Saved Details
                </h3>
                {!editing ? (
                  <button
                    onClick={() => setEditing(true)}
                    className="text-primary font-bold text-sm hover:underline flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-lg">
                      edit
                    </span>
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={() => setEditing(false)}
                      className="text-on-surface-variant font-bold text-sm hover:underline"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="bg-primary-container text-on-primary-container px-5 py-2 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-all disabled:opacity-60"
                    >
                      {saving ? "Saving..." : "Save"}
                    </button>
                  </div>
                )}
              </div>

              {!editing ? (
                /* Read-only view */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-surface-container-low p-6 rounded-[1rem]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary-container text-lg">
                          person
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">
                        Full Name
                      </span>
                    </div>
                    <p className="font-medium text-on-surface">
                      {profile?.full_name || (
                        <span className="text-on-surface-variant/50 italic">
                          Not set
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-[1rem]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary-container text-lg">
                          call
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">
                        Phone
                      </span>
                    </div>
                    <p className="font-medium text-on-surface">
                      {profile?.phone || (
                        <span className="text-on-surface-variant/50 italic">
                          Not set
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="bg-surface-container-low p-6 rounded-[1rem]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary-container text-lg">
                          home
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant uppercase tracking-wide font-bold">
                        Delivery Address
                      </span>
                    </div>
                    <p className="font-medium text-on-surface">
                      {profile?.delivery_address ? (
                        <>
                          {profile.delivery_address}
                          {profile.apt_suite ? `, ${profile.apt_suite}` : ""}
                          {profile.city ? `, ${profile.city}` : ""}
                        </>
                      ) : (
                        <span className="text-on-surface-variant/50 italic">
                          Not set
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ) : (
                /* Edit form */
                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block font-label font-semibold ml-2 text-sm">
                        Full Name
                      </label>
                      <input
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className={inputClass}
                        placeholder="Amara Johnson"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block font-label font-semibold ml-2 text-sm">
                        Phone Number
                      </label>
                      <input
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className={inputClass}
                        placeholder="+1 (416) ..."
                        type="tel"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block font-label font-semibold ml-2 text-sm">
                      Delivery Address
                    </label>
                    <input
                      value={formAddress}
                      onChange={(e) => setFormAddress(e.target.value)}
                      className={inputClass}
                      placeholder="Street name and number"
                      type="text"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-1">
                      <label className="block font-label font-semibold ml-2 text-sm">
                        City / Area
                      </label>
                      <input
                        value={formCity}
                        onChange={(e) => setFormCity(e.target.value)}
                        className={inputClass}
                        placeholder="Toronto, ON"
                        type="text"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block font-label font-semibold ml-2 text-sm">
                        Apt / Suite
                      </label>
                      <input
                        value={formApt}
                        onChange={(e) => setFormApt(e.target.value)}
                        className={inputClass}
                        placeholder="Optional"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </>
  );
}
