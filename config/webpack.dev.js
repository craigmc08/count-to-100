const path = require('path');
const { config, parentDir } = require('./webpack.base');

const contentBase = path.resolve(parentDir, '');

module.exports = {
  ...config,
  devServer: {
    contentBase,
    historyApiFallback: true,
    proxy: {},
    watchOptions: {
      poll: 500,
    },
  },
};