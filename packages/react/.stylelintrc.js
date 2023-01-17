module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
    plugins: ['stylelint-order'],
    rules: {
      'at-rule-empty-line-before': [
        'always',
        {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment'],
        },
      ],
      'block-closing-brace-newline-after': 'always',
      'block-closing-brace-newline-before': 'always',
      'block-opening-brace-newline-after': 'always',
      'block-opening-brace-space-before': 'always',
      'color-hex-case': 'lower',
      'declaration-block-semicolon-newline-after': 'always',
      'declaration-block-trailing-semicolon': 'always',
      'declaration-colon-space-after': 'always',
      'declaration-colon-space-before': 'never',
      indentation: 2,
      'length-zero-no-unit': true,
      'no-eol-whitespace': true,
      'no-missing-end-of-source-newline': true,
      'order/order': ['custom-properties', 'declarations'],
      'order/properties-alphabetical-order': true,
      'order/properties-order': ['width', 'height'],
      'string-quotes': 'single',
      'scss/at-extend-no-missing-placeholder': null, // TODO: switch to warning
      'scss/at-import-no-partial-leading-underscore': null,
    },
  };
  