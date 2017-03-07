'use strict';

var gulp = require('gulp');
var del = require('del');
var __paths = require('../paths.config');

gulp.task('clean', function() {
  return del([
    __paths.root.dist,
    __paths.root.tmp,
    __paths.root.manifest,
    __paths.favicon,
    __paths.root.debug
  ]);
});