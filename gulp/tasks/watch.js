const { task, watch, series } = require('gulp');
const { watch: watching } = require('../../paths.config');

task('watch', () => {
  watch(watching.pug, series('pug'));
  watch(watching.assets, series('assets'));
  watch(watching.styles, series('styles'));
});
