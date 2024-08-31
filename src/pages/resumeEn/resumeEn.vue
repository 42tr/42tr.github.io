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
                Liu Yang&nbsp;
                <n-icon><GenderMale /></n-icon>&nbsp;28
                </div>
            </template>
            <template #description>
                Software Engineer
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
                Nanjing, China
            </n-button>
        </n-thing>
        <!-- header end -->
        <n-divider />
        <!-- body start -->
        <h2>Experience</h2>
        <n-timeline>
            <n-timeline-item type="success" title="AI Software Developer | Huawei" content="Use RAG to help my team improve the efficiency of problem localization. Search knowledge from elasticseach, mysql and other systems, rerank and summarize.">
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
            <n-timeline-item title="Embedded Software Engineer | Huawei" content="Develop requirements of new versions, identify issues with old versions and develop patches to fix them. As CIE, I maintained the pipeline to build new packages and the website to build patches. In addition, I wrote many programs to help improve development efficiency.">
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
            <n-timeline-item title="Java Developer | RichAI" content="Write modules to process and analyse big data. Design, develop and maintain various applications to show the analyzed data.">
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
            <n-timeline-item title="Java Developer | AsiaInfo" content="Develop desktop and web applications for telecommunications to assist customer service in handling business. The web application uses vita-plus to adapt to the varying requirements of different provinces.">
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
        <h2>Education</h2>
        <n-timeline>
            <n-timeline-item title="Bachelor of Software Engineering | UESTC" content="I have studied courses such as software engineering, computer composition principles, computer networks, embedded systems, data structures and algorithms, machine vision algorithms and applications, and comprehensive course design (facial recognition project). All subjects are passed in one go. And obtained CET4 and the People's Third Class Scholarship.">
                <template #footer>
                    2014.09 - 2018.06
                </template>
            </n-timeline-item>
        </n-timeline>
        <!-- body end -->
    </div>
</template>
