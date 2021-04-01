import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import clearSth from 'vite-plugin-clear-sth'

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    clearSth({
      patterns: [/console.log\(.*\)/g]
    }),
    vitePluginImp({
      libList: [{
        libName: 'element-plus',
          style: (name) => {
            if (name === 'locale' || name === 'el-date-time-picker') {
              return false
            }
            return`element-plus/lib/theme-chalk/${name}.css`
          }
      }]
    })
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
    sourcemap: false
  }
})
