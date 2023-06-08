/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'images2.imgbox.com', pathname: '**' }],
    },
};

module.exports = nextConfig;
