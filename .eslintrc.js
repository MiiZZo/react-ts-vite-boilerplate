module.exports = {
  extends: [
    'plugin:effector/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  plugins: ['effector'],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
  },
};
