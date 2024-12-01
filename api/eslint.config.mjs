import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import nodePlugin from 'eslint-plugin-n';


export default tseslint.config(
  eslint.configs.recommended,
  { 
    overrides: [
      {
        files: ['**/*.ts'],
        rules: {
          // Disable all ESLint rules
          'no-unused-vars': 'off',
          'no-console': 'off',
          'no-debugger': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
          '@typescript-eslint/explicit-module-boundary-types': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
        },
      },
    ],
    ignorePatterns: [
      '**/node_modules/*',
      '**/*.mjs',
      '**/*.js',
      '**/*.entity.ts', // Add more files or patterns as needed
      '**/*.spec.ts',
      '**/*.test.ts',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },  

  { files: ['**/*.ts'] },
  
)