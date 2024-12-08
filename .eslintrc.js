module.exports = {
    env: {
      node: true,
      jest: true,
      es2021: true
    },
    extends: 'airbnb-base',
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      'class-methods-use-this': 'off',
      'no-console': 'off'
    }
  };