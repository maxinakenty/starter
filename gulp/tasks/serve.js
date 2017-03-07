'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    open: false,
    notify: false,
    server: __paths.root.dist
  });

  browserSync.watch([__paths.root.serve]).on('change', browserSync.reload);
});