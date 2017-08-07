'use strict';

const gulp = require('gulp');
const del = require('del');
const __paths = require('../paths.config');

gulp.task('clean', () => {
  return del([
    __paths.root.dist,
    __paths.root.tmp,
    __paths.root.manifest,
    __paths.favicon,
    __paths.root.debug
  ]);
});