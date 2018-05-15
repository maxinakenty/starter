const { task, src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const pngquant = require('imagemin-pngquant');
const paths = require('../../paths.config');

task('imagemin', () =>
  src(paths.src.imagemin)
    .pipe($.changed(paths.dist.img))
    .pipe(
      $.imagemin({
        progressive: true,
        svgoPlugins: [
          {
            removeViewBox: false,
          },
        ],
        use: [pngquant()],
      }),
    )
    .pipe(dest(paths.dist.img)),
);
