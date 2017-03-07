var gulp = require('gulp');
var __paths = require('../../paths.config');

var $ = require('gulp-load-plugins')();
// connect the plugin so ($. == gulp + name of plugin) gulp-if == $.if, gulp-sass == $.sass etc

var combine = require('stream-combiner2').obj; // Handle errors
var path = require('path');
var revNapkin = require('gulp-rev-napkin');

var IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('revAssets', function() {
  var ignoreThese = '!' + path.join(__paths.root.dist, '/**/*+(css|js|html)');

  return gulp.src([
      path.join(__paths.dist.all),
      ignoreThese
    ])
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.rev(),
        gulp.dest(__paths.root.dist),
        revNapkin({
          verbose: false
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(__paths.root.manifest)))
    );
});