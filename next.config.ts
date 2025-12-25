
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fhshakiacgnsnsvbrsdz.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/Ayman/webp-frames/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/hashimn1980-ux/ANEEF/blob/feat-aneef-portfolio-website-1447752366322429904/**',
      },
    ],
  },
};

export default nextConfig;
