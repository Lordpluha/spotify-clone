/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'fakeimg.pl',
				port: '',
				pathname: '/**'
			},
			{
				protocol: 'https',
				hostname: '*',
				port: '',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
