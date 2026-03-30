"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase";

type Mode = "login" | "signup";

export default function AuthPage() {
  const [mode, setMode]       = useState<Mode>("login");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]       = useState("");
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) { setError(error.message); setLoading(false); return; }
      router.push("/dashboard");
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) { setError(error.message); setLoading(false); return; }
      // Create profile row
      if (data.user) {
        await supabase.from("profiles").insert({
          id: data.user.id,
          full_name: name,
          phone: "",
          delivery_address: "",
          city: "",
        });
      }
      router.push("/dashboard");
    }
    setLoading(false);
  }

  const inputClass =
    "w-full h-14 px-6 rounded-[1rem] bg-surface-container border-none focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface transition-all font-body";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Mama Gee Nigerian Kitchen"
              className="h-14 w-auto object-contain mx-auto"
            />
          </Link>
          <p className="text-on-surface-variant mt-4 font-body">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">

          {/* Mode toggle */}
          <div className="flex rounded-full bg-surface-container overflow-hidden p-1">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                mode === "login"
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 rounded-full text-sm font-bold transition-all ${
                mode === "signup"
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant"
              }`}
            >
              Create Account
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-1">
                <label className="block font-label font-semibold ml-2 text-sm">Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Amara Johnson"
                  type="text"
                  required
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="block font-label font-semibold ml-2 text-sm">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="you@email.com"
                type="email"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block font-label font-semibold ml-2 text-sm">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
                placeholder="Min. 6 characters"
                type="password"
                required
                minLength={6}
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm font-medium ml-2">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-primary-container text-on-primary-container rounded-full font-headline font-extrabold text-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {mode === "login" && (
            <p className="text-center text-sm text-on-surface-variant">
              Forgot your password?{" "}
              <button
                onClick={async () => {
                  if (!email) { setError("Enter your email first"); return; }
                  await supabase.auth.resetPasswordForEmail(email);
                  setError("Check your email for a reset link.");
                }}
                className="text-primary font-bold hover:underline"
              >
                Reset it
              </button>
            </p>
          )}
        </div>

        <p className="text-center text-sm text-on-surface-variant mt-6">
          <Link href="/" className="text-primary font-bold hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
