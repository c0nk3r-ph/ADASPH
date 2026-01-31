/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force static generation for all routes by default
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure all routes are statically generated
  trailingSlash: true,
};

export default nextConfig;
