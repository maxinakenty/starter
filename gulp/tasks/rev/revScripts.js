'use strict';

const gulp = require('gulp');
const __paths = require('../../paths.config');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const path = require('path');
const revNapkin = require('gulp-rev-napkin');
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('revScripts', () => {
  return gulp.src(path.join(__paths.root.dist, '/**/*.js'))
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.rev(),
        gulp.dest(__paths.root.dist),
        revNapkin({
          verbose: false
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(__paths.root.manifest)))
    );
});