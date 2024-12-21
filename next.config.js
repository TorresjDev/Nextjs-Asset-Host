/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   basePath: '/assets-host', // Use your repository name here
   trailingSlash: true,
     images: {
    unoptimized: true,
  },
 };
 module.exports = nextConfig;
 