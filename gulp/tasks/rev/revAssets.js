const path = require('path');
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const revNapkin = require('gulp-rev-napkin');
const combine = require('stream-combiner2').obj;
const paths = require('../../../paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

gulp.task('revAssets', () => {
  const ignoreThese = '!' + path.join(paths.root.dist, '/**/*+(css|js|html)');

  return gulp.src([path.join(paths.dist.all), ignoreThese]).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.rev(),
        gulp.dest(paths.root.dist),
        $.revNapkin({
          verbose: false,
        }),
        $.rev.manifest('rev-manifest.json'),
        gulp.dest(paths.root.manifest),
      ),
    ),
  );
});
