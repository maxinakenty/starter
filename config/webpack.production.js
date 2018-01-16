const webpack = require('webpack');
const { resolve, join } = require('path');
const paths = require('../paths.config');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '..', paths.webpack.output),
    publicPath: '/js/',
    filename: '[name].[chunkhash].js',
    chunkFilename: 'js/[name].[chunkhash].js',
  },
  watch: false,
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('production'),
    }),
    new AssetsWebpackPlugin({
      filename: 'assets.json',
      path: join(__dirname, '..', '/dist/'),
    }),
  ],
};
