'use strict';

var gulp = require('gulp');
var __paths = require('../paths.config');
var htmlbeautify = require('gulp-html-beautify');

gulp.task('htmlComb', function() {

  var options = {
    'indent_size': 4,
    'indent_char': ' ',
    'eol': '\n',
    'indent_level': 0,
    'indent_with_tabs': false,
    'preserve_newlines': true,
    'max_preserve_newlines': 10,
    'jslint_happy': false,
    'space_after_anon_function': false,
    'brace_style': 'collapse',
    'keep_array_indentation': false,
    'keep_function_indentation': false,
    'space_before_conditional': true,
    'break_chained_methods': false,
    'eval_code': false,
    'unescape_strings': false,
    'wrap_line_length': 0,
    'wrap_attributes': 'auto',
    'wrap_attributes_indent_size': 4,
    'end_with_newline': false
  };
  return gulp.src(__paths.dist.html)
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest(__paths.root.dist));
});