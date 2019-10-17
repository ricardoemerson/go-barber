module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['log', 'error'] }],
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
    'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
    'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
    'no-use-before-define': ['error', { 'variables': false }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      'ObjectPattern': { 'multiline': false, 'minProperties': 6 },
  }],
    'template-curly-spacing': ['error', 'always'],
  },
};
