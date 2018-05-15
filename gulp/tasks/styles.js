const { task, src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const { styles } = require('../../paths.config');
const processors = require('../postcss.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

task('styles', () =>
  combine(
    src(styles.entry),
    $.if(IS_DEVELOPMENT, $.sourcemaps.init()),
    $.sass(styles.files),
    $.postcss(processors),
    $.if(IS_DEVELOPMENT, $.sourcemaps.write()),
    $.if(!IS_DEVELOPMENT, combine($.cssnano())),
    $.rename('main.css'),
    dest(styles.outDir),
  ).on('error', $.notify.onError()),
);
