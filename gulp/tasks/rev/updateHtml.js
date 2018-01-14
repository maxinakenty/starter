const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const paths = require('../../../paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('updateHtml', () => {
  const manifest = gulp.src(
    path.join(paths.root.manifest, 'rev-manifest.json'),
  );

  return gulp.src(path.join(paths.root.dist, '/**/*.html')).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.revReplace({
          manifest: manifest,
        }),
        gulp.dest(paths.root.dist),
      ),
    ),
  );
});
