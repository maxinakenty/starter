const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks/', {
  recurse: true,
});

gulp.task(
  'build',
  gulp.series(
    'clean',
    'assets',
    'styles',
    gulp.parallel('imagemin', 'webpack', 'pug', done => {
      done();
    }),
  ),
);

gulp.task(
  'build:production',
  gulp.series(
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
    'sizeReport',
    done => {
      done();
    },
  ),
);

// npm run demo
gulp.task('demo', gulp.series('build:production', 'serve'));

// DEFAULT
gulp.task('default', gulp.series('build', gulp.parallel('serve', 'watch')));
