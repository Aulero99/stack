import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server:{
    host: false,
    port: 7000,
    watch:{
      usePolling: true
    }
  }, 
})
