const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;

const paths = require('../../paths.config');

gulp.task('pug', () =>
  combine(
    gulp.src(paths.src.pug),
    $.pug({
      pretty: true,
    }),
    gulp.dest(paths.root.dist),
  ).on('error', $.notify.onError()),
);
