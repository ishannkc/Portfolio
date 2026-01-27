/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Allow local images from public folder
    unoptimized: false,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Compress responses
  compress: true,
};

module.exports = nextConfig;
