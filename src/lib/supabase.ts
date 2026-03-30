import { createBrowserClient } from "@supabase/ssr";

// Only call this from client components — env vars must be set in Vercel
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
