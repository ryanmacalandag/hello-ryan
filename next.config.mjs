/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/seed/**',
        search: '',
      },
    ],
  },
  allowedDevOrigins: ['192.168.50.91'],
  cacheComponents: true,
};

export default nextConfig;
