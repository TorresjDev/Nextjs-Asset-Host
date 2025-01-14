/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: process.env.NODE_ENV === "Nextjs-Asset-Host" ? "/" : "", // Use your repository name here
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};
module.exports = nextConfig;
