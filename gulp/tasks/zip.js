const gulp = require('gulp');
const zip = require('gulp-zip');
const paths = require('../../paths.config');

gulp.task('zip', cb => {
  gulp
    .src(paths.dist.all)
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest(paths.root.dist))
    .on('end', cb);
});
