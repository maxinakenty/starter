'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj;

gulp.task('pug', function() {
  return combine(
    gulp.src(__paths.src.pug),
    $.pug({
      pretty: true,
    }),
    gulp.dest(__paths.root.dist)
  ).on('error', $.notify.onError());
});