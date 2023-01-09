/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		runtime: "experimental-edge",
	},
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "media.valorant-api.com",
			},
		],
	},
};

module.exports = nextConfig;
