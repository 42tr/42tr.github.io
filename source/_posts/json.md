---
title: json
date: 2020-07-04 14:57:04
subtitle:
categories:
tags: json
cover: https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595490650036&di=f6c6af77d748ef0253b3c594f49cb93b&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2971212636%2C1385876575%26fm%3D214%26gp%3D0.jpg
---

JSON - JavaScript Object Notation
---
## 简介
- 存储和交换文本信息的语法，类似XML，比XML更小、更快、更易解析
- 轻量级文本数据交换格式
- 独立于语言：使用JavaScript语法来描述数据对象，但是独立于语言和平台；
           json解析器和json库支持许多不同的编程语言，目前非常多的动态编程语言(PHP,JSP,.NET)都支持json。
- 具有自我描述性，更易理解。

## json 转换为 js 对象
- json 文本格式在语法上与创建js对象的代码相同，因而无需解析器，js程序能够使用内建的 eval()函数，用 json 数据来生成原生的js对象。
- 必须把文本包围在括号中，这样才能避免语法错误：
实例
> var txt = '{ "sites" : [' +
          '{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
          '{ "name":"google" , "url":"www.google.com" },' +
          '{ "name":"微博" , "url":"www.weibo.com" } ]}';
var obj = eval ("(" + txt + ")");


## json&xml
相同：
- 纯文本
- 具有“自我描述性”（人类可读）
- 具有层级结构（值中存在值）
- 可通过js进行解析
- 数据可使用AJAX进行传输
不同：
- 没有结束标签
- 更短
- 读写速度更快
- 能够使用内建的JavaScript eval()方法进行解析
- 使用数组
- 不适用保留字

## 语法
json语法是js对象表示语法的子集。
- 数据在名称/值对中
- 数据由逗号分开
- 大括号保存对象
- 中括号保存数据

### 1. JSON名称/值对:key/value
- key必须是字符串，value可以是合法的JSON数据类型；
- key和value中使用":"分隔；
- 每个key/value对使用","分隔。
        格式:("name":"xx")
        等价于js：(name = "xx")

### 2. JSON值类型
- 数字
- 字符串(双引号)
- 布尔值
- 对象(大括号)
> {"name":"菜鸟教程","url":"www.runoob.com"}
- 数组(中括号)
> {"sites":[{"name":"菜鸟教程","url":"www.runoob.com"},
> {"name":"google","url":"www.google.com"},
> {"name":"微博","url":"www.weibo.com"}]}
- null
    
### 3. JSON使用案例
可以直接在js中处理json
var sites = [
	{ "name":"runoob" , "url":"www.runoob.com" },
	{ "name":"google" , "url":"www.google.com" },
	{ "name":"微博" , "url":"www.weibo.com" }
];
sites[0].name;


### 4. 访问对象值
```javascript
var myObj, x;
myObj = { "name":"runoob", "alexa":10000, "site":null };
// 使用.
x = myObj.name;
// 使用[]
x = myObj["name"]
```

### 5. 循环对象
1）使用for-in来循环对象的属性
```javascript
var myObj = { "name":"runoob", "alexa":10000, "site":null };
for (x in myObj) {
    document.getElementById("demo").innerHTML += x + "<br>";
}
```

2）在 for-in 循环对象的属性时，使用中括号"[]"来访问属性的值
```javascript
var myObj = { "name":"runoob", "alexa":10000, "site":null };
for (x in myObj) {
	document.getElementById("demo").innerHTML += myObj[x] + "<br>";
}
```

### 6. 嵌套对象
1）json对象中可以包含另外一个json对象
2）使用"."或"[]"来访问嵌套的json对象
```javascript
myObj = {
	"name":"runoob",
	"alexa":10000,
	"sites": {
		"site1":"www.runoob.com",
		"site2":"m.runoob.com",
		"site3":"c.runoob.com"
	}
}
x = myObj.sites.site1;
// 或者
x = myObj.sites["site1"];
```

### 7. 删除对象属性
1）使用delete关键字
2）删除一对key/value
```javascript
delete myObj.sites.site1;
```


### 8. 数组作为json对象
1）json 数组在中括号中书写
2）json 中数组值必须是合法的 json 数据类型
注：js 中，数组值可以是 json 数据类型，也可以是 js 的表达式，包括函数，日期及undefined。
3）使用delete关键字删除数组元素，删除之后位置保留，即数组长度不变
    
### 9. 其他
JSON.parse()
1）json 通常用于与服务端交换数据
2）在接收服务器数据时一般是字符串，可以使用JSON.parse()方法将数据转换为js对象。
3）语法：
JSON.parse(text[,reviver])

参数说明：
text: 必须，一个有效的JSON字符串。
reviver: 可选，一个转换结果的函数，将为对象的每个成员调用此函数。

JSON.stringify()
1）向服务器发送数据时一般是字符串，使用JSON.stringify()方法将js对象转换为字符串
2）语法：
JSON.stringify(value[,replacer[,space]])

参数说明：
        value: 必需，一个有效的JSON字符串。
        replacer: 可选，用于转换结果的函数或数组。如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回 undefined，则排除成员。根对象的键是一个空字符串：""。
        如果 replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
        space: 可选，文本添加缩进、空格和换行符，如果 space 是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 有可以使用非数字，如：\t。
实例:
var obj = { "name":"runoob", "alexa":10000, "site":"www.runoob.com"};
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;

3）JSON 不允许包含函数，JSON.stringify() 会删除 JavaScript 对象的函数，包括 key 和 value。
可以在执行 JSON.stringify() 函数前将函数转换为字符串来避免以上问题的发生：
实例：
var obj = { "name":"Runoob", "alexa":function () {return 10000;}, "site":"www.runoob.com"};
obj.alexa = obj.alexa.toString();
var myJSON = JSON.stringify(obj);
document.getElementById("demo").innerHTML = myJSON;


## JSON文件
1）json 文件的文件类型是 ".json"
2）json 文本的MIME类型是 "application/json"