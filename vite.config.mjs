import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Development server port
    open: true  // Optional: automatically open browser when dev server starts
  },
  preview: {
    port: 3002  // Production preview server port
  }
})

