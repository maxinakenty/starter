const { join } = require('path');
const { task, src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const paths = require('../../../paths.config');

console.log('paths', typeof paths);

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

task('revAssets', () => {
  const ignoreThese = `!${join(paths.root.dist, '/**/*+(css|js|html)')}`;

  return src([join(paths.dist.all), ignoreThese]).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.rev(),
        dest(paths.root.dist),
        $.revNapkin({
          verbose: false,
        }),
        $.rev.manifest('rev-manifest.json'),
        dest(paths.root.manifest),
      ),
    ),
  );
});
