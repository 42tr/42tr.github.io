---
title: activeMQ
date: 2020-07-04 14:52:09
subtitle:
categories:
tags: [mq, activemq]
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490289396&di=ce206a751d5a63a52241140f4c48406b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F19%2F20150119132124_BMcsB.gif
---

## 安装
默认账号密码 admin/admin
### docker方式
61616是activemq的容器使用端口（映射为6161），8161是web页面管理端口（对外映射为8162）
```shell script
docker run -d --name myactivemq -p 6161:61616 -p 8162:8161 docker.io/webcenter/activemq:latest
```
