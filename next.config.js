const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	staticPageGenerationTimeout: 1000,
	images: {
		unoptimized: true, // for cloudflare pages
		domains: ['assets.coingecko.com']
	},
	compiler: {
		styledComponents: true
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*'
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET'
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-Requested-With, content-type, Authorization'
					}
				]
			}
		];
	},
	experimental: {}
};

module.exports = withBundleAnalyzer(nextConfig);
