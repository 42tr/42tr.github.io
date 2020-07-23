---
title: mysql
date: 2020-07-13 14:23:07
subtitle:
categories:
tags: mysql
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490607828&di=d6b966d042b9ff37e91ec318647b4c57&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F07%2F20170607220005_L3inN.jpeg
---

### 查询数据库下所有表数据量
```mysql
select table_name,table_rows from information_schema.tables where TABLE_SCHEMA = '库名' order by table_rows desc;
```
