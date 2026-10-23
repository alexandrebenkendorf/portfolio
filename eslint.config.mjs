import defineEslintConfig from '@alexandrebenkendorf/frontend-tooling/eslint';

export default await defineEslintConfig({
  project: ['./tsconfig.app.json', './tsconfig.node.json', './tsconfig.vitest.json'],
  tsconfigRootDir: import.meta.dirname,
  includeImport: true,
  includeReact: true,
  includeTest: true,
  testFramework: 'vitest',
  ignores: { extend: ['.agents/**/*'] },
  patterns: { importDevDependencyFiles: { extend: ['src/vitest.setup.*'] } },
});
