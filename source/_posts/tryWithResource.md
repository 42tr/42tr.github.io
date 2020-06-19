---
title: tryWithResource
date: 2020-06-18 14:11:26
subtitle: close resources graceful
categories:
tags: [java]
cover: http://img4.imgtn.bdimg.com/it/u=3657906999,2769279656&fm=214&gp=0.jpg
---
## try-with-resource

### background

we should close resource after we use it, but it's repeat and ugly code.

we can use try-with-resource after jdk7.

### traditional way

use finally
```java
public static void main(String[] args) {
    FileInputStream inputStream = null;
    try {
        inputStream = new FileInputStream(new File("test"));
        System.out.println(inputStream.read());
    } catch (IOException e) {
        throw new RuntimeException(e.getMessage(), e);
    } finally {
        if (inputStream != null) {
            try {
                inputStream.close();
            } catch (IOException e) {
                throw new RuntimeException(e.getMessage(), e);
            }
        }
    }
}
```

### try-with-resouce

```java
public static void main(String[] args) {
    try (FileInputStream inputStream = new FileInputStream(new File("test"))) {
        System.out.println(inputStream.read());
    } catch (IOException e) {
        throw new RuntimeException(e.getMessage(), e);
    }
}
```

it works while objects declared in `()` implements `Closable` or `AutoClosable`

### principle

it's not a new function but a **Syntactic sugar** (语法糖). In fact, it's still same as before, we can find it in `class` file.