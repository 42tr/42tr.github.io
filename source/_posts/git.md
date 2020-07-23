---
title: git
date: 2020-07-06 14:19:15
subtitle:
categories:
tags: git
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490607831&di=a798b3ffb0e7e727d46ce15e95598a9e&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F13%2F20170113162528_jUuTF.png
---
## 操作
### 配置 ssh-key
- 配置Git用户名和邮箱
```shell
git config user.name "用户名"
git config user.email "邮箱"
```
- 生成 ssh-key

`ssh-keygen -t rsa -C "邮箱"`
- 上传key到github
> 进入 github，add ssh key
> 粘贴 id_rsa.pub 内容
- 测试是否配置成功

`ssh -T git@github.com`

配置成功会显示
`Hi username! You’ve successfully authenticated, but GitHub does not provide shell access.`

## 其他
### 错误整理
- RPC failed; curl 56 LibreSSL SSL_read: SSL_ERROR_SYSCALL, errno 54
> 原因不明，配置 ssh-key 解决