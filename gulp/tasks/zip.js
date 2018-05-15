const { task, src, dest } = require('gulp');
const zip = require('gulp-zip');
const paths = require('../../paths.config');

task('zip', cb => {
  src(paths.dist.all)
    .pipe(zip('dist.zip'))
    .pipe(dest(paths.root.dist))
    .on('end', cb);
});
