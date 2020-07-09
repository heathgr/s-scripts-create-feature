module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/member-delimiter-style': ['error', {
      "multiline": {
        "delimiter": "comma",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "comma",
        "requireLast": false
      }
    }],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  "ignorePatterns": [".eslintrc.js", "template_files/**/*"],
}
