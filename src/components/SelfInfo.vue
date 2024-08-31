<script lang="ts" setup>
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
                <!-- <div style="width: 100%; padding: 10px 20px; margin: 0; display: flex; flex-direction: row; flex-wrap: nowrap; cursor: pointer; text-align: center; align-items: center; justify-content: center;">
                    <a style="margin: 0; margin-left: 8px; color: #f7f7fa; background-color: transparent; font-size: 1.4em; cursor: pointer; display: flex;">
                        <i style="background: 0 0; color: #f7f7fa; transition: all .3s ease 0s; padding: 8px; border-radius: 32px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;font-size: 22px; line-height: 1; font-style: normal; -webkit-font-smoothing: antialiased;">
                            <img src="../assets/github.svg" style="width: 100%; height: 100%;">
                        </i>
                    </a>
                    <a style="margin: 0; margin-left: 8px; color: #f7f7fa; background-color: transparent; font-size: 1.4em; cursor: pointer; display: flex;">
                        <i style="background: 0 0; color: #f7f7fa; transition: all .3s ease 0s; padding: 8px; border-radius: 32px; cursor: pointer; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;font-size: 22px; line-height: 1; font-style: normal; -webkit-font-smoothing: antialiased;">
                            <img src="../assets/yuque.svg" style="width: 100%; height: 100%;">
                        </i>
                    </a>
                </div> -->
                <!-- personality -->
                <div class="personality">
                    <img src="../assets/intj-a.png" class="personality-img">
                    <div class="personality-text" style="bottom: 40px">
                        <a @click="openDrawer('/resume/en/')">resume</a> / <a @click="openDrawer('/resume/zh/')">简历</a>
                    </div>
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