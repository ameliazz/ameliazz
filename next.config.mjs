/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'r2.ameliazz.xyz',
            },
        ],
    },
}

export default nextConfig
