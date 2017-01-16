var webpack = require('webpack');
var IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

module.exports = {
	context: __dirname + '/__src/pages/index',
	entry: {
		main: './index'
	},
	output: {
		path: __dirname + '/__dist/js',
		publicPath: '/js/',
		filename: '[name].js'
	},

	watch: IS_DEVELOPMENT,
	watchOptions: {
		argregateTimeout: 100
	},

	devtool: IS_DEVELOPMENT ? 'cheap-module-inline-source-map' : null,

	plugins: [
		new webpack.NoErrorsPlugin(),
	],
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: [/node_modules/],
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}]
	},

	noParse: wrapRegexp(/\/node_modules\//, 'noParse')
};

function wrapRegexp(regexp, label) {
	regexp.test = function(path) {
		console.log(label, path);

		return RegExp.prototype.test.call(this, path);
	};

	return regexp;
}

if (!IS_DEVELOPMENT) {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				unsafe: true
			}
		}));
}