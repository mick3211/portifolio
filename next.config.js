/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'images2.imgbox.com', pathname: '**' },
            { hostname: 'play-lh.googleusercontent.com', pathname: '**' }
        ],
    },
};

module.exports = nextConfig;
