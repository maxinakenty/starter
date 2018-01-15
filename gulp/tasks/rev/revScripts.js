const { join } = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const { root } = require('../../../paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('revScripts', () =>
  gulp.src(join(root.dist, '/**/*.js')).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.rev(),
        gulp.dest(root.dist),
        $.revNapkin({
          verbose: false,
        }),
        $.rev.manifest(),
        gulp.dest(root.manifest),
      ),
    ),
  ),
);
