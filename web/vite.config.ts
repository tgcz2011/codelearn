import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  // 相对路径，确保直接打开 index.html（file://）或部署到子路径时资源可加载
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
  optimizeDeps: {
    // typescript 包较大且通过动态 import 按需加载，不进预打包，避免首屏体积
    exclude: ['typescript'],
  },
})
