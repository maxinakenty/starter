const gulp = require('gulp');
const paths = require('../../paths.config');

gulp.task('watch', () => {
  gulp.watch(paths.watch.pug, gulp.series('pug'));
  gulp.watch(paths.watch.assets, gulp.series('assets'));
  gulp.watch(paths.watch.styles, gulp.series('styles'));
});
