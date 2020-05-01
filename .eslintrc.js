module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'no-irregular-whitespace': ['error'],
    semi: [ 'error', 'always' ],
    indent: ['error', 2]
  },
};
