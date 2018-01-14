const webpack = require('webpack');
const path = require('path');
const paths = require('./paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

const config = {
  context: path.join(__dirname, paths.webpack.entry),
  entry: {
    main: './index',
  },
  output: {
    path: path.join(__dirname, paths.webpack.output),
    filename: '[name].js',
  },
  watch: IS_DEVELOPMENT,
  devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : false,

  plugins: [new webpack.NoEmitOnErrorsPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015'],
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
