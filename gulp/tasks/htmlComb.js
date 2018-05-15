const { task, src, dest } = require('gulp');
const htmlBeautify = require('gulp-html-beautify');
const paths = require('../../paths.config');

const options = {
  indent_size: 4,
  indent_char: ' ',
  eol: '\n',
  indent_level: 0,
  indent_with_tabs: false,
  preserve_newlines: true,
  max_preserve_newlines: 10,
  jslint_happy: false,
  space_after_anon_function: false,
  brace_style: 'collapse',
  keep_array_indentation: false,
  keep_function_indentation: false,
  space_before_conditional: true,
  break_chained_methods: false,
  eval_code: false,
  unescape_strings: false,
  wrap_line_length: 0,
  wrap_attributes: 'auto',
  wrap_attributes_indent_size: 4,
  end_with_newline: false,
};

task('htmlComb', () =>
  src(paths.dist.html)
    .pipe(htmlBeautify(options))
    .pipe(dest(paths.root.dist)),
);
