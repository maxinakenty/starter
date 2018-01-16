// const { resolve } = require('path');
// const webpack = require('webpack');
// const paths = require('./paths.config').webpack;
// const { pug } = require('./paths.config');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const IS_DEVELOPMENT =
//   !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

// const config = {
//   context: resolve(__dirname, paths.context),
//   entry: {
//     common: './layouts/common.js',
//     home: './pages/index/',
//     about: './pages/about/',
//   },
//   output: {
//     path: resolve(__dirname, paths.output),
//     publicPath: '/js/',
//     filename: '[name].js',
//     chunkFilename: '[name].js',
//   },
//   watch: IS_DEVELOPMENT,
//   watchOptions: {
//     aggregateTimeout: 100,
//   },
//   devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,

//   plugins: [
//     new webpack.NoEmitOnErrorsPlugin(),
//     new webpack.DefinePlugin({
//       NODE_ENV: JSON.stringify(IS_DEVELOPMENT),
//     }),
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'common',
//     }),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       chunks: ['index'],
//       template: resolve(__dirname, pug.pages.index),
//     }),
//     new HtmlWebpackPlugin({
//       filename: 'about.html',
//       chunks: ['about'],
//       template: resolve(__dirname, pug.pages.about),
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: [/node_modules/],
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['es2015', 'stage-0'],
//           },
//         },
//       },
//       {
//         test: /\.pug$/,
//         use: {
//           loader: 'pug-loader',
//           options: {
//             pretty: true,
//           },
//         },
//       },
//     ],
//   },
// };

// if (!IS_DEVELOPMENT) {
//   config.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: true,
//         unsafe: true,
//       },
//     }),
//   );
// }

// module.exports = config;

const merge = require('webpack-merge');
const common = require('./config/webpack.common.js');
const production = require('./config/webpack.production.js');
const development = require('./config/webpack.development.js');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = IS_DEVELOPMENT
  ? merge([common, development])
  : merge([production, common]);
