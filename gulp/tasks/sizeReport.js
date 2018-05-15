const { task, src } = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('../../paths.config');

task('sizeReport', () =>
  src(paths.dist.all).pipe(
    $.sizereport({
      gzip: true,
    }),
  ),
);
