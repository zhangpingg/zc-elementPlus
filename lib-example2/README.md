## pf-component-library 组件库

### 快速开始

#### 1. 安装组件库

```bash
npm install pf-component-library
```

#### 2. 引用组件库

```js
// 全部引入
import 'pf-component-library/dist/index_style.css'
import PUI from 'pf-component-library'
app.use(PUI)

// 按需引入
import 'pf-component-library/dist/card_style.css'
import 'pf-component-library/dist/demo_style.css'
import { Demo, Card } from 'pf-component-library'
app.use(Card)
app.use(Demo)
```

### 组件文档

[文档](https://ricardopang.github.io/)
