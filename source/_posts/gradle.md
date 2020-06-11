---
title: gradle
date: 2020-06-07 08:44:59
tags: [gradle, jenkins]
cover: http://img4.imgtn.bdimg.com/it/u=2939598968,2994712908&fm=26&gp=0.jpg
---
<!-- toc -->
## Project init
- visit `https://start.spring.io/`
- choose `Gradle Project` in `Project`
- click `GENERATE` to download `zip`

## use `Jenkins`

### build steps
- download plugin `Gradle`
- start a `Freestyle project`
- choose `Invoke Gradle script` in `Build`
- choose `use Gradle Wrapper` to use project setting
- set tasks `clean build`
