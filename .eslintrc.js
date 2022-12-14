module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    '@nuxtjs'
  ],
  plugins: [
  ],
  ignorePatterns: ['api.ts'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    'vue/multi-word-component-names': 'off'
  }
}
