'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var $ = require('gulp-load-plugins')();

var pngquant = require('imagemin-pngquant');


gulp.task('imagemin', function() {
  return gulp.src(__paths.src.imagemin)
    .pipe($.changed(__paths.dist.img))
    .pipe($.imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(__paths.dist.img));
});