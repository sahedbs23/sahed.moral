/** @type {import('next').NextConfig} */
const  path = require('path');
const nextConfig = {
    sassOptions:{
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/github/**'
            },
            {
                protocol: 'https',
                hostname: 's3.tebi.io',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
