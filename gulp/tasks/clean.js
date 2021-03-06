const { task } = require('gulp');
const del = require('del');
const paths = require('../../paths.config');

task('clean', done =>
  del(
    [
      paths.root.dist,
      paths.root.tmp,
      paths.root.manifest,
      paths.favicon.FAVICON_DATA_FILE,
      paths.root.debug,
    ],
    done,
  ),
);
