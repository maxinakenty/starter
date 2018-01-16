const { resolve, join } = require('path');
const webpack = require('webpack');
const paths = require('../paths.config').webpack;
const { pug } = require('../paths.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: join(__dirname, '..', paths.context),
  entry: {
    common: './layouts/common.js',
    index: './pages/index/',
    about: './pages/about/',
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, '..', 'src', '/pages/index/index.pug'),
      filename: join(__dirname, '..', 'dist', 'index.html'),
      chunks: ['common', 'index'],
    }),
    new HtmlWebpackPlugin({
      template: join(__dirname, '..', 'src', '/pages/about/about.pug'),
      filename: join(__dirname, '..', 'dist', 'about.html'),
      chunks: ['common', 'about'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'stage-0'],
          },
        },
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
      },
    ],
  },
};
