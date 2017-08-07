const gulp = require('gulp');
const __paths = require('../../paths.config');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const path = require('path');
const IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('updateHtml', () => {
  const manifest = gulp.src(path.join(__paths.root.manifest, 'rev-manifest.json'));

  return gulp.src(path.join(__paths.root.dist, '/**/*.html'))
    .pipe(
      $.if(!IS_DEVELOPMENT, combine(
        $.revReplace({
          manifest: manifest
        }),
        gulp.dest(__paths.root.dist)))
    );
});