const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const { root } = require('../../paths.config');

gulp.task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    server: root.dist,
  });

  browserSync.watch([root.serve]).on('change', browserSync.reload);
});
