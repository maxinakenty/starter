'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const $ = require('gulp-load-plugins')();

gulp.task('sizeReport', () => {
  return gulp.src(__paths.dist.all)
    .pipe($.sizereport({
      gzip: true
    }));
});