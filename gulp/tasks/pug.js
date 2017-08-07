'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;

gulp.task('pug', () => {
  return combine(
    gulp.src(__paths.src.pug),
    $.pug({
      pretty: true,
    }),
    gulp.dest(__paths.root.dist)
  ).on('error', $.notify.onError());
});