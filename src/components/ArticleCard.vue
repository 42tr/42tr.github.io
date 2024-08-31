<script setup lang="ts">
import { NCard } from 'naive-ui'
</script>

<template>
    <div>
        <NCard title="第一篇文章" hoverable class="article-card" header-style="color: white">
            <template #header-extra>
            2024-08-28
            </template>
            纪念一下~
        </NCard>
    </div>
</template>

<style scoped>
.article-card {
    background-color: rgba(0,0,0,0.372);
    border-radius: 12px;
    cursor: pointer;
}
</style>