const path = require('path')
const withSass = require('@zeit/next-sass')

const route = {
  '/': { page: '/' },
  '/about': { page: '/about' },
  '/imageChange': { page: '/imageChange' },
  '/questionSlot': { page: '/questionSlot' },
}

module.exports = withSass({
  future: {
    webpack5: false, // webpack4使う場合。webpack5が不安定でうまくいかなかった
  },
  basePath: process.env.NODE_ENV === "production" ? '/exNext' : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "https://k-suginoko.github.io/exNext/" : "",
  trailingSlash: true, // pages/aaa.js というコードが、aaa.html というファイルではなく、aaa/index.html というファイルとして出力されるようになります。
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.IgnorePlugin(/\/__tests__\//),
    )

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"]
    // });

    // Important: return the modified config
    return config
  },
  // env: {
  //   NODE_ENV2: process.env.NODE_ENV2,
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return route
  },
  images: {
    loader: "imgix",
    path: process.env.NODE_ENV === "production" ? "https://k-suginoko.github.io/exNext/" : "/",
  },
})
