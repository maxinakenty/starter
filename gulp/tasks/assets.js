'use struct';

const gulp = require('gulp');
const __paths = require('../paths.config');

const path = require('path');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;

gulp.task('assets', () => {
  return gulp.src([
      __paths.src.assets
    ], {
      since: gulp.lastRun('assets')
    })
    .pipe($.changed(__paths.root.dist))
    .pipe(gulp.dest(__paths.root.dist));
});