import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-2xl bg-[#1b1c19] mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start px-10 md:px-16 py-14 gap-12 max-w-screen-2xl mx-auto">

        {/* Brand block */}
        <div className="space-y-5 max-w-xs">
          {/* Full lockup: icon + name */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo5.png"
              alt="Mama Gee icon"
              className="h-12 w-12 object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[#F5A623] font-black text-2xl tracking-tight">
                Mama Gee
              </span>
              <span className="text-[#4caf7d] font-bold text-[11px] uppercase tracking-[0.18em]">
                Nigerian Kitchen
              </span>
            </div>
          </Link>
          <p className="font-body text-sm leading-relaxed text-white/50">
            Authentic West African flavours, crafted with love and served
            with soul. Based in Canada.
          </p>
          <p className="text-white/30 text-xs font-label">
            © {new Date().getFullYear()} Mama Gee Nigerian Kitchen
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-12 gap-y-4 font-label text-sm tracking-wide font-medium pt-1">
          <Link href="/menu"    className="text-white/50 hover:text-[#F5A623] transition-colors">Menu</Link>
          <Link href="/about"   className="text-white/50 hover:text-[#F5A623] transition-colors">Our Story</Link>
          <Link href="/contact" className="text-white/50 hover:text-[#F5A623] transition-colors">Contact Us</Link>
          <Link href="/auth"    className="text-white/50 hover:text-[#F5A623] transition-colors">Sign In</Link>
        </div>
      </div>

      <div className="border-t border-white/5 pb-6 pt-4 text-center text-xs text-white/20 font-label px-6">
        Mama Gee&apos;s kitchen operates under strict hygiene standards.
        Please notify us of any severe allergies before ordering.
      </div>
    </footer>
  );
}
