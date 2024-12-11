<script setup lang="ts">
import SelfInfo from './components/SelfInfo.vue'
import ArticleCard from './components/ArticleCard.vue'
import Sport from './components/Sport.vue'

import { darkTheme, NConfigProvider, NInfiniteScroll, NDrawer, NDrawerContent } from 'naive-ui'
import type { GlobalTheme } from 'naive-ui'
import { ref } from 'vue'

const theme: GlobalTheme = darkTheme

const drawerActive = ref(false)
const drawerUrl = ref('')
const windowHeight = ref(window.innerHeight)
const openDrawer = (u: string) => {
  drawerActive.value = true
  drawerUrl.value = u
}

window.onresize = () => {
  windowHeight.value = window.innerHeight
}
</script>

<template>
  <!-- background img and gradient -->
  <div class="background"></div>
  <div id="gradient"></div>
  <!-- background img and gradient -->

  <n-config-provider :theme="theme">
    <div class="left-side">
      <n-infinite-scroll style="height: 100%" :distance="20">
        <ArticleCard class="article-card" @click="openDrawer('/pages/x/')" title="邮件助手" date="2024-12-4" description="Rust 编写的邮件助手" />
        <ArticleCard class="article-card" @click="openDrawer('/pages/resume-design/')" title="制作简历" date="2024-10-31" description="用各种工具、语言太麻烦了，不如直接用最熟悉的 HTML 写~" />
        <ArticleCard class="article-card" @click="openDrawer('/article/first/')" title="小破站的第一篇文章" date="2024-08-28" description="纪念一下~" />
      </n-infinite-scroll>
    </div>

    <div class="right-side">
      <SelfInfo :openDrawer="openDrawer" />
      <span id="busuanzi_container_site_pv" style="color: white;">
        本站总访问量<span id="busuanzi_value_site_pv"></span>次
      </span>
      <br>
      <span id="busuanzi_container_site_uv" style="color: white">  
        本站访客数<span id="busuanzi_value_site_uv"></span>人次
      </span>
      <Sport />
    </div>
  </n-config-provider>

  <n-drawer v-model:show="drawerActive" :height="windowHeight" placement="top" :native-scrollbar="false">
    <n-drawer-content closable body-content-style="padding: 0;" >
      <iframe :src="drawerUrl" class="drawer-iframe"></iframe>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.left-side {
  width: calc(100% - 295px);
  height: 100vh;
  float: left;
  padding: 15px 0px 15px 15px;
}
.right-side {
  width: 295px;
  height: 100vh;
  float: left;
  padding: 15px 15px 15px 0px;
}
.article-card {
  margin-bottom: 10px;
  margin-right: 10px;
}
.drawer-iframe {
  height: 100%;
  width: 100%;
  border: medium none;
  vertical-align: top;
}
</style>