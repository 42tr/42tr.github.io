---
title: expect
date: 2020-06-20 17:18:51
subtitle:
categories:
tags: [shell, expect]
cover: http://pic1.win4000.com/wallpaper/d/56d8eafea0f21.jpg?down
---
## background
use `expect` to realize the auto interactivity.
## use
### install
yum install -y expect
### code
```shell script
#!/bin/sh
expect -c "
  spawn scp -P [port] root@[host]:[path] [local-path]
  expect {
    \"*password*\" {set timeout 300;send \"password\r\";exp_continue;}
    \"*yes*\" {send \"yes\r\";exp_continue;}
  }
"
```