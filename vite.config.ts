import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PrathamPatel/',
  build: {
    outDir: 'dist',
    target: 'esnext',
    modulePreload: false
  }
})
