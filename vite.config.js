import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImport from 'vite-plugin-babel-import'

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    vitePluginImport([
      {
        libraryName: 'element-plus',
        libraryDirectory: 'es',
        style(name) {
          if (name === 'locale') {
            return `element-plus/lib/theme-chalk/el-option.css`
          } else {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      }
    ])
  ],
  base: '/',
  resolve: {
    alias: {
      '@': resolve('src'),
      'styles': resolve('src/style'),
      'comps': resolve('src/components')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  logLevel: 'info',
  server: {
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    cors: true
  },
  build: {
    // output: {}
  }
})
