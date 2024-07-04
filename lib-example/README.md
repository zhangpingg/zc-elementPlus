# T-ui-Plus

## [Vue2 基于 Element-ui 基础组件传送门](https://github.com/wocwin/t-ui)

> 基于 Element-ui 二次封装基础组件地址

## [T-ui-Plus 使用 Demo 项目](https://github.com/wocwin/wocwin-admin)

> `wocwin-admin`是基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的一套后台管理模板；此项目全面使用了`T-ui-Plus`二次封装基础组件库

``

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://wocwin.github.io/t-ui-plus/) 预览

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/wocwin/t-ui-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@wocwin/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@wocwin/t-ui-plus.svg" />
    </a>
</p>

## 动态效果图

<img src="./README_GIF/TuiPlus__demo.gif">

## npm 方式安装使用

```shell
npm i @wocwin/t-ui-plus
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// 在main.js中按下引入
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import locale from 'element-plus/es/locale/lang/zh-cn';
// element-plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import TuiPlus from '@wocwin/t-ui-plus';
import '@wocwin/t-ui-plus/lib/style.css';
const app = createApp(App);
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 注册ElementPlus
app.use(ElementPlus, {
  locale, // 语言设置
  // size: Cookies.get('size') || 'medium' // 尺寸设置
});
app.use(TuiPlus);
app.mount('#app');
```

## 按需引入

```js
// 在main.js中按下引入
import '@wocwin/t-ui-plus/lib/style.css';
// 单个.vue文件引入
<script setup lang="ts">
  import {(TDetail, TForm)} from "@wocwin/t-ui-plus"
</script>;
```

## Use CDN in Project(暂不支持)

```html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="//unpkg.com/@wocwin/t-ui-plus/lib/style.css" />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="https://unpkg.com/@wocwin/t-ui-plus@latest"></script>
</head>
```

## t-ui-plus Volar 组件类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@wocwin/t-ui-plus/components.d.ts",
    ],
}

```

## Vue3 + Vite 项目中安装引入报如下错误的解决方法

> #### 把项目的 vite 版本升级到 4+

<img src="./README_GIF/error.png">

## 安装依赖

> ### 注意: 本地环境版本最好安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

pnpm install

```

## 使用[t-ui-plus 组件的后台管理系统地址](https://github.com/wocwin/wocwin-admin)

## 本地运行 vuepress 中组件文档

```shell
// docs项目(文档demo示例)基于vue3+vite项目
npm run docs:dev

```

## Thanks to all the contributors

<a href="https://github.com/wocwin/t-ui-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wocwin/t-ui-plus" alt="contributors" />
</a>

## 微信交流群

> 目前微信群已超过 200 人，需要加微信好友(请备注 T-ui-Plus)，拉大家进群

|                微信二维码                 |
| :---------------------------------------: |
| <img src="./public/wocwin.jpg" width=170> |

## Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;

```
├─ docs
│  ├─ .vitepress
│  │  ├─ config                 #（自定义插件配置）
│  │  │  ├─ global.ts           # 自定义全局变量
│  │  │  └─ plugins.ts          # 自定义md插件（演示组件代码/copy）
│  │  ├─ theme                  #（主题相关配置文件）
│  │  │  ├─ index.ts            # 主题配置（注册element-plus插件、注册自己组件库插件、注册VPDemo组件）
│  │  │  └─ useComponents.js    # 注册演示组件（Demo、DemoBlock），这个是一个插件
│  │  ├─ utils
│  │  │  └─ highlight.ts        # 演示组件的时候，代码高亮
│  │  ├─ vitepress
│  │  │  ├─ components
│  │  │  │  └─ vp-demo          # VPDemo组件
│  │  │  ├─ style               # VPDemo组件样式
│  │  │  └─ index.ts            # 导出VPDemo组件
│  │  └─ config.ts              # vitepress的配置文件（左侧菜单，顶部导航）
│  ├─ components                # .md文件
│  ├─ example                   # 演示的组件源码（VPDemo组件自动解析此文件夹下的所有.vue文件）
│  ├─ public                    # 静态资源文件
│  ├─ index.md                  # 文档home页面
│  ├─ tsconfig                  # typescript 全局配置
│  └─ vite.config               # vite 全局配置文件（支持tsx）
├─ packages
│  ├─ button
│  │  ├─ src
│  │  │  └─ index.vue           # 组件源码
│  │  └─ index.ts               # 调用方法withInstall,生成插件，并导出
│  ├─ ...
│  ├─ index.ts                  # 导出组件，公共方法，每个插件的install方法
│  └─ withInstall.ts            # withInstall方法，用于注册组件
└─ public
```
