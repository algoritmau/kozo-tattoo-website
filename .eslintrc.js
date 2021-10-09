module.exports = {
  root: true,
  extends: ['standard'],
  globals: {
    IS_DEVELOPMENT: 'readonly'
  },
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    'no-debugger': 'off'
  }
}
