/** @type {import('next').NextConfig} */

const nextConfig = {
    images:{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.prod.website-files.com',
              
            },
            {
              protocol: 'https',
              hostname: 'utfs.io',
  
            },
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
  
            },
          ],
    }
};

export default nextConfig;
