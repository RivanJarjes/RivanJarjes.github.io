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
}

module.exports = nextConfig
