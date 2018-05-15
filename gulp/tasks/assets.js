const { task, src, dest, lastRun } = require('gulp');
const $ = require('gulp-load-plugins')();
const paths = require('../../paths.config');

task('assets', () =>
  src([paths.src.assets], {
    since: lastRun('assets'),
  })
    .pipe($.changed(paths.root.dist))
    .pipe(dest(paths.root.dist)),
);
