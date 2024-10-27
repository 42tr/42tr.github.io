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
                +86-18936861530
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
            <n-timeline-item type="success" title="AI 软件开发工程师 | 华为" content="使用 RAG 帮助团队提高问题定位效率，从 es、mysql 以及其他系统中进行搜索后针对问题进行重排序并总结。其中多路召回重排序方法在公司内部申请专利成功，问题搜索准确率由50%提升至90%，获“数据通信研发部长奖-维护效率及能力提升奖”。">
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
            <n-timeline-item title="软件开发工程师 | 华为" content="主要负责系统支撑工作，开发新版本需求，维护网上版本，出补丁解决发布版本bug，责任田主要为控制器上线、设备登录、补丁机制。作为 CIE，负责维护版本构建与补丁构建网站，提高版本构建效率 20% 以上，开发人员单次补丁构建时间由 5min 减少到 1min，大幅提升工作效率，自动化补丁归档，规范化补丁构建流程，提高补丁发布效率 30% 以上。作为 redis 的 PMC，负责 redis 归一与升级工作，获“redis 定制归一攻关激励团队奖”。工作之余，开发了多个应用提高团队开发与问题定位效率。">
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
            <n-timeline-item title="Java 开发工程师 | 睿企科技" content="使用公司算法部门提供的 NLP 等能力，编写大数据标准化处理模块，维护标准化处理流程，质态监管、热词雷达、自动报告等各个应用的后端设计与实现，对接其他公司，偶尔帮忙改改前端 bug & 写一些简单的管理页面。">
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
                        <n-tag :bordered="false" round size="small">Mqtt</n-tag>
                        <n-tag :bordered="false" round size="small">SVN</n-tag>
                        <n-tag :bordered="false" round size="small">Kafka</n-tag>
                    </n-space>
                </template>
            </n-timeline-item>
        </n-timeline>
        <n-divider />
        <h2>教育</h2>
        <n-timeline>
            <n-timeline-item title="软件工程-本科 | 电子科技大学" content="学习的主要课程：软件工程、计算机组成原理、计算机网络、嵌入式系统、数据结构与算法、机器视觉算法与应用、综合课程设计（人脸识别）。获得了英语四级证书和人民三等奖学金。">
                <template #footer>
                    2014.09 - 2018.06
                </template>
            </n-timeline-item>
        </n-timeline>
        <!-- body end -->
    </div>
</template>
