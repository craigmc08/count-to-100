const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const parentDir = path.resolve(__dirname, '..');

const entryPath = path.resolve(parentDir, './src/index.jsx');
const htmlTemplatePath = path.resolve(parentDir, './public/index.html');
const outputPath = path.resolve(parentDir, './build');

const config = {
  context: __dirname,
  entry: entryPath,
  plugins: [
    new HTMLWebpackPlugin({
      template: htmlTemplatePath,
      filename: 'index.html',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.less/,
            loaders: ["style-loader", "css-loader", "less-loader"],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            use: {
              loader: 'file-loader',
              options: {
                name: '[path][name]-[hash:8].[ext]',
              }
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      Components: path.resolve(parentDir, 'src/Components'),
      Assets: path.resolve(parentDir, 'src/Assets'),
    },
    extensions: [ '.js', '.json', '.jsx' ],
  },
  output: {
    path: outputPath,
    publicPath: '',
    filename: 'bundle.js',
  },
};

module.exports = {
  config,
  parentDir,
};