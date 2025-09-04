import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // 👈 Important: root base for custom domains
  server: {
    port: 3000,
    open: true,
  },
})