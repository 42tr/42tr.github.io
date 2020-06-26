---
title: linux
date: 2020-06-21 13:55:08
subtitle:
categories:
tags: [linux, shell]
cover: http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d1a20cf431adcbef127d465caeaf2edda3cc9f1a.jpg
---

### `>` & `>>`
`>` is used to override file, if file not exist, it will auto create. actually it creates a file every time and then replace the origin file.
`>>` is used to append th file.

### `sed`
`sed` is used to handle txt.
```shell script
sed [-hnV] [-e<script>] [-f<script>] [txt]
```
- modify `sed -i 's/jingqing-mt-[a-z]:/jingqing-mt:/g' /data/operations/dockertars/jingqing-mt-st.k8s.yaml`

### if
```shell script
if [command]
then
    script
elif [command]
    script
else
    script
fi
```
#### file/category exist
[]