// https://nextjs.org/docs/api-reference/next.config.js/introduction

const withImages = require('next-images')

module.exports = withImages({
  // https://nextjs.org/docs/api-reference/next.config.js/basepath
  basePath: process.env.BASE_PATH || '',
})
