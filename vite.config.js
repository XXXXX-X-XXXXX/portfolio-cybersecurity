import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-cybersecurity/', // nom EXACT du repo
  plugins: [react()],
});
