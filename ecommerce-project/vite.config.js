import { defineConfig } from 'vitest/config'  
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://react-production-1f2b.up.railway.app'
      },
      '/images': {
        target: 'https://react-production-1f2b.up.railway.app'
      }
    }
  },
  test: {             
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTest.js',
    pool: 'forks',  
  }
})