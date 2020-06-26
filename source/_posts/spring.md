---
title: spring
date: 2020-06-19 09:16:16
subtitle:
categories:
tags: spring
cover: http://a.hiphotos.baidu.com/zhidao/pic/item/50da81cb39dbb6fdfaede00c0a24ab18972b3761.jpg
---

## common interface
### InitializingBean
provide init method for a bean, implements `afterPropertiesSet` method.
we can also set `init-method` in `setting.properties`, it's using reflect to realize.
implements `InitializingBean` is more efficient while using setting file removes the dependence of spring.