/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'imgix',
        path: 'https://samsonstannus.imgix.net',
      },
  }
  
module.exports = nextConfig