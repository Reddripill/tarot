import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: "export",
   images: {
      unoptimized: true, // Отключает оптимизацию next/image
   },
};

export default nextConfig;
