/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enable static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,  // Add this for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.natgeofe.com',
      },
      // Add other domains as needed
    ],
  },
  basePath: '',
  // Update rewrites to use the new path
  async rewrites() {
    return [
      {
        source: '/arc-simulator/:path*',
        destination: '/arc-simulator/:path*',
      },
      // Keep the old path for backward compatibility
      {
        source: '/arc-tools-web/:path*',
        destination: '/arc-simulator/:path*',
      },
    ];
  },
  // Add experimental features to ensure route groups work correctly
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig
