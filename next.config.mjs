/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ijlsuhslxonjiszlebem.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Restaurant/**",
      },
      {
        protocol: "https",
        hostname: "ijlsuhslxonjiszlebem.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/Food_images/**",
      },
    ],
  },
};

export default nextConfig;
