/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90],
  },
  turbopack: {
    root: process.cwd(),
  },
}

export default nextConfig
