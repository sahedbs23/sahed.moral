/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions:['tsx','js','ts'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/github/**'
            }
        ]
    }
}

module.exports = nextConfig
