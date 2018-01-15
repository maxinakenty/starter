const { join } = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const { root } = require('../../../paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('updateHtml', () => {
  const manifest = gulp.src(join(root.manifest, 'rev-manifest.json'));

  return gulp.src(join(root.dist, '/**/*.html')).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.revReplace({
          manifest,
        }),
        gulp.dest(root.dist),
      ),
    ),
  );
});
