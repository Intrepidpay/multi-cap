import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.multicapital.online',
      outDir: 'dist', 
      generateRobotsTxt: false,
    }),
  ],
  base: '/',   
  server: {
    port: 3000,
    open: true,
  },
})
