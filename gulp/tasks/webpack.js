'use strict';

var gulp = require('gulp');
var webpack = require('webpack');
var wpcfg = require('../../webpack.config');

gulp.task('webpack', function(cb) {
  webpack(wpcfg, function(err, stats) {
    if (err) {
      cb(err);
    }
    console.log(stats.toString({
      colors: true
    }));
    cb();
  });
});