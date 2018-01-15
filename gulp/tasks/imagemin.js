const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const pngquant = require('imagemin-pngquant');
const paths = require('../../paths.config');

gulp.task('imagemin', () =>
  gulp
    .src(paths.src.imagemin)
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
    .pipe(gulp.dest(paths.dist.img)),
);
