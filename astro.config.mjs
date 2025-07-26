import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://isabella-quince.com', // Replace with your actual domain
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'countdown': ['./src/components/Countdown.astro']
          }
        }
      }
    }
  }
});