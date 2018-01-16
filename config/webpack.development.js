const webpack = require('webpack');
const { resolve } = require('path');
const paths = require('../paths.config').webpack;

module.exports = {
  output: {
    path: resolve(__dirname, paths.output),
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },
  devtool: 'cheap-module-inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('development'),
    }),
  ],
};
