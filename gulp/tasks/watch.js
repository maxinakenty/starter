'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');

gulp.task('watch', function() {
  gulp.watch(__paths.watch.jade, gulp.series('jade'));
  gulp.watch(__paths.watch.assets, gulp.series('assets'));
  gulp.watch(__paths.watch.styles, gulp.series('styles'));
});