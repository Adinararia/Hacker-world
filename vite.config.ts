import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const base = process.env.NODE_ENV === 'production' ? '/Hacker-world/' : '/'
// const base = '/'

// https://vite.dev/config/
export default defineConfig({
  // base: 'Hacker-world',
  base: base,
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
