module.exports = {
  root: true,
  env: {
    node: true,
    jquery: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': 'off',
    eqeqeq: 'off',
    'prefer-promise-reject-errors': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        arrowParens: 'avoid',
        trailingComma: 'none'
      }
    ],
    'no-unused-vars': 0,
    'no-case-declarations': 0,
    'no-empty': 0,
    'comma-dangle': [2, 'never']
  },
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    _: 'writable',
    md5Name: 'writable',
    AMap: false,
    AMapUI: false
  }
}
