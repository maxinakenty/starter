const gulp = require('gulp');
const path = require('path');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const paths = require('../../paths.config');

gulp.task('assets', () =>
  gulp
    .src([paths.src.assets], {
      since: gulp.lastRun('assets'),
    })
    .pipe($.changed(paths.root.dist))
    .pipe(gulp.dest(paths.root.dist)),
);
