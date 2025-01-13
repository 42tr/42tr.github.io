<script lang="ts" setup>
import { NIcon, NButton } from 'naive-ui'
import { LogoGithub, Email } from '@vicons/carbon'
import YuQue from '../assets/yuque.svg'
defineProps<{
  openDrawer: Function,
}>()
</script>

<template>
    <div class="card-container">
        <div class="card">
            <div class="top">
                <div class="top-content">
                    <div class="top-content-position">
                        <span class="top-content-text">设计开发一条龙</span>
                    </div>
                </div>
            </div>
            <div class="avatar">
                <div class="avatar-bg">
                    <img class="avatar-img" src="../assets/avatar.jpg">
                </div>
            </div>
            <div style="display: flex; align-items: center; flex-direction: column;">
                <div style="margin-top: 60px; text-align: center; font-weight: 700; color: aliceblue; font-size: 20px; line-height: 1; margin-bottom: 5px;">42tr</div>
                <div style="z-index: 6; margin-left: 120px;">
                    <n-button text tag="a" href="https://github.com/42tr" target="_blank" type="primary">
                        <template #icon>
                            <n-icon>
                                <LogoGithub />
                            </n-icon>
                        </template>
                        Github
                    </n-button>
                </div>
                <div style="z-index: 6; margin-left: 120px;">
                    <n-button text tag="a" href="mailto:1055894396@qq.com" target="_blank" type="primary">
                        <template #icon>
                            <n-icon>
                                <Email />
                            </n-icon>
                        </template>
                        Email
                    </n-button>
                </div>
                <div style="z-index: 6; margin-left: 120px;">
                    <n-button text tag="a" href="https://leetcode.cn/u/U72xhfFR3l/" target="_blank" type="primary">
                        <template #icon>
                            <n-icon>
                                <svg width="273" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-auto max-w-none">
                                    <path d="M68.4876 75.8086C70.7358 73.5637 74.375 73.5696 76.616 75.8217C78.857 78.0738 78.8511 81.7194 76.6029 83.9642L66.6199 93.9326C57.4098 103.129 42.3911 103.263 33.0256 94.2424C32.9715 94.1905 28.8012 90.1015 15.044 76.6115C5.89166 67.6374 4.97987 53.2774 13.5925 44.0559L29.6506 26.8617C38.1985 17.7086 53.9552 16.7082 63.7285 24.6118L78.3131 36.4069C80.783 38.4043 81.1688 42.0294 79.1748 44.5036C77.1808 46.9778 73.5621 47.3642 71.0922 45.3667L56.5077 33.5717C51.3965 29.4383 42.4555 30.006 38.0451 34.7287L21.9867 51.9232C17.7939 56.4124 18.2531 63.6445 23.085 68.3823C33.1872 78.2883 40.9729 85.9224 40.9819 85.931C45.8509 90.6207 53.7239 90.5508 58.5045 85.777L68.4876 75.8086Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.2359 65.8329C41.0616 65.8329 38.4883 63.2551 38.4883 60.0752C38.4883 56.8954 41.0616 54.3176 44.2359 54.3176H86.6247C89.799 54.3176 92.3723 56.8954 92.3723 60.0752C92.3723 63.2551 89.799 65.8329 86.6247 65.8329H44.2359Z" fill="currentColor"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.1745 2.74414C54.3432 0.422038 57.9804 0.300713 60.2984 2.47315C62.6165 4.64558 62.7376 8.28912 60.5689 10.6112L21.9869 51.9233C17.7939 56.4122 18.2531 63.6443 23.0847 68.3823L40.9025 85.8543C43.1709 88.0787 43.2097 91.724 40.9892 93.9964C38.7687 96.2688 35.1297 96.3077 32.8613 94.0833L15.0435 76.6112C5.89165 67.6366 4.97986 53.2768 13.5929 44.0559L52.1745 2.74414Z" fill="currentColor"></path>
                                </svg>
                            </n-icon>
                        </template>
                        Leetcode
                    </n-button>
                </div>
                <div style="z-index: 6; margin-left: 120px;">
                    <n-button text tag="a" href="https://www.yuque.com/kisia/mo9bhd" target="_blank" type="primary">
                        <template #icon>
                            <n-icon>
                                <svg t="1625756107652" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2263" width="200" height="200">
                                    <path d="M228.7 643.9c-0.1 0.1-0.2 0.3-0.3 0.4 3.9-4.4 8-9 12-13.5-7.5 8.4-11.7 13.1-11.7 13.1z" fill="currentColor" p-id="2264"></path>
                                    <path d="M894 298.1l25.6-15.1c10.4-6.1 9.1-21.5-2.1-25.9l-12.3-4.8c-18-7.1-34.2-18.2-46.7-33-15.7-18.5-44.7-45.1-90.9-60.8-52.7-18-142.9-14.4-193.2-10.5-15.9 1.2-25 18.4-17.4 32.5 42.6 78.6 16.7 114.3-5.7 140.7-34.3 40.4-97.4 112.2-160.7 183.6 21.9-24.5 41.8-46.8 58.1-65.1 36.4-40.8 91.3-61.5 145.1-51.7 171.5 31.3 191 253.4-9.2 385.6 26.1-1.4 52.6-3.3 79.2-6 252.6-26 272.6-232.1 218-333.9-19.4-36.1-22.2-60.5-20.1-83.9 2-21.5 13.8-40.8 32.3-51.7z" fill="currentColor" p-id="2265"></path>
                                    <path d="M212.8 704.5C241.1 672.9 316 589 390.7 504.7c-54.6 61.2-121.8 136.7-177.9 199.8z" fill="currentColor" p-id="2266"></path>
                                    <path d="M216.3 758.6c-19.5-2.5-28.2-25.6-15.5-40.6-51.7 58.3-91.7 103.5-99.1 112.6-24.1 29.5 247.7 97.9 482.6-56.8 0.1-0.1 0.3-0.2 0.4-0.3-156.5 8.2-298.5-5.9-368.4-14.9z" fill="currentColor" p-id="2267"></path>
                                    <path d="M593.9 387.9c-53.8-9.8-108.7 10.9-145.1 51.7-16.3 18.2-36.2 40.5-58.1 65.1C316 589 241.1 672.9 212.8 704.5c-4.1 4.6-8.1 9.1-12 13.5-12.7 14.9-4 38 15.5 40.6 69.9 9 211.9 23.1 368.3 15 200.2-132.3 180.8-354.4 9.3-385.7z" fill="currentColor" p-id="2268"></path>
                                </svg>
                            </n-icon>
                        </template>
                        语雀
                    </n-button>
                </div>
                <!-- personality -->
                <div class="personality" style="z-index: 5;">
                    <img src="../assets/intj-a.png" class="personality-img">
                    <!-- <div class="personality-text" style="bottom: 40px">
                        <a @click="openDrawer('/resume/en/')">resume</a> / <a @click="openDrawer('/resume/zh/')">简历</a>
                    </div> -->
                    <div class="personality-text">建筑师 INTJ-A</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    height: 380px;
}
.card {
    font-size: 35px;
    color: aliceblue;
    width: 280px;
    height: 380px;
    box-shadow: 0 8px 16px -4px rgba(0,0,0,0.314);
    background: #1b1c20;
    border: 1px solid #3d3d3f;
    border-radius: 12px;
    position: absolute;
    overflow: hidden;
}
.top {
    min-height: 140px;
    background: linear-gradient(-25deg, #9096ee, rgba(144,150,238,0.867), #9096ee, rgba(144,150,238,0.867));
    background-size: 400%;
    display: block;
    unicode-bidi: isolate;
}
.top-content {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
    align-items: center;
}
.top-content-position {
    margin-top: 20px;
    display: flex;
    height: 28px;
    width: 100%;
}
.top-content-text {
    text-align: center;
    width: fit-content;
    font-size: 14px;
    padding: 2px 8px;
    border-radius: 12px;
    user-select: none;
    margin: auto;
    min-width: 100px;
}

.avatar {
    width: 114px;
    height: 114px;
    right: calc(50% - 57px);
    top: 75px;
    border-radius: 500px;
    position: absolute;
    transition: cubic-bezier(.69,.39,0,1.21) .3s;
    transform-origin: bottom;
    border: 7px solid #1b1c20;
}
.avatar-bg {
    overflow: hidden;
    border-radius: 500px;
    width: 100px;
    height: 100px;
    background: #1b1c20;
}
.avatar-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.personality {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 140px;
    width: 100%;
}
.personality-img {
    width: 140px;
    height: 140px;
}
.personality-text {
    font-size: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 140px;
    text-align: center;
    color: #9096ee;
}
a {
    color: #9096ee;
}
</style>