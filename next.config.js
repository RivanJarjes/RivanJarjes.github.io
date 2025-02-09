/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enable static exports
  reactStrictMode: true,
  images: {
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
