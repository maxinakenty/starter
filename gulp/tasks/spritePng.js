const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const paths = require('../../paths.config');

gulp.task('sprite:png', () =>
  combine(
    gulp.src(paths.src.spritePng),
    $.spritesmith({
      imgPath: '../sprites/sprite.png',
      imgName: 'sprite.png',
      // retinaImgName: 'sprite@2x.png',
      // retinaSrcFilter: '**/*@2x.png',
      cssName: '_sprite-png.scss',
      padding: 60,
      algorithm: 'alt-diagonal',
    }),
    $.if('*.scss', gulp.dest(paths.tmp.styles), gulp.dest(paths.dist.sprites)),
  ).on('error', $.notify.onError()),
);
