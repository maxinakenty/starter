const { task, series, parallel } = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp/tasks/', {
  recurse: true,
});

task(
  'build',
  series(
    'clean',
    'assets',
    'styles',
    parallel('imagemin', 'webpack', 'pug', done => {
      done();
    }),
  ),
);

task(
  'build:production',
  series(
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
task('demo', series('build:production', 'serve'));

// DEFAULT
task('default', series('build', parallel('serve', 'watch')));
