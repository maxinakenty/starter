const gulp = require('gulp');
const paths = require('../../paths.config');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    server: paths.root.dist,
  });

  browserSync.watch([paths.root.serve]).on('change', browserSync.reload);
});
