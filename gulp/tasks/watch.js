const gulp = require('gulp');
const { watch } = require('../../paths.config');

gulp.task('watch', () => {
  gulp.watch(watch.pug, gulp.series('pug'));
  gulp.watch(watch.assets, gulp.series('assets'));
  gulp.watch(watch.styles, gulp.series('styles'));
});
