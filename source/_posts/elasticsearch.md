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

## 使用  —— Rest风格API
| method | url                          | describe               |
| ------ | ---------------------------- | ---------------------- |
| PUT    | host:port/index/type/id      | 创建文档（指定文档id） |
| POST   | host:port/index/type         | 创建文档               |
| POST   | host:port/index/id/_update   | 更新文档               |
| DELETE | host:port/index/type/id      | 删除文档               |
| GET    | host:port/index/type/id      | 查询文档               |
| POST   | host:port/index/type/_search | 查询所有文档           |

### 创建索引

```
PUT /test
{
	"mappings": {
		"properties": {
			"name": {
				"type": "text"
			},
			"age": {
				"type": "long"
			},
			"birthday": {
				"type": "text"
			}
		}
	}
}
```

### 添加文档

```
PUT /test/type1/1
{
	"name": "kisia",
	"age": 1,
	"birthday": "19960201"
}
```

### 更新文档

1. 方法一：同添加数据——会覆盖所有之前的数据

2. 方法二：只会更新对应字段

   ```
   POST /test/type1/1/_update
   {
   	"doc": {
   		"name": "kivi"
   	}
   }
   ```

   按条件更新

   ```shell script
   http://192.168.51.176:9200/jingqing_table_index/_update_by_query
   {
       "script": {
           "source": "ctx._source['column_xx']=null"
       },
       "query": {
           "match_phrase": {
               "column_xx": "content_xx"
           }
       }
   }
   ```

### 查询文档

```shell script
http://192.168.51.86:9200/jingqing_table_index/_search?pretty
```
```
GET test/type1/_search?q=name:ki
```



#### 查询为 null 的数据

```shell script
POST index/type/_search 
{
  "query": {
    "bool": {
      "must_not": {
        "exists": {
          "field": "字段名"
        }
      }
    }
  }
}
```
#### 精准查询

```shell script
http://192.168.51.176:9200/jingqing_table_index/_search
{
    "query": {
        "match_phrase": {
            "column_xx": "content_xx"
        }
    },
    "from": 0,
    "size": 20
}
```
#### 返回指定字段

```
GET test/_search
{
	"query": {
		"match": {
			"name": "kisia"
		}
	},
	"_source": ["name"]
}
```

#### 排序

```
GET test/_search
{
	"query": {
		"match": {
			"name": "kisia"
		}
	},
	"sort": [{
		"age": {
			"order": "desc"
		}
	}]
}
```

#### 分页

```
GET test/_search
{
	"query": {
		"match": {
			"name": "kisia"
		}
	},
	"from": 0,
	"size": 1
}
```



### 其他

#### 属性说明

| 属性      | 说明                  |
| --------- | --------------------- |
| _score    | 匹配度                |
| max_score | 最大分值              |
| version   | 更新次数              |
| relation  | 匹配关系，eq - equals |



## 使用kibana

### 启动

docker方式

```shell
docker run --name kibana -e ELASTICSEARCH_URL=http://172.16.0.9:9200 -p 5601:5601 -d kibana:6.5.0
```

## 常见问题
### Elasticsearch exception [type=search_phase_execution_exception, reason=all shards failed]
curl "http://192.168.51.176:9200/jingqing_table_index/_search?size=10&from=10000"

**报错信息**

> {"error":{"root_cause":[{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [10010]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}],"type":"search_phase_execution_exception","reason":"all shards failed","phase":"query","grouped":true,"failed_shards":[{"shard":0,"index":"jingqing_table_index","node":"z6eictcOSyOmyHNJw9pEmA","reason":{"type":"query_phase_execution_exception","reason":"Result window is too large, from + size must be less than or equal to: [10000] but was [10010]. See the scroll api for a more efficient way to request large data sets. This limit can be set by changing the [index.max_result_window] index level setting."}}]},"status":500}

**解决方法**

```shell script
curl -XPUT "http://192.168.51.176:9200/jingqing_table_index/_settings" -H 'Content-Type: application/json' -d'
{ 
  "max_result_window" : 100000000
}'
```

### Fielddata is disabled on text fields by default. Set fielddata=true on [xzqhdm] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead.
PUT http://192.168.51.176:9200/jingqing_table_index_hottool/_mapping/doc
{
  "properties":{
    "keyword":{
      "type":"text",
      "fielddata":true
    }
  }
}

# String -> List
http://192.168.51.176:9200/jingqing_table_index_hottool/_update_by_query?conflicts=proceed
{
  "script": {
    "source": "if(ctx._source['keyword'] instanceof String){String s=ctx._source['keyword'];ArrayList array=new ArrayList();if(!s.isEmpty()){String splitter = ',';StringTokenizer tokenValue = new StringTokenizer(s, splitter);while (tokenValue.hasMoreTokens()) {array.add(tokenValue.nextToken());}}ctx._source.keyword=array;}"
  }
}

### Linux 下启动
- 跨域时需要需改`network.host: 0.0.0.0`，然后依次解决错误
- `Xms`和`Xmx`需配置相同
- 后台启动`es`：`./elasticsearch -d`
- 后台启动`kibana`：`nohup ./kibana &`
- 启动时需要使用非root用户
```shell script
groupadd elsearch
useradd elsearch -g elsearch
passwd elsearch# 接下来会输入两次密码
# new password
# retype passwd

cd path
chown -R elsearch:elsearch es/elasticsearch-7.6.1/

su elsearch
```
- `kibana`外网访问
```shell script
vim /etc/kibana/kibana.yml 
server.host: "0.0.0.0"
```

