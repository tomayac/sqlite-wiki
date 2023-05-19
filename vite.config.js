import { defineConfig } from 'vite';

export default defineConfig({
  base: '/sqlite-wiki/',
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  optimizeDeps: {
    exclude: ['@sqlite.org/sqlite-wasm'],
  },
  build: {
    outDir: 'docs',
    target: 'esnext',
  },
});
