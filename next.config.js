// https://nextjs.org/docs/api-reference/next.config.js/introduction

const withPlugins = require('next-compose-plugins')
const withYaml = require('next-plugin-yaml')
const withImages = require('next-images')

let nextConfig = {
  // https://nextjs.org/docs/messages/webpack5
  future: { webpack5: true },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: 'empty',
          module: 'empty',
        },
      }
    }

    return config
  },

  // https://nextjs.org/docs/api-reference/next.config.js/basepath
  basePath: process.env.BASE_PATH || '',

  // https://nextjs.org/docs/basic-features/image-optimization
  images: {
    loader: 'cloudinary',
    path: '/images/_loader/'
  },
}

module.exports = withPlugins([
  withImages,
  withYaml,
], nextConfig)
