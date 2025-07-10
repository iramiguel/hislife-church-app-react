// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hislife-church-app-react/',  // ✅ this fixes the paths!
  plugins: [react()],
});
