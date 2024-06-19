import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 8090, 
  },
  plugins: [vue()],
  resolve: {
    alias: {
        "@": path.resolve(__dirname, "src"),
        extensions: [".js", ".vue", ".json"],
    },
},
})
