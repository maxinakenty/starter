var gulp = require('gulp');
var __paths = require('../../paths.config');

var $ = require('gulp-load-plugins')();
// connect the plugin so ($. == gulp + name of plugin) gulp-if == $.if, gulp-sass == $.sass etc

var combine = require('stream-combiner2').obj; // Handle errors
var path = require('path');
var revNapkin = require('gulp-rev-napkin');
var IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

gulp.task('revUpdateReferences', function() {
  var manifest = gulp.src(path.join(__paths.root.manifest, 'rev-manifest.json'));

  return gulp.src(path.join(__paths.root.dist, '/**/**.{css,js}'))
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.revReplace({
          manifest: manifest
        }),
        gulp.dest(__paths.root.dist)))
    );
});