<script setup lang="ts">
import { NCard } from 'naive-ui'

defineProps<{
    title: string
    date: string
    description: string
}>()
</script>

<template>
    <div>
        <NCard :title="title" hoverable class="article-card" header-style="color: white">
            <template #header-extra>
            {{ date }}
            </template>
            {{ description }}
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