'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const $ = require('gulp-load-plugins')();
const pngquant = require('imagemin-pngquant');

gulp.task('imagemin', () => {
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