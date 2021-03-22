// https://nextjs.org/docs/api-reference/next.config.js/introduction

const withPlugins = require('next-compose-plugins')
const withYaml = require('next-plugin-yaml')
const withImages = require('next-images')

let nextConfig = {
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
