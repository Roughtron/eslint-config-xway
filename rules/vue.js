module.exports = {
  rules: {
    camelcase: 0,
    'linebreak-style': 0,
    'vue/attributes-order': 'warn',
    'vue/max-attributes-per-line': 'warn',
    'vue/order-in-components': ['warn', {
      order: [
        'mixins',
        'components',
        'props',
        'ROUTER_GUARDS',
        'data',
        'watch',
        'computed',
        'LIFECYCLE_HOOKS',
        'methods',
      ],
    }],
    'vue/html-end-tags': 'error',
    'vue/html-indent': 'error',
    'vue/html-self-closing': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/no-v-html': 'off',
    'vue/attribute-hyphenation': ['error'],
  }
}