/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "snmankwgupvlugjehlte.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/Restaurant/**",
      },
      {
        protocol: "https",
        hostname: "snmankwgupvlugjehlte.supabase.co",
        port: "",
        pathname: "/storage/v1/object/sign/Food_images/**",
      },
    ],
  },
};

export default nextConfig;
