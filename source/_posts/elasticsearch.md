---
title: elasticsearch
date: 2020-07-02 20:45:07
subtitle:
categories:
tags: es
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490441846&di=a67b98246df13a6c86c45a530622c4a6&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F58afebdbc2b4f.jpg
---

## 启动 elasticsearch

docker 方式

```shell
docker run --name es -d -p 9200:9200 -e "ES_JAVA_OPTS=-Xms256m -Xmx256m" -e "discovery.type=single-node" elasticsearch:6.5.0
```



## 使用 elasticsearch-head 连接 elasticsearch

### 启动 
1. git 工程
[elasticsearch-head](https://github.com/mobz/elasticsearch-head)
2. 使用docker
```shell script
docker pull mobz/elasticsearch-head:5
docker run -d -p 9100:9100 docker.io/mobz/elasticsearch-head:5
```
### elasticsearch 中修改 config/slasticsearch.yml

```shell script
# allow origin 设置允许跨域
http.cors.enabled: true
http.cors.allow-origin: "*"
```
### 使用
访问 ip:9100
在其中输入 es 地址即可使用

## 使用 
### 查看 index 下数据
```shell script
http://192.168.51.86:9200/jingqing_table_index/_search?pretty
```



## 使用kibana

### 启动

docker方式

```shell
docker run --name kibana -e ELASTICSEARCH_URL=http://172.16.0.9:9200 -p 5601:5601 -d kibana:6.5.0
```

