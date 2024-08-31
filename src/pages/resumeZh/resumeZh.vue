<script setup lang="ts">
import { NAvatar, NIcon, NThing, NButton, NDivider, NTimeline, NTimelineItem, NSpace, NTag } from 'naive-ui'
import { Email, Phone, Location, LogoGithub, GenderMale } from '@vicons/carbon'
import Avatar from '../../assets/avatar.jpg'
</script>

<template>
    <div>
        <!-- header start -->
        <n-thing>
            <template #avatar>
                <n-avatar :src=Avatar />
            </template>
            <template #header>
                <div style="display: flex; align-items: center; justify-content: center;">
                刘阳&nbsp;
                <n-icon><GenderMale /></n-icon>&nbsp;28
                </div>
            </template>
            <template #description>
                软件工程师
            </template>
            <n-button size="small" :bordered="false">
                <template #icon>
                    <n-icon><Phone /></n-icon>
                </template>
                +86-189****1530
            </n-button>
            <n-button size="small" :bordered="false">
                <template #icon>
                    <n-icon><Email /></n-icon>
                </template>
                1055894396@qq.com
            </n-button>
            <n-button size="small" :bordered="false">
                <template #icon>
                    <n-icon><LogoGithub /></n-icon>
                </template>
                42tr
            </n-button>
            <n-button size="small" :bordered="false">
                <template #icon>
                    <n-icon><Location /></n-icon>
                </template>
                南京
            </n-button>
        </n-thing>
        <!-- header end -->
        <n-divider />
        <!-- body start -->
        <h2>项目经历</h2>
        <n-timeline>
            <n-timeline-item type="success" title="AI 软件开发工程师 | 华为" content="使用 RAG 帮助团队提高问题定位效率，从 es、mysql 以及其他系统中进行搜索后针对问题进行重排序并总结。">
                <template #footer>
                    2024.01 - Now
                    <n-space>
                        <n-tag :bordered="false" round size="small">LLM</n-tag>
                        <n-tag :bordered="false" round size="small">Java</n-tag>
                        <n-tag :bordered="false" round size="small">Springboot</n-tag>
                        <n-tag :bordered="false" round size="small">Python</n-tag>
                        <n-tag :bordered="false" round size="small">Vue3</n-tag>
                        <n-tag :bordered="false" round size="small">Typescript</n-tag>
                        <n-tag :bordered="false" round size="small">Mysql</n-tag>
                        <n-tag :bordered="false" round size="small">ElasticSearch</n-tag>
                        <n-tag :bordered="false" round size="small">Docker</n-tag>
                    </n-space>
                </template>
            </n-timeline-item>
            <n-timeline-item title="嵌入式系统开发工程师 | 华为" content="开发新版本需求，定位旧版本问题并开发补丁进行修复。作为 CIE，负责维护版本构建流水线以及补丁构建网站。工作之余，开发了多个应用提高团队开发与问题定位效率。">
                <template #footer>
                    2021.09 - 2023.12
                    <n-space>
                        <n-tag :bordered="false" round size="small">C</n-tag>
                        <n-tag :bordered="false" round size="small">Linux</n-tag>
                        <n-tag :bordered="false" round size="small">Git</n-tag>
                        <n-tag :bordered="false" round size="small">Shell</n-tag>
                        <n-tag :bordered="false" round size="small">CI/CD</n-tag>
                        <n-tag :bordered="false" round size="small">Go</n-tag>
                        <n-tag :bordered="false" round size="small">Python</n-tag>
                        <n-tag :bordered="false" round size="small">Redis</n-tag>
                    </n-space>
                </template>
            </n-timeline-item>
            <n-timeline-item title="Java 开发工程师 | 睿企科技" content="在公司开发的 ETL 平台开发模块处理和分析大数据。设计、开发并维护多个应用用于展示分析过的数据。">
                <template #footer>
                    2020.05 - 2021.07
                    <n-space>
                        <n-tag :bordered="false" round size="small">Kubenetes</n-tag>
                        <n-tag :bordered="false" round size="small">TiDB</n-tag>
                        <n-tag :bordered="false" round size="small">React</n-tag>
                        <n-tag :bordered="false" round size="small">Minio</n-tag>
                        <n-tag :bordered="false" round size="small">Java</n-tag>
                        <n-tag :bordered="false" round size="small">Gradle</n-tag>
                        <n-tag :bordered="false" round size="small">Javascript</n-tag>
                        <n-tag :bordered="false" round size="small">ElasticSearch</n-tag>
                    </n-space>
                </template>
            </n-timeline-item>
            <n-timeline-item title="Java 开发工程师 | 亚信科技" content="开发桌面应用和 Web 应用，帮助电信客服处理业务。维护内部平台，处理 API 权限、灰度发布、服务扩容与负载均衡等。其中，Web 应用使用 vita-plus 框架来适配每个省份对同一业务有不同需求的需要。">
                <template #footer>
                    2018.03 - 2020.05
                    <n-space>
                        <n-tag :bordered="false" round size="small">Java</n-tag>
                        <n-tag :bordered="false" round size="small">Maven</n-tag>
                        <n-tag :bordered="false" round size="small">SpringMVC</n-tag>
                        <n-tag :bordered="false" round size="small">Oracle</n-tag>
                        <n-tag :bordered="false" round size="small">Electron</n-tag>
                        <n-tag :bordered="false" round size="small">Aurelia</n-tag>
                        <n-tag :bordered="false" round size="small">SVN</n-tag>
                    </n-space>
                </template>
            </n-timeline-item>
        </n-timeline>
        <n-divider />
        <h2>教育</h2>
        <n-timeline>
            <n-timeline-item title="软件工程-本科 | 电子科技大学" content="学习的主要课程：软件工程、计算机组成原理、计算机网络、嵌入式系统、数据结构预算法、机器视觉算法与应用、综合课程设计（人脸识别）。获得了英语四级证书和人民三等奖学金。">
                <template #footer>
                    2014.09 - 2018.06
                </template>
            </n-timeline-item>
        </n-timeline>
        <!-- body end -->
    </div>
</template>
