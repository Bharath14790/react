import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // needed for React components and ESM modules
    globals: true,         // optional, allows using it/expect without imports
    include: ['src/**/*.test.{js,ts,jsx,tsx}'], // ensures Vitest finds your test files
  },
})
