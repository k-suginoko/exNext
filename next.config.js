const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  future: {
    webpack5: false,
  },
  trailingSlash: true, // pages/aaa.js というコードが、aaa.html というファイルではなく、aaa/index.html というファイルとして出力されるようになります。
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.IgnorePlugin(/\/__tests__\//),
    )

    // Important: return the modified config
    return config
  },
  // env: {
  //   NODE_ENV2: process.env.NODE_ENV2,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
})
