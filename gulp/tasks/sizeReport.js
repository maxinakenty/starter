const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('../../paths.config');

gulp.task('sizeReport', () =>
  gulp.src(paths.dist.all).pipe(
    $.sizereport({
      gzip: true,
    }),
  ),
);
