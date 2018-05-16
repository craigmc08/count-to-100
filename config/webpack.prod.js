const CompressionPlugin = require('compression-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const { config } = require('./webpack.base');

module.exports = {
  ...config,
  plugins: [
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
    }),
    new BabelMinifyPlugin(),
    ...config.plugins,
  ],
};