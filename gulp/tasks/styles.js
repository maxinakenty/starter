'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var processors = require('../postcss.config');

var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj;

var IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('styles', function() {
  return combine(
    gulp.src(__paths.src.styles.main),
    $.if(IS_DEVELOPMENT, $.sourcemaps.init()),
    $.sass(__paths.src.styles.sass),
    $.postcss(processors),
    $.if(IS_DEVELOPMENT, $.sourcemaps.write()),
    $.if(!IS_DEVELOPMENT, combine(
      $.cssnano()
    )),
    gulp.dest(__paths.dist.css)
  ).on('error', $.notify.onError());
});