module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
  ],
  plugins: [
    'import',
  ],
  rules: {
    'function-paren-newline': ['error', 'consistent'],
    'max-len': ['warn', { code: 200 }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'no-console': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'linebreak-style': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
