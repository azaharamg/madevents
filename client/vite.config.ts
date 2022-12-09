import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { PORT = 5000 } = process.env;

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    outDir: 'build',
  },
  server: {
    open: true,
    proxy: {
      '/api': `http://localhost:${PORT}`
    },
  }
})