const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const { pug, root } = require('../../paths.config');

gulp.task('pug', () =>
  combine(
    gulp.src(pug.entry),
    $.pug({
      pretty: true,
    }),
    gulp.dest(root.dist),
  ).on('error', $.notify.onError()),
);
