import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, Epilogue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";

// Plus Jakarta Sans — used by Menu, Order, Dashboard pages
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// Epilogue — used by Home page
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

// Be Vietnam Pro — body / label font across all pages
const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mama Gee Nigerian Kitchen",
    template: "%s | Mama Gee Nigerian Kitchen",
  },
  description:
    "Authentic Nigerian cuisine crafted with soul, heat, and the freshest ingredients. Based in Canada. Order via WhatsApp.",
  keywords: ["Nigerian food", "Nigerian restaurant Canada", "Jollof rice", "Mama Gee"],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/favicon.svg",
    },
  },
  openGraph: {
    type: "website",
    url: "https://www.africankitchen.online",
    title: "Mama Gee Nigerian Kitchen",
    description: "Authentic Nigerian cuisine crafted with soul, heat, and the freshest ingredients. Based in Canada. Order via WhatsApp.",
    siteName: "Mama Gee Nigerian Kitchen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mama Gee Nigerian Kitchen - Authentic Nigerian Cuisine",
        type: "image/png",
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Mama Gee Nigerian Kitchen Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mama Gee Nigerian Kitchen",
    description: "Authentic Nigerian cuisine, delivered with soul.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Mama Gee Nigerian Kitchen",
              description:
                "Authentic Nigerian cuisine crafted with soul, heat, and the freshest ingredients. Based in Canada.",
              url: "https://www.africankitchen.online",
              servesCuisine: ["Nigerian", "West African"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Spice Garden Lane",
                addressLocality: "Toronto",
                addressRegion: "ON",
                postalCode: "M5V 1A1",
                addressCountry: "CA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "11:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "12:00",
                  closes: "23:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body
        className={`
          ${plusJakarta.variable}
          ${epilogue.variable}
          ${beVietnam.variable}
          font-body bg-background text-on-surface
          selection:bg-primary-container selection:text-on-primary-container
        `}
      >
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}