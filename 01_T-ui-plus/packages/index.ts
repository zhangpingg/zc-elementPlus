import {
  debounce,
  throttle,
  formatNumber
} from './utils'
import type { Component, App } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn' // 因element-plus默认是英文，我们指定一下默认中文
import TLayoutPage from './layout-page'
import TLayoutPageItem from './layout-page-item'
import TQueryCondition from './query-condition'
import TTable from './table'
import TForm from './form'
import TSelect from './select'
import TSelectTable from './select-table'
import TDetail from './detail'
import TButton from './button'
import TStepWizard from './step-wizard'
import TTimerBtn from './timer-btn'
import TModuleForm from './module-form'
import TAdaptivePage from './adaptive-page'
import TDatePicker from './date-picker'
import TRadio from './radio'
import TCheckbox from './checkbox'
import TChart from './chart'
// import TMap from './map'
import TTabs from './tabs'

// 存储组件列表
const components: {
  [propName: string]: Component
} = {
  TLayoutPage,
  TLayoutPageItem,
  TQueryCondition,
  TTable,
  TForm,
  TSelect,
  TSelectTable,
  TDetail,
  TButton,
  TStepWizard,
  TTimerBtn,
  TModuleForm,
  TAdaptivePage,
  TDatePicker,
  TRadio,
  TCheckbox,
  TChart,
  // TMap,
  TTabs
}
// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
// const installComponents: any = (app: App) => {
//   // components.forEach((comp: any) => {
//   //   app.component(comp.name as string, comp)
//   // })
//   //   app.use(ElementPlus, {
//   //     locale // 语言设置
//   //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
//   // })
//   for (const key in components) {
//     app.component(key, components[key])
//   }
// }
// - install：每个插件都有一个 install 方法
const install: any = (app: any): void => {
  for (const key in components) {
    app.component(key, components[key])
  }
}
/**
 * @description 公共方法
 */
export {
  throttle,
  debounce,
  formatNumber
}
/**
 * @description 导出组件
 */
export {
  TLayoutPage,
  TLayoutPageItem,
  TQueryCondition,
  TTable,
  TForm,
  TSelect,
  TSelectTable,
  TDetail,
  TButton,
  TStepWizard,
  TTimerBtn,
  TModuleForm,
  TAdaptivePage,
  TDatePicker,
  TRadio,
  TCheckbox,
  TChart,
  // TMap,
  TTabs
}

const TuiPlus = {
  install
}
export default TuiPlus
