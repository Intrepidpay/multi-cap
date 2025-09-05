import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap' // Use default import instead of named import

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      baseUrl: 'https://www.multicapital.online',
      outDir: 'dist',
    }),
  ],
  base: '/',   // Important: root base for custom domains
  server: {
    port: 3000,
    open: true,
  },
})
