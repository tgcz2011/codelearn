import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 读取 .env 中所有变量（含不带 VITE_ 前缀的私有变量）
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 相对路径，确保部署到子路径（如 GitHub Pages /codelearn/）时资源可加载
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
      proxy: {
        // OnlineCompiler.io API 代理：前端请求 /onlinecompiler-api/*，
        // Vite dev server 自动转发到 https://api.onlinecompiler.io/* 并注入 Authorization header。
        // API key 存在 .env 的 ONLINECOMPILER_API_KEY 中（不带 VITE_ 前缀，不打包到前端）。
        '/onlinecompiler-api': {
          target: 'https://api.onlinecompiler.io',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/onlinecompiler-api/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (env.ONLINECOMPILER_API_KEY) {
                proxyReq.setHeader('Authorization', env.ONLINECOMPILER_API_KEY)
              }
            })
          },
        },
      },
    },
    optimizeDeps: {
      // typescript 包较大且通过动态 import 按需加载，不进预打包，避免首屏体积
      exclude: ['typescript'],
    },
  }
})
