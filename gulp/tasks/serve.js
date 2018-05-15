const { task } = require('gulp');
const browserSync = require('browser-sync').create();
const { root } = require('../../paths.config');

task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    server: root.dist,
  });

  browserSync.watch([root.serve]).on('change', browserSync.reload);
});
