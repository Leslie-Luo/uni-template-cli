module.exports = {
  defaultSeverity: 'error',
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'declaration-colon-newline-after': null,
    'at-rule-no-unknown': null,
    'color-hex-case': null,
    'block-closing-brace-newline-after': null,
    'at-rule-empty-line-before': null,
    'number-no-trailing-zeros': null,
    'no-empty-source': null,
    'unit-case': null,
    'scss/at-rule-no-unknown': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'font-family-no-missing-generic-family-keyword': null,
  },
};
