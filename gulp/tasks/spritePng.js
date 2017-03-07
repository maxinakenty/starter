'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var $ = require('gulp-load-plugins')();
var combine = require('stream-combiner2').obj; // Handle errors

gulp.task('sprite:png', function() {

  return combine(
    gulp.src(__paths.src.spritePng),
    $.spritesmith({
      imgPath: '../sprites/sprite.png',
      imgName: 'sprite.png',
      // retinaImgName: 'sprite@2x.png',
      // retinaSrcFilter: '**/*@2x.png',
      cssName: '_sprite-png.scss',
      padding: 60,
      algorithm: 'alt-diagonal',
    }),
    $.if('*.scss', gulp.dest(__paths.tmp.styles), gulp.dest(__paths.dist.sprites))
  ).on('error', $.notify.onError());
});