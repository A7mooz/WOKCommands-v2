import { defineConfig } from 'tsup';

export default defineConfig([
  {
    clean: true,
    dts: true,
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    splitting: false,
    shims: true,
    sourcemap: true,
    minify: true,
  },
  {
    clean: true,
    entry: [
      'src/command-handler/commands/*.ts',
      'src/command-handler/validations/**/*.ts',
      'src/event-handler/events/**/*.ts',
    ],
    format: ['cjs'],
    splitting: false,
    sourcemap: true,
    minify: true,
  },
]);
