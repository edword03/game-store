/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ['media.rawg.io'],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
