import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import Vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Vuetify()],
  resolve: {
    alias: [
      {
        find: "/@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@1",
        replacement: resolve(__dirname, "src"),
      },
    ]
  }
})
