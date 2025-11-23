import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/porfolio-cybersecurity/', // nom EXACT du repo
  plugins: [react()],
});
