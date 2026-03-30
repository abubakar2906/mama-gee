import { createBrowserClient } from "@supabase/ssr";

// Call this inside components/hooks — safe to call multiple times (singleton)
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    // If we're in the browser and missing keys, we should warn
    if (typeof window !== "undefined") {
      console.warn("Supabase credentials missing!");
    }
    // Return a dummy client or handle it — for build purposes, we just need to not crash here
    // but the actual values MUST be in Vercel to work.
    return createBrowserClient(url || "", key || "");
  }

  return createBrowserClient(url, key);
}
