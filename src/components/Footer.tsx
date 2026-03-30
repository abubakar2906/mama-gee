import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-xl bg-[#eae8e2] mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 text-center md:text-left max-w-screen-2xl mx-auto">
        <div className="space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Mama Gee Nigerian Kitchen"
            className="h-10 w-auto object-contain"
          />
          <p className="font-body text-sm tracking-wide text-[#1b1c19]/60 max-w-xs">
            © {new Date().getFullYear()} Mama Gee Nigerian Kitchen. Made with Heart.{" "}
            Authentic West African flavours, delivered in Canada.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 font-label text-sm tracking-wide font-medium">
          <Link href="/privacy"  className="text-[#1b1c19]/60 hover:text-[#F5A623] transition-colors">Privacy Policy</Link>
          <Link href="/terms"    className="text-[#1b1c19]/60 hover:text-[#F5A623] transition-colors">Terms of Service</Link>
          <Link href="/contact"  className="text-[#1b1c19]/60 hover:text-[#F5A623] transition-colors">Contact Us</Link>
          <Link href="/careers"  className="text-[#1b1c19]/60 hover:text-[#F5A623] transition-colors">Careers</Link>
        </div>
      </div>

      <div className="pb-8 text-center text-xs text-on-surface/30 font-label">
        Mama Gee&apos;s kitchen operates under strict hygiene standards.
        Please notify us of any severe allergies before ordering.
      </div>
    </footer>
  );
}
