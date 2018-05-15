const { task, src, dest } = require('gulp');
const $ = require('gulp-load-plugins')();
const combine = require('stream-combiner2').obj;
const paths = require('../../paths.config');

task('sprite:png', () =>
  combine(
    src(paths.src.spritePng),
    $.spritesmith({
      imgPath: '../sprites/sprite.png',
      imgName: 'sprite.png',
      // retinaImgName: 'sprite@2x.png',
      // retinaSrcFilter: '**/*@2x.png',
      cssName: '_sprite-png.scss',
      padding: 60,
      algorithm: 'alt-diagonal',
    }),
    $.if('*.scss', dest(paths.tmp.styles), dest(paths.dist.sprites)),
  ).on('error', $.notify.onError()),
);
