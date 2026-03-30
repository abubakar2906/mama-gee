/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // Google / Stitch placeholder images
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        // Future: Supabase storage for real food photography
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
