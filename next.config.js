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
  // If your submodule content is static (HTML, images, etc)
  async rewrites() {
    return [
      {
        source: '/arc-tools-web/:path*',
        destination: '/arc-tools-web/out/:path*',
      },
    ];
  },
}

module.exports = nextConfig
