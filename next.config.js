/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        path: './lib/loader.js',
      },
  }
  
module.exports = nextConfig