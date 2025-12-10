const withOffline = require('next-offline');

const nextConfig = {
	poweredByHeader: false,
	swcMinify: true,
	turbopack: {},
};

module.exports = withOffline(nextConfig);

