/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		runtime: "experimental-edge",
	},
	reactStrictMode: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.valorant-api.com",
			},
		],
	},
};

module.exports = nextConfig;
