---
title: springboot-annotation
date: 2020-06-14 10:37:55
subtitle: introduce common annotations
categories:
tags: [springboot, annotation]
cover: http://gss0.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a2cc7cd98d1001e9e5c2b685b00e7bec55e797ba.jpg
---

### Value
define value in application.yml
```yaml
image.type=png,jpg,gif
```
use it as `String`
```java
@Value("${image.type}")
String imageType;// "png,jpg,gif"
```
use it as `List<String>`
```java
@Value("#{'${image.type}'.split(',')}")
List<String> imageTypes;// "png", "jpg", "gif"
```
**attention:** use set method when binding to a static property, set method should not be `static`
remember to give it to spring by using `@Component` or others
```java
static List<String> imageTypes;
@Value("#{'${image.type}'.split(',')}")
void setImageTypes(List<String> list) {
    imageTypes = list;
}
```

