import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Mama Gee Nigerian Kitchen | The Modern Hearth",
  description:
    "Experience the rhythmic spice and vibrant warmth of West Africa's most beloved dishes, crafted with Mama Gee's secret family recipes. Based in Canada.",
};

export default function HomePage() {
  return (
    // Epilogue font active on this page only via CSS variable override
    <div className="font-epilogue-page">
      <Navbar variant="default" />

      <main className="pt-20">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative min-h-[921px] flex items-center overflow-hidden px-6 lg:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

            {/* Left: copy */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide uppercase">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  restaurant
                </span>
                Authentic Nigerian Flavours
              </div>

              <h1 className="text-6xl lg:text-8xl font-black font-headline text-on-background leading-[0.9] tracking-tighter">
                Soul Food <br />
                <span className="text-primary italic">From Our</span> <br />
                Hearth.
              </h1>

              <p className="text-lg lg:text-xl text-on-surface-variant max-w-md leading-relaxed">
                Experience the rhythmic spice and vibrant warmth of West
                Africa&apos;s most beloved dishes, crafted with Mama Gee&apos;s
                secret family recipes.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/menu"
                  className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-extrabold text-xl hover:scale-105 transition-transform shadow-lg shadow-primary/10 flex items-center gap-3"
                >
                  Order Now
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative group">
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-3xl group-hover:bg-primary/20 transition-all duration-700" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/RiceMenu.jpeg"
                  alt="Steaming Jollof Rice — vibrant orange rice garnished with fresh herbs and grilled chicken on a rustic clay plate"
                  width={700}
                  height={600}
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                  priority
                />
              </div>

              {/* Overlapping badge — desktop only */}
              <div className="absolute -bottom-10 -left-10 bg-secondary p-8 rounded-lg shadow-xl hidden lg:block max-w-[200px] transform -rotate-3">
                <p className="text-white font-headline font-bold text-xl leading-tight">
                  Voted Best Jollof in the City
                </p>
                <span
                  className="material-symbols-outlined text-secondary-container mt-2 text-4xl block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
              </div>
            </div>
          </div>

          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container-low -z-10 rounded-l-full opacity-50" />
        </section>

        {/* ── Our Specialties — Bento Grid ──────────────────── */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-on-background">
                  Our Specialties
                </h2>
                <div className="h-2 w-32 bg-secondary rounded-full" />
              </div>
              <p className="text-on-surface-variant max-w-sm text-lg">
                The pillars of our kitchen. Traditional techniques meet
                premium locally-sourced ingredients.
              </p>
            </div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:h-[800px]">

              {/* Pounded Yam & Egusi — large card */}
              <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group min-h-[350px]">
                <div className="relative z-10 max-w-sm">
                  <span className="text-secondary font-bold uppercase tracking-widest text-sm">
                    The Classic
                  </span>
                  <h3 className="text-4xl font-black font-headline mt-2 mb-4 leading-none">
                    Pounded Yam <br />& Egusi
                  </h3>
                  <p className="text-on-surface-variant mb-6">
                    Velvety smooth iyan served with a rich, nutty melon seed
                    soup infused with spinach and traditional spices.
                  </p>
                  <Link
                    href="/menu"
                    className="flex items-center gap-2 font-bold text-primary group/btn w-fit"
                  >
                    View Details{" "}
                    <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>

                <div className="md:absolute md:right-0 md:bottom-0 md:w-3/5 mt-8 md:mt-0 transform group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src="/PoundandEdikaikonCombo.jpeg"
                    alt="Pounded Yam and Edikaikong soup"
                    width={600}
                    height={400}
                    className="rounded-tl-xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Sides — dark image card */}
              <div className="md:col-span-4 bg-on-background rounded-xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[350px]">
                <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
                  <Image
                    src="/Sides1.jpeg"
                    alt="Small Chops and Sides"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-headline text-white mb-2">
                    Savory Sides
                  </h3>
                  <p className="text-surface-variant mb-4">
                    Assorted light bites and small chops. Perfect for sharing.
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-primary/20 text-primary-container px-3 py-1 rounded-full text-xs font-bold border border-primary/30">
                      SPICY
                    </span>
                    <span className="bg-secondary/20 text-secondary-container px-3 py-1 rounded-full text-xs font-bold border border-secondary/30">
                      BEST SELLER
                    </span>
                  </div>
                </div>
              </div>

              {/* Rice Menu — large image card */}
              <div className="md:col-span-12 bg-on-background rounded-xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[400px] md:min-h-[500px]">
                <div className="absolute inset-0 opacity-70 group-hover:opacity-50 transition-opacity duration-700">
                  <Image
                    src="/RiceMenu2.jpeg"
                    alt="Rice Menu Deluxe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="relative z-10 max-w-2xl">
                  <span className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-md">
                    Party Favorites
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black font-headline text-white mt-2 mb-4 drop-shadow-lg">
                    Signature Rice Menu
                  </h3>
                  <p className="text-surface-variant text-lg lg:text-xl mb-6 drop-shadow-md font-medium">
                    Smoky party jollof, vibrant fried rice, and savory local classics served with your choice of premium proteins and sides.
                  </p>
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 bg-white text-on-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Explore Rice Dishes
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Video Section ───────────────────────────────────── */}
        <section className="py-24 px-6 lg:px-12 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black font-headline text-on-background mb-4">
              The Mama Gee Experience
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Get a glimpse of our kitchen as we prepare your favorite dishes with authentic flavors, fresh ingredients, and heartfelt passion.
            </p>
          </div>
          <div className="max-w-5xl mx-auto w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative aspect-video bg-black border-4 border-white">
            <video
              src="/rivevid3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
          </div>
        </section>

        {/* ── CTA Section ───────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-12 bg-surface">
          <div className="max-w-4xl mx-auto bg-secondary rounded-xl p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-6xl font-black font-headline text-white leading-tight">
                Ready to taste the hearth?
              </h2>
              <p className="text-secondary-container text-xl max-w-lg mx-auto">
                Order Mama Gee&apos;s magic straight to your door — freshly
                prepared and packed with soul.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/menu"
                  className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-black text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  Order Now{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      {/*
        Home page has its own richer footer (3-column with social links
        and address). Keeping it inline here rather than using the shared
        Footer component, which is the simplified version used elsewhere.
      */}
      <footer className="bg-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 max-w-7xl mx-auto font-body text-sm leading-relaxed">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo5.png"
                alt="Mama Gee icon"
                className="h-11 w-11 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[#F5A623] font-black text-xl tracking-tight">Mama Gee</span>
                <span className="text-[#1a6b3a] font-bold text-[9px] uppercase tracking-[0.15em]">Nigerian Kitchen</span>
              </div>
            </div>
            <p className="text-stone-500">
              Authentic Nigerian cuisine served with modern elegance.
              Bringing the heart of Lagos to Canada.
            </p>
            <div className="flex space-x-5">
              <a
                href="https://instagram.com/Food_africann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-orange-600 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@africankitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-orange-600 transition-all hover:scale-110"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.15 8.15 0 0 1-1.33-.95v7.58c0 2.58-1.11 5.09-3.18 6.64-2.07 1.55-4.88 2.04-7.38 1.3-2.5-.74-4.66-2.65-5.64-5.06-1.1-2.7-.44-5.91 1.64-7.96 1.37-1.35 3.3-2.09 5.23-2.09h.12v4.13c-.93 0-1.9.3-2.61.9-.71.6-.96 1.6-.74 2.52.22.92.93 1.67 1.8 2.01 1.3.5 1.9.54 3.2.04.5-.2 1-.5 1.4-.9.6-.6.9-1.4.9-2.2V.02z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/2349018450336`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-emerald-600 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.241 2.242 3.48 5.226 3.481 8.408-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.586 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
              </a>
              <a
                href="mailto:Mmgakinquiry@gmail.com"
                className="text-emerald-800 hover:text-orange-600 transition-all hover:scale-110"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-[24px]">alternate_email</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">
                Explore
              </h4>
              <Link href="/menu"    className="block text-stone-500 hover:text-orange-600 transition-colors">Menu</Link>
              <Link href="/contact" className="block text-stone-500 hover:text-orange-600 transition-colors">Catering</Link>
              <Link href="/contact" className="block text-stone-500 hover:text-orange-600 transition-colors">Location</Link>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">
                Support
              </h4>
              <Link href="/contact" className="block text-stone-500 hover:text-orange-600 transition-colors">Contact Us</Link>
              <Link href="/privacy" className="block text-stone-500 hover:text-orange-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms"   className="block text-stone-500 hover:text-orange-600 transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">
                Contact Us
              </h4>
              <div className="space-y-3">
                <a 
                  href={`https://wa.me/2349018450336`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-500 hover:text-emerald-700 transition-colors group"
                >
                  <svg className="w-4 h-4 fill-current text-emerald-600 group-hover:text-emerald-700" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.407 3.481 2.241 2.242 3.48 5.226 3.481 8.408-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.586 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a 
                  href="mailto:Mmgakinquiry@gmail.com"
                  className="flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                  Mmgakinquiry@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">
                Visit Us
              </h4>
              <p className="text-stone-500">
                26 Wentworth Street South,<br />
                Hamilton, ON L8N 2Y3<br />
                <span className="text-stone-400 text-xs mt-1 block">Mon–Fri: 11AM–10PM | Sat–Sun: 12PM–11PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-200 py-6 px-8 text-center max-w-7xl mx-auto">
          <p className="text-stone-500 text-xs">
            © {new Date().getFullYear()} Mama Gee Nigerian Kitchen. All Rights Reserved.
          </p>
        </div>
      </footer>

      <MobileNav />
    </div>
  );
}
