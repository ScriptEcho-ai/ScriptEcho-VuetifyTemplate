import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import Vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Vuetify()],
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: [
      {
        find: "/@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "ScriptEcho/lib",
        replacement: resolve(__dirname, "src"),
      },
    ]
  }
})
