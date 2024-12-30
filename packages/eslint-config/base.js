import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import createTypeScriptImportResolver from 'eslint-import-resolver-typescript';
import importPlugin from 'eslint-plugin-import';
import onlyWarn from 'eslint-plugin-only-warn';
import sortPlugin from 'eslint-plugin-sort';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import turboPlugin from 'eslint-plugin-turbo';
import tsEslintPlugin from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  sortPlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  ...tailwindPlugin.configs['flat/recommended'],
  ...tsEslintPlugin.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      sort: sortPlugin,
      tailwind: tailwindPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ['apps/*/tsconfig.json', 'packages/*/tsconfig.json'],
        }),
      ],
      tailwind: {
        callees: ['cn'],
        config: path.join(import.meta.dirname, 'tailwind.config.ts'),
      },
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
