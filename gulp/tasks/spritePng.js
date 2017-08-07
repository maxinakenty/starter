'use strict';

const gulp = require('gulp');
const __paths = require('../paths.config');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj; // Handle errors

gulp.task('sprite:png', () => {

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