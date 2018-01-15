const webpack = require('webpack');
const path = require('path');
const paths = require('./paths.config').webpack;

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

const config = {
  context: path.resolve(__dirname, paths.context),
  entry: {
    common: './layouts/common.js',
    home: './pages/home/',
    about: './pages/about/',
  },
  output: {
    path: path.resolve(__dirname, paths.output),
    publicPath: paths.publicPath,
    filename: paths.filename,
    chunkFilename: paths.chunkFilename,
  },
  watch: IS_DEVELOPMENT,
  devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(IS_DEVELOPMENT),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
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

if (!IS_DEVELOPMENT) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        unsafe: true,
      },
    }),
  );
}

module.exports = config;
