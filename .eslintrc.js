module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
   'no-alert': 0,
    // 结尾逗号，分割。
    'comma-dangle': [2, 'never'],
    'no-param-reassign': ["error", { "props": false }],
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
