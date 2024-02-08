import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server:{
    host: false,
    port: 8000,
    watch:{
      usePolling: true
    }
  }, 
})
