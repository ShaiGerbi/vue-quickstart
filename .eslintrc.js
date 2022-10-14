module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['warn'],
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'never'],
    'no-var': ['error'],
    'no-multi-spaces': ['error'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: false }],
    'vue/attributes-order': ['error'],
    'vue/no-multi-spaces': ['error'],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
    'vue/order-in-components': ['error']
  }
}
