'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');
const __paths = require('../paths.config');

gulp.task('zip', () => {
  return gulp.src(__paths.dist.all)
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest(__paths.root.dist));
});