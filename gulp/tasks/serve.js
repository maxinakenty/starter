'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    server: __paths.root.dist
  });

  browserSync.watch([__paths.root.serve]).on('change', browserSync.reload);
});