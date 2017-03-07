var gulp = require('gulp');
var __paths = require('../paths.config');
var $ = require('gulp-load-plugins')();

gulp.task('sizeReport', function() {
  return gulp.src(__paths.dist.all)
    .pipe($.sizereport({
      gzip: true
    }));
});