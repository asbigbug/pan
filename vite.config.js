// import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// console.log(import.meta.);
// const isProduciton = import.meta.env.VITE_ENV
// console.log(isProduciton);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  base: './',
  outDir: 'dist',
  server: {
    hot: true,
    open: true,
    host: "0.0.0.0",
    port: 8081,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // }
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/test': {
        target: 'https://www.fastmock.site/mock/3614f77c7acf69bea82ff0c6f6109101/api',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/test/, '')
      }
    }
  },
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@": path.resolve(__dirname, './src')
    }
  },
})
