import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    base: '/sqlite-wiki/',
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
