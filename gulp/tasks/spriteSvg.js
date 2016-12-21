'use strict';

// var path = require('path');
// var gulp = require('gulp');
// var $ = require('gulp-load-plugins')();
// var __paths = require('../paths.config');
// var combine = require('stream-combiner2').obj;
// var handleErrors = require('../handlers/error');

// var IS_DEVELOPMENT = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'; // Changing environment

// gulp.task('sprite:svg', function() {
// 	gulp.src(__paths.src.spriteSvg)
// 		.pipe($.if(IS_DEVELOPMENT, $.plumber(handleErrors)))
// 		.pipe($.if(!IS_DEVELOPMENT, combine(
// 			$.svgstore({
// 				optimize: true,
// 			}),
// 			$.svgmin()
// 		)))
// 		.pipe($.svgstore())
// 		.pipe($.rename('sprite-svg.svg'))
// 		.pipe(gulp.dest('./__dist/sprites'));
// });