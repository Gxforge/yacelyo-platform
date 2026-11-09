/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'tarjetasweb2-6838.kxcdn.com' },
      { protocol: 'https', hostname: '**.r2.cloudflarestorage.com' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
