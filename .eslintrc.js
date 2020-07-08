module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  extends: ['airbnb-typescript-prettier'],
  env: {
    jest: true
  },
  ignorePatterns: ['dist', '*.config.js', '.*.js'],
  rules: {
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['self'] }],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
  }
};
