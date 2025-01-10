import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const base = process.env.NODE_ENV === 'production' ? '/Hacker-world/' : '/'
// const base = '/'

// https://vite.dev/config/
export default defineConfig({
  // base: 'Hacker-world',
  base: base,
  plugins: [
    vue(),
    vueDevTools(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json', // Путь к вашему файлу manifest.json
          dest: '', // Путь назначения в директории сборки (будет скопирован в корень сборки)
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
