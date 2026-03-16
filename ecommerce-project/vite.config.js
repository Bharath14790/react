import { defineConfig } from 'vitest/config'  // ← changed from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      },
      '/images': {
        target: 'http://localhost:3000'
      }
    }
  },
  test: {              // ← moved OUT of server.proxy, now top-level
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTest.js',
    pool: 'forks',  
  }
})