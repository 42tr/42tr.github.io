<script setup lang="ts">
import { NCode, NConfigProvider } from 'naive-ui'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'

hljs.registerLanguage('typescript', typescript)
</script>

<template>
    <h1>第一篇文章</h1>
    <h2>关于本站</h2>
    <p>一直没有满意的写文章的地方，所有应用都有些无法满足要求的点，不如自己写一个~</p>
    <h2>实现</h2>
    <h3>前端框架</h3>
    <p>vue3 + vite + naive-ui</p>
    <h3>访客计数</h3>
    <p>使用 <a target="_blank" href="https://busuanzi.ibruce.info/">不蒜子</a></p>
    <h3>允许被搜索引擎爬取</h3>
    <p>根目录设置 robots.txt</p>
    <p>google：判断是否被索引：搜索 site:42tr.github.io，未被索引会提示使用 <a href="https://search.google.com/search-console?resource_id=https%3A%2F%2F42tr.github.io%2F" target="_blank">google search consoloe</a>，验证网站所有权，添加站点地图 <a href="https://42tr.github.io/sitemap.xml">sitemap.xml</a>，完成后过一天再看。</p>
    <h2>开发中遇到的问题</h2>
    <h3>打包发布到 github.io 的文件无法加载</h3>
    <p>问题原因：打包后生成的文件名以下划线开头，无法返回。</p>
    <p>解决方案：修改 <b>vite.config.ts</b></p>
    <n-config-provider :hljs="hljs">
        <n-code language="typescript" code="
export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            output: {
                // 入口文件名
                // entryFileNames: `assets/[name].js`,
                // 块文件名：不能下划线开头，增加一个 main 前缀
                chunkFileNames: `assets/main-[name]-[hash].js`,
                // 资源文件名 css 图片等等
                // assetFileNames: `assets/[name]-[hash].[ext]`,
            }
        }
    }
})
" />
解决发布缓存问题——增加唯一标识，如时间戳
<n-code language="typescript" code="
const timestamp = new Date().getTime()

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // 入口文件名
        entryFileNames: `assets/[name].${timestamp}.js`,
        // 块文件名
        chunkFileNames: `assets/[name]-[hash].${timestamp}.js`,
        // 资源文件名 css 图片等等
        assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
      },
    },
  }
})
" />
    </n-config-provider>
</template>

<style scoped>

</style>