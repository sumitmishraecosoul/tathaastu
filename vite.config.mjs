import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Read port from .env file, default to 3002 if not found
const port = parseInt(process.env.PORT || '3002', 10)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port, // Development server port (from .env or default 3002)
    open: true  // Optional: automatically open browser when dev server starts
  },
  preview: {
    port: port  // Production preview server port (from .env or default 3002)
  }
})

