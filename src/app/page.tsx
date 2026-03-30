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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZUCJ5nBdim96BUXOb1DIDkKj626RSjLspwpi1EFLhYlcX5hdxIjDV5y37EriOWVCz-OEIFnA3xinSakv9CLtculQhhY8NX_yrH6A0nYGV6m9djO5FKNx9ei4VWlxhoLGFYHFJJYZxqshNCCG69-yABAOAasWMUU6ePGJDUv4411jigKRyxVPHpuVW-cuY-C9DD6IGKRN6PSNNbuC4olN-QEtFTPusdRbd-Blbfo2qLLHfoPHeo9hWCQLZJ3JNE2xhHoV6UsOnK9K"
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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <h2 className="text-5xl font-black font-headline tracking-tighter text-on-background">
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">

              {/* Pounded Yam & Egusi — large card */}
              <div className="md:col-span-8 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy3wlsY9zgu6D4Rx9T8pCpAwfcA1WdkiCvmjq5UT7V6HZfNv7sT9fyHByaee1DVFl75lydMlnRuPhq6AowW6UCj_V5cghxIFApdBq9mTACO_VuHP4rG-IusLvQI9sznLcUZDsj17Z5aiZFx8Cjt95D4CXSAaIB3BnN7rWrCk-vawGUUbyQRFw6hbYt3BlojgRL1HCEmbaQr1sBH32ZHL_zhJW0YgEPkqsNa1SocopCcr7HOUjO3xRzBg4m6Y3oYzgOjBIcM4LMjj3S"
                    alt="Pounded Yam and Egusi soup"
                    width={600}
                    height={400}
                    className="rounded-tl-xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Suya — dark image card */}
              <div className="md:col-span-4 bg-on-background rounded-xl p-8 flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRz0FFG_Fz_DD4lwG43n4Alrctr39FMFx5BbJKIbgGU4eW-mEVQdXPfBIA9iVwkXsmAqt-A0smoD_BDPh7pDt2KLeVDqFNWT08zmebfJUp_w2E8ncOTegmmQbQhqZuDEnZEG8VoT8Hh_5YOPeZsdutjJjJ6NZ8VO7pCh3BcISDU4eycm5ZoVa8o3wb82fuVT9YvIK7GVVUcnadM5EW0SN1RzdDtqLXa_5imhDl7wHeOPwbP4HaPWZkKGI0wnpg0JLa6qXGoFcl7LKK"
                    alt="Nigerian Suya skewers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black font-headline text-white mb-2">
                    Signature Suya
                  </h3>
                  <p className="text-surface-variant mb-4">
                    Flame-grilled beef skewers dusted in our secret Yaji spice
                    blend.
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

              {/* Street Food Soul — orange card */}
              <div className="md:col-span-4 bg-primary-container rounded-xl p-8 flex flex-col items-center text-center justify-center group">
                <span
                  className="material-symbols-outlined text-6xl text-on-primary-container mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  bakery_dining
                </span>
                <h3 className="text-2xl font-black font-headline text-on-primary-container mb-2">
                  Street Food Soul
                </h3>
                <p className="text-on-primary-container/80 text-sm">
                  Puff Puff, Moin Moin, and the crunchiest Plantain chips
                  you&apos;ve ever tasted.
                </p>
              </div>

              {/* Zobo & Ginger — drinks card */}
              <div className="md:col-span-8 bg-surface-container-highest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
                <div className="flex-1 order-2 md:order-1">
                  <h3 className="text-3xl font-black font-headline mb-4">
                    Zobo & Ginger
                  </h3>
                  <p className="text-on-surface-variant mb-6">
                    Our house-made Hibiscus and Ginger infusions. Refreshing,
                    tart, and naturally sweet.
                  </p>
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-secondary border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white" />
                  </div>
                </div>
                <div className="flex-1 order-1 md:order-2 w-full h-48 md:h-full relative min-h-[200px]">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwAJaAcT3rh-QsRxIRK1cSV4w4jMGvKQkQXaE2_f70ESmMEXsMMSisIE78cz_3kdz45bLd32ckr-ryF_6XHd9y2lLik5VKi-o11CLMqi6IJrdjJ3eUwNWWjTYyCjaxaPgaSsBZFHJbWbELkhzKDHC9qe32nVm6vRdTk2eQq8LDEXg7S4qODoWR5W6RZSbrV3ibxLe0uvoVj-FCPL2RZtPlG1hB3rdnSy3eXDUcep0rINGwgy6QToSXvnu43PSe5EIoX5Z9yGceYREE"
                    alt="Zobo hibiscus drink"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

            </div>
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
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 hover:text-orange-600 transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                href="mailto:hello@mamagee.ca"
                className="text-emerald-800 hover:text-orange-600 transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined">alternate_email</span>
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

          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 uppercase tracking-widest text-xs">
              Visit Us
            </h4>
            {/* TODO: Replace with real address once confirmed by client */}
            <p className="text-stone-500">
              123 Spice Garden Lane,<br />
              Toronto, ON M5V 1A1<br />
              Open Daily: 11AM – 10PM
            </p>
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
