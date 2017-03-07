'use strict';

var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp/tasks/', {
  recurse: true
});

gulp.task('build', gulp.series(
  'clean',
  'sprite:png',
  // 'sprite:svg',
  'assets',
  'styles',
  gulp.parallel('imagemin', 'webpack', 'jade')
));


gulp.task('build:production', gulp.series(
  'build',
  'revAssets',
  'revUpdateReferences',
  'updateHtml',
  'revStyles',
  'updateHtml',
  'revScripts',
  'updateHtml',
  'favicon',
  'htmlComb',
  'zip',
  'sizeReport'));

// npm run demo
gulp.task('demo', gulp.series('build:production', 'serve'));

// DEFAULT
gulp.task('default',
  gulp.series('build', gulp.parallel('serve', 'watch'))
);