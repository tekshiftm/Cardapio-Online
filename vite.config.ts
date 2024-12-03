import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Cardapio-Online/',  // Caminho base para GitHub Pages
  plugins: [react()]
});
