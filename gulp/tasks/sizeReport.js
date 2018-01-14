const gulp = require('gulp');
const paths = require('../../paths.config');
const $ = require('gulp-load-plugins')();

gulp.task('sizeReport', () =>
  gulp.src(paths.dist.all).pipe(
    $.sizereport({
      gzip: true,
    }),
  ),
);
