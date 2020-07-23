---
title: linux
date: 2020-06-21 13:55:08
subtitle:
categories:
tags: [linux, shell]
cover: http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/d1a20cf431adcbef127d465caeaf2edda3cc9f1a.jpg
---
### history
history [n] 查看最近 n 个命令
history [-c] 清除所有 history 内容
history [-raw] histfiles
-r 将 histfiles 的内容读到当前 history 中
-a 将目前新增的 history 指令新增到 histfiles 中，若没有加 histfiles，则写入 ~/.bash_history
-w 将目前 history 内容写入 histfiles
> linux 系统当你在 shell(控制台) 中输入并执行命令时，会自动把你的命令记录到历史列表中，一般保存在用户目录下的.bash_history中，默认保存1000条(可修改)

#### 运行特定的历史命令
[!number] [!command] [!!]
number 第 number 个指令
command 指令的开头 command 个字母
! 上一个指令

### `>` & `>>`
`>` is used to override file, if file not exist, it will auto create. actually it creates a file every time and then replace the origin file.
`>>` is used to append th file.

- 清空内容 `>test.sh`

### `sed`
`sed` is used to handle txt.
```shell script
sed [-hnV] [-e<script>] [-f<script>] [txt]
```
- modify `sed -i 's/jingqing-mt-[a-z]:/jingqing-mt:/g' /data/operations/dockertars/jingqing-mt-st.k8s.yaml`
- **sed中使用变量时，需要把`'`改为`"`**

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
#### 判断字符串是否为空
`""` 是必须的
```shell script
#!/bin/sh
STRING=
if [ -z "$STRING" ]; then
    echo "STRING is empty"
fi
if [ -n "$STRING" ]; then
    echo "STRING is not empty"
fi
```
#### file/category exist
[]