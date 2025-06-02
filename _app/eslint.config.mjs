import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  ignore: ['sanity.types.ts', './.next/', './node_modules', '*.d.ts'],
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
  }),
];

export default eslintConfig;
