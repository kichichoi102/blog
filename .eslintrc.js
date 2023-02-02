module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'require-jsdoc': 0,
    'no-unused-vars': 'off',
    'max-len': ['error', { 'code': 500 }],
    'react/prop-types': ['off'],
  },
};
