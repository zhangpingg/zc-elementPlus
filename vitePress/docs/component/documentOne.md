---
outline: deep
title: 文档1标题
editLink: true
lastUpdated: true
footer: true
---

### 源码 code

```vue
<template>
    <div>{{ name }}</div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("张三");
</script>
```

### 引用组件+自定义样式

<div class='box'>
  内容
</div>

<script setup></script>

<style lang='less' scoped>
  .box{
    color: #f00;
  }
</style>

### 链接跳转

[内部链接](./documentTwo)  
[外部链接](https://vitepress.dev/reference/runtime-api#usedata)

### 文字换行

(输入两个或多个空格，然后按回车键)  
第一行文字  
第二行文字  

(br 标签)<br /> 
第一行文字<br /> 
第二行文字  

(反斜杠 /)\
第一行文字\
第二行文字

