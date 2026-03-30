import { createBrowserClient } from "@supabase/ssr";

// Call this inside components/hooks — safe to call multiple times (singleton)
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
