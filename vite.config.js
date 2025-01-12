import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // The root directory where `index.html` resides
  build: {
    outDir: 'dist', // The directory for production build
    rollupOptions: {
      input: './index.html', // Entry point
    },
  },
});
