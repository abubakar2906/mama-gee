import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Learn about Mama Gee Nigerian Kitchen — our roots, our mission, and the passion behind every plate of authentic Nigerian cuisine in Canada.",
};

const VALUES = [
  {
    icon: "local_fire_department",
    title: "Authenticity",
    description:
      "Every recipe is passed down through generations. No shortcuts, no compromises — just the real flavours of Nigeria.",
  },
  {
    icon: "favorite",
    title: "Soul & Love",
    description:
      "We cook with heart. Every dish carries the warmth and care of a Nigerian mother's kitchen.",
  },
  {
    icon: "groups",
    title: "Community",
    description:
      "Food brings people together. We serve the African diaspora and welcome everyone to our table.",
  },
  {
    icon: "eco",
    title: "Fresh Ingredients",
    description:
      "We source locally in Canada and import specialty spices directly from Nigeria for that unmistakable taste.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="default" />

      <main className="pt-20">
        {/* ── Hero ──────────────────────────────────────── */}
        <section className="relative bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide uppercase">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  menu_book
                </span>
                Our Story
              </div>

              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-background leading-tight">
                From Lagos <br />
                <span className="text-primary italic">to Canada,</span> <br />
                With Love.
              </h1>

              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Mama Gee Nigerian Kitchen was born from a mother&apos;s dream — to
                share the flavours of home with a new world. Every plate tells a
                story of heritage, resilience, and the undeniable magic of Nigerian
                cuisine.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-3xl" />
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZUCJ5nBdim96BUXOb1DIDkKj626RSjLspwpi1EFLhYlcX5hdxIjDV5y37EriOWVCz-OEIFnA3xinSakv9CLtculQhhY8NX_yrH6A0nYGV6m9djO5FKNx9ei4VWlxhoLGFYHFJJYZxqshNCCG69-yABAOAasWMUU6ePGJDUv4411jigKRyxVPHpuVW-cuY-C9DD6IGKRN6PSNNbuC4olN-QEtFTPusdRbd-Blbfo2qLLHfoPHeo9hWCQLZJ3JNE2xhHoV6UsOnK9K"
                  alt="Vibrant Nigerian cuisine spread on a rustic table"
                  width={700}
                  height={500}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-container -z-0 rounded-l-full opacity-50" />
        </section>

        {/* ── Origin Story ─────────────────────────────── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-on-background">
              The Hearth That Started It All
            </h2>
            <div className="h-1.5 w-20 bg-secondary rounded-full mx-auto" />
            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed text-left lg:text-center max-w-3xl mx-auto">
              <p>
                It started in a small kitchen in Lagos — the sound of a wooden spoon
                against an iron pot, the scent of scotch bonnets sizzling in palm
                oil, the laughter of a family gathered around a table too small for
                the love it held.
              </p>
              <p>
                When Mama Gee moved to Canada, she carried more than recipes in her
                suitcase. She carried a culture, a tradition, and the belief that
                food is the most powerful language on earth. The kind of language
                that doesn&apos;t need translation — it just needs soul.
              </p>
              <p>
                Today, Mama Gee Nigerian Kitchen serves the African diaspora and
                curious food lovers across Canada. Every dish is prepared with the
                same love, the same spices, and the same fire that lit Mama Gee&apos;s
                first kitchen in Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ─────────────────────────── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-surface-container-low">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-primary p-10 lg:p-14 rounded-xl text-on-primary relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl" />
              <span
                className="material-symbols-outlined text-5xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                flag
              </span>
              <h3 className="text-3xl font-headline font-extrabold mb-4">
                Our Mission
              </h3>
              <p className="text-on-primary/80 text-lg leading-relaxed">
                To bring authentic, home-cooked Nigerian flavours to Canada — one
                plate at a time. We exist to nourish bodies, connect cultures, and
                make every customer feel like family.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-secondary p-10 lg:p-14 rounded-xl text-on-secondary relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl" />
              <span
                className="material-symbols-outlined text-5xl mb-6 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                visibility
              </span>
              <h3 className="text-3xl font-headline font-extrabold mb-4">
                Our Vision
              </h3>
              <p className="text-on-secondary/80 text-lg leading-relaxed">
                To become the most loved Nigerian restaurant in Canada — a place
                where the African diaspora finds comfort, and curious food lovers
                discover the richness of West African cuisine.
              </p>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────── */}
        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight text-on-background">
                What We Stand For
              </h2>
              <div className="h-1.5 w-20 bg-primary-container rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="bg-surface-container-low p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-on-primary-container text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {value.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-extrabold text-on-surface mb-2">
                    {value.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-20 px-6 lg:px-12 bg-surface">
          <div className="max-w-4xl mx-auto bg-surface-container-highest rounded-xl p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight">
                Come taste the story.
              </h2>
              <p className="text-on-surface-variant text-lg max-w-lg mx-auto">
                Browse our full menu and experience the flavours that have been
                passed down through generations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/menu"
                  className="bg-primary-container text-on-primary-container px-10 py-5 rounded-lg font-extrabold text-xl hover:scale-105 transition-transform flex items-center justify-center gap-3"
                >
                  Explore the Menu
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="bg-surface-container text-on-surface px-10 py-5 rounded-lg font-extrabold text-xl hover:bg-surface-variant transition-colors"
                >
                  Get in Touch
                </Link>
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
