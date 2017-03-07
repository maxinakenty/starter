'use strict';

var __paths = require('./paths.config');
var autoprefixer = require('autoprefixer');
var short = require('postcss-short');
var clearfix = require('postcss-clearfix');
var inlineSvg = require('postcss-inline-svg');
var flexbugs = require('postcss-flexbugs-fixes');
var assets = require('postcss-assets');

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';


module.exports = [
  autoprefixer({
    browsers: [
      'last 2 version', '> 10%'
    ]
  }),
  short,
  clearfix,
  inlineSvg({
    path: __paths.dist.img
  }),
  flexbugs,
  assets({
    basePath: __paths.dist.root,
    loadPaths: ['img/']
  })
];