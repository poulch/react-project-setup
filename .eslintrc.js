module.exports = {
     extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
     rules: {
          'prettier/prettier': 'error',
     },
     overrides: [
          {
               files: ['**/*.ts?(x)'],
               extends: ['prettier/@typescript-eslint'],
          },
     ],
};
