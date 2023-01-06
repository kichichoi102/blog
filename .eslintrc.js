module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'object-curly-spacing': ['error', 'always'],
  },
  "space-before-function-paren": ["error", {
    "anonymous": "never",
    "named": "never",
    "asyncArrow": "never"
}],
};
