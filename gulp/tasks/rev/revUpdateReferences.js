const { join } = require('path');
const { task, src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const { root } = require('../../../paths.config');

const IS_DEVELOPMENT =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

task('revUpdateReferences', () => {
  const manifest = src(join(root.manifest, 'rev-manifest.json'));

  return src(join(root.dist, '/**/**.{css,js}')).pipe(
    $.if(
      !IS_DEVELOPMENT,
      combine(
        $.revReplace({
          manifest,
        }),
        dest(root.dist),
      ),
    ),
  );
});
