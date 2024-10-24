import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
       input: {
          // 配置所有页面路径，使得所有页面都会被打包
          main: resolve(__dirname, 'index.html'),
          resume: resolve(__dirname, 'resume/zh/index.html'),
          resumeEn: resolve(__dirname, 'resume/en/index.html'),
          articleFirst: resolve(__dirname, 'article/first/index.html'),
          designPattern: resolve(__dirname, 'design-pattern/index.html'),
       },
       output: {
        chunkFileNames: `assets/main-[name]-[hash].js`, // 不能下划线开头，增加一个 main 前缀
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   } else {
        //     return 'other';
        //   }
        // }
        // manualChunks() {
        //   return 'vendor';
        // }
       }
    }
  }
})
