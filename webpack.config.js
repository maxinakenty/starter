const path = require('path');
const { NoEmitOnErrorsPlugin, DefinePlugin } = require('webpack');
const { context, output } = require('./paths.config').webpack;

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'; // Changing environment

module.exports = {
  mode: IS_DEVELOPMENT ? 'development' : 'production',
  context: path.resolve(__dirname, context),
  entry: {
    common: './layouts/common.js',
    home: './pages/home/',
    about: './pages/about/',
  },
  output: {
    path: path.resolve(__dirname, output),
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  watch: IS_DEVELOPMENT,
  devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,

  plugins: [
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      NODE_ENV: JSON.stringify(IS_DEVELOPMENT),
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
    ],
  },
};
