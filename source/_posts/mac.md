---
title: mac 使用
date: 2020-07-19 13:25:30
subtitle:
categories:
tags: mac
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490682855&di=2c6844f627de6919596b39b803d78723&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa50f4bfbfbedab6405a19611f736afc378311e0b.jpg
---
### mac使用谷歌浏览器跨域访问
创建目录(随便创建，创建后指定该目录即可)
`/Users/LeoLee/Documents/MyChromeDevUserData`
输入命令打开浏览器
```shell script
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/LeoLee/Documents/MyChromeDevUserData
```

### 查看ip地址
```shell script
ifconfig | grep "inet"
```

### 安装 brew
1. 修改hosts
访问 `https://githubusercontent.com.ipaddress.com/raw.githubusercontent.com`
获取 `raw.githubusercontent.com` 的ip并添加至hosts文件
```shell script
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
