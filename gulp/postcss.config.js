const short = require('postcss-short');
const assets = require('postcss-assets');
const clearfix = require('postcss-clearfix');
const autoprefixer = require('autoprefixer');
const inlineSvg = require('postcss-inline-svg');
const flexbugs = require('postcss-flexbugs-fixes');
const { dist } = require('../paths.config');

module.exports = [
  autoprefixer({
    browsers: ['last 2 version', '> 5%'],
  }),
  short,
  clearfix,
  inlineSvg({
    path: dist.img,
  }),
  flexbugs,
  assets({
    basePath: dist.root,
    loadPaths: ['img/'],
  }),
];
