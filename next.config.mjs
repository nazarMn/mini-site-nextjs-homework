/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['img.icons8.com'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
