import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@atoms': resolve(__dirname + '/src/atoms'),
      '@components': resolve(__dirname + '/src/components'),
      '@hooks': resolve(__dirname + '/src/hooks'),
      '@pages': resolve(__dirname + '/src/pages'),
    },
  },
  base: "/Portfolio/",
  server: {
    open: true,
    port: 4200,
  },
});
