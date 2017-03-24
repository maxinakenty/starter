'use struct';

var gulp = require('gulp');
var __paths = require('../paths.config');

var path = require('path');
var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj;

gulp.task('assets', function() {
  return gulp.src([
      __paths.src.assets
    ], {
      since: gulp.lastRun('assets')
    })
    .pipe($.changed(__paths.root.dist))
    .pipe(gulp.dest(__paths.root.dist));
});