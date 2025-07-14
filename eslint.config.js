import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true,
        node: true
      }
    },
    plugins: {
      react: eslintPluginReact,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      prettier: eslintPluginPrettier
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    rules: {
      // Add or override specific rules as needed
      'prettier/prettier': 'error', // Enforce Prettier formatting as an ESLint rule
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
      // ... other custom rules
    }
  }
];
