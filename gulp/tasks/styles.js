'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const processors = require('../postcss.config');

const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;

const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('styles', () => {
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