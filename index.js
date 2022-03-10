const vue = require.resolve('./rules/vue');

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    vue
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['**/test/**/*.spec.{j,t}s?(x)', '**/test/**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
      rules: {
        'vue/one-component-per-file': 'off',
      },
    },
  ],
}
