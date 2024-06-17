# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

### 基础用法

:::demo
TTable/base
:::

### 边框表格

:::demo 在`table`对象中添加`border:true`
TTable/border
:::

### 对齐方式

:::demo 在`TTable`组件中添加`align:'center'`设置整个table对齐方式，在`columns`中设置`align`设置每列对齐方式（`columns优先级`高于`整体的对齐方式`）----`align`可选值`left`、`center`、`right`
TTable/align
:::

### 复选框表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'selection', fixed: true }`
TTable/selection
:::


### 复选框表格--翻页选中功能

:::demo 在`table`对象中添加`firstColumn:{ type: 'selection', isPaging: true , fixed: true }`
TTable/pageCheck
:::

### 单选框表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'radio', fixed: true }`,可以再次点击取消选中；添加`@radioChange`事件传当前选中行是数据；默认点击整行选中 可以设置`rowClickRadio：false`,只有点击单选框才选中
TTable/radio
:::

### 单选框--默认选中项及开启点击整行选中

:::demo 在`table`对象中添加`firstColumn:{ type: 'radio', fixed: true }`,可以再次点击取消选中；添加`@radioChange`事件传当前选中行是数据；默认点击整行选中,defaultRadioCol: 表默认选中项
TTable/radioDefault
:::

### 序列号表格

:::demo 在`table`对象中添加`firstColumn:{ type: 'index', fixed: true }`；可以新增`label`属性来定义表头名默认'序号'
TTable/serialNum
:::

### 第一列显示复选框和序列号

:::demo
TTable/selectionIndex
:::

### 第一列显示单选框和序列号

:::demo
TTable/radioIndex
:::

### 双击单元格复制(默认不开启)

:::demo 若需要关闭（在 TTable 标签中设置属性：`isCopy:true`）
TTable/isCopy
:::

### 字典过滤渲染

:::demo `columns`中某项添加`filters: { list: 'statusList', key: 'id', label: 'label' }`；`table`中添加`listTypeInfo: { statusList:[数据源] }`字典类型的数据源
TTable/filters
:::

### 表头合并单元格（多级表头）

:::demo 只需要配置`columns`中某项新增`children：Array[]`属性;表头合并自动加边框
TTable/multileHead
:::

### 表头合并（多级表头）-插槽使用

:::demo 只需要配置`columns`中某项新增`children：Array[]`属性;表头合并自动加边框
TTable/slotNameMerge
:::

### 多级表头--单元格编辑

:::demo
TTable/multileHeadEdit
:::

### 表格操作按钮

:::demo `operator数组`：`operator 数组`是显示按钮数且点击后将当前行数据传出；`operatorConfig` 对象是操作列样式（可以设置宽度/列标题及是否固定在最左/右侧）；按钮的颜色是以 `ElementUI` 内置 `button` 的 `type` 为准；隐藏按钮——`noshow`:多种状态控制按钮的显示与隐藏；例如：`noshow:[{key:'fields',val:'isHasVal'},{key:'status',val:[0,1,99]},{key:'channelCode',val:['bank']}]`；注释： `noshow` 中的 `key` 值(fields/status/channelCode)是表格后台返回的字段； 当 `val` 等于字符串'isHasVal'时,字段'fields'返回为空时，此行操作按钮隐藏； `以上综合：`当'status'为 0/1/99 并且'channelCode'为'bank'及'fields'为空时；`show: { key: 'status', val: [3,4] }`表 status 值为 3 或者 4 时，显示此操作健 根据后台字段返回是数字还是字符串来显示
TTable/operator
:::

### 自定义操作按钮样式

:::demo 设置`operator`数组中的`bind对象`继承`el-button`所有属性
TTable/operatorBtn
:::

### 操作按钮render方式

:::demo 设置`operator`数组中的`render函数``遵循tsx方式`
TTable/operatorRender
:::

### 操作按钮插槽方式

:::demo
TTable/operatorSlotName
:::

### 集成分页器

:::demo
TTable/isShowPagination
:::


### 分页器-设置layout自定义插槽使用

:::demo
TTable/paginationSlot
:::

### 某列 render 渲染

:::demo
TTable/render
:::

### Tree-Table

:::demo 按照`el-table`方式配置；新增`isTree`属性——其作用是布局TTable-Tree样式
TTable/treeTable
:::

### TreTable 复选框

:::demo 按照`el-table`方式配置
TTable/treeMenuTable
:::

### 某列 作用域插槽渲染

:::demo
TTable/slotName
:::

### 自定义表头渲染

:::demo
TTable/renderHeader
:::

### 列--动态显示隐藏且拖动排序

:::demo 属性`columnSetBind`配置更改button样式：继承`el-button`所有属性;`column`配置`isShowHidden`属性更改是否默认隐藏显示（true:默认设置列不显示；反之或者不设置`isShowHidden`属性显示）;`注意：如果isShowHidden设置为true后，即便选中显示，但每次刷新都不会显示`
TTable/columnSetting
:::

### 行--拖拽排序

:::demo 属性`isRowSort`是否开启行拖拽排序;事件`@rowSort`，返回最终排序的table数据;`注意`: `row-key` 需要设置，否则拖动排序可能显示不正常
TTable/rowSort
:::

### 单元格编辑功能

:::demo
TTable/configEdit
:::

### 单元格单独编辑

:::demo
TTable/configEditUse
:::

### 单元格编辑--键盘事件

:::demo `isKeyup` 单元格编辑是否开启键盘事件;向上、向下、回车横向的下一个输入框
TTable/singleEditKeyup
:::

### 单元格编辑--使用组件事件

:::demo `eventHandle`继承第三方组件事件，根据第三方组件事件传参，若第三方组件事件`本身有参数`则返回`三`个参数不然就是后`两`个参数：第一个就是本身自己带的参数，第二个是`porp`，第三个是`scope`(`scope.row`)--就是当前行的数据；`scope.$index`就是当前行数
TTable/eventHandle
:::

### 单元格编辑--校验 rules

:::demo `columns`: `columns`某一项的 rules;`table`: rules; `saveMethod方法`:singleEdit.value.saveMethod((data) => {console.log('callback返回数据', data)})
TTable/rules
:::

### 展开行 

:::demo 在`table`对象中添加`firstColumn:{ type: 'expand', fixed: true }` `expand`作用域插槽，解构传出`{scope}`
TTable/expand
:::

### TTable 参数配置

---

### 1、代码示例

```html
<t-table
  :table="table"
  :columns="table.columns"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
/>
```

### 2、配置参数（Table Attributes）

| 参数                    | 说明                                                                       | 类型             | 默认值    |
| :---------------------- | :------------------------------------------------------------------------- | :--------------- | :-------- |
| table                   | 表格数据对象                                                               | Object           | {}        |
| ---rules                | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）         | Object           | -         |
| ---data                 | 展示数据                                                                   | Array            | []        |
| ---toolbar              | 表格外操作栏选中表格某行，可以将其数据传出                                 | Array            | []        |
| ---operator             | 表格内操作栏数据                                                           | Array            | []        |
| -------hasPermi         | 表格内操作栏按钮权限资源（必须传`btnPermissions`属性才生效）               | String           | -         |
| -------show             | 表格内操作栏根据状态显示                                                   | Object           | -         |
| -------render           | render函数渲染使用的 Function(val) 可以用 tsx 方式                         | Function         | -         |
| -------noshow           | 表格内操作栏根据多种状态不显示                                             | Array            | -         |
| -------bind             | 继承el-button所有Attributes                                                | Object           | -         |
| -------fun              | 事件名                                                                     | function         | -         |
| ---operatorConfig       | 表格内操作栏样式                                                           | Object           | -         |
| --------fixed           | 列是否固定在左侧或者右侧。 true 表示固定在左侧(true / 'left' / 'right')    | string / boolean | -         |
| --------label           | 显示的标题                                                                 | string           | '操作'    |
| --------width           | 对应列的宽度(固定的)                                                       | string / number  | -         |
| --------minWidth        | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)            | string / number  | -         |
| --------align           | 对齐方式 （left / center / right）                                         | string           | 'center'  |
| --------bind            | el-table-column Attributes                                                 | Object           | -         |
| ---firstColumn          | 表格首列(序号 index,复选框 selection,单选 radio,展开行 expand）排列        | object/Array     | -         |
| ---total                | 数据总条数                                                                 | Number           | -         |
| ---pageSize             | 页数量                                                                     | Number           | -         |
| ---currentPage          | 是否需要显示切换页条数                                                     | Number           | -         |
| columns                 | 表头信息                                                                   | Array            | []        |
| ----sort                | 排序 （设置：sort:true）                                                   | Boolean          | false     |
| ----align               | 对齐方式 （left / center / right）                                         | string           | 'center'  |
| ----renderHeader        | 列标题 Label 区域渲染使用的 Function(val) 可以用 jsx 方式                  | Function         | -         |
| ----render              | 某列render函数渲染使用的 Function(val) 可以用 jsx 方式                     | Function         | -         |
| ----bind                | el-table-column Attributes                                                 | Object           | -         |
| ----width               | 对应列的宽度(固定的)                                                       | string / number  | -         |
| ----minWidth            | 对应列的最小宽度(会把剩余宽度按比例分配给设置了 min-width 的列)            | string / number  | -         |
| ----noShowTip           | 是否换行 （设置：noShowTip:false换行，不设置自动隐藏）                     | Boolean          | -         |
| ----slotName            | 插槽显示此列数据（其值是具名作用域插槽                                     | String           | -         |
| ----isShowHidden        | 是否动态显示隐藏列设置（隐藏/显示列）                                      | Boolean          | false     |
| ----slotNameMerge       | 合并表头插槽显示此列数据（其值是具名作用域插槽）                           | String           | -         |
| ----------scope         | 具名插槽获取此行数据必须用解构接收{scope}.row 是当前行数据 }               | Object           | -         |
| ----canEdit             | 是否开启单元格编辑功能                                                     | Boolean          | false     |
| ----configEdit          | 表格编辑配置（开启编辑功能有效）                                           | Object           | -         |
| ----------rules         | 规则（可依据 elementPlus el-form 配置————对应 columns 的 prop 值）         | Object           | -         |
| ----------label         | placeholder 显示                                                           | String           | -         |
| ----------editComponent | 组件名称可直接指定全局注册的组件，也可引入'element'如：'el-input'          | String           | -         |
| ----------eventHandle   | 第三方 UI 的 事件（返回三个参数，第一个自己自带，第二个prop，第三个scope） | Object           | -         |
| ----------bind          | 第三方 UI 的 Attributes，如 el-input 中的 clearable 清空功能               | Object           | -         |
| ----------event         | 触发 handleEvent 事件的标志                                                | String           | -         |
| ----------type          | 下拉或者复选框显示（select-arr/select-obj/checkbox）                       | String           | -         |
| ----------list          | 下拉选择数据源名称                                                         | String           | -         |
| ----------arrLabel      | type:select-arr 时对应显示的中文字段                                       | String           | -         |
| ----------arrKey        | type:select-arr 时对应显示的数字字段                                       | String           | -         |
| ----filters             | 字典过滤                                                                   | Object           | -         |
| ----------list          | listTypeInfo 里面对应的下拉数据源命名                                      | String           | -         |
| ----------key           | 数据源的 key 字段                                                          | String           | 'value'   |
| ----------label         | 数据源的 label 字段                                                        | String           | 'label'   |
| btnPermissions          | 按钮权限数据集（后台返回的按钮权限集合）                                   | Array            | -         |
| listTypeInfo            | 下拉选择数据源                                                             | Object           | -         |
| footer                  | 底部操作区（默认隐藏，使用插槽展示“保存”按钮）                             | slot             | -         |
| pagination              | 分页器自定义内容 设置文案(table设置layout才生效)                           | slot             | -         |
| isKeyup                 | 单元格编辑是否开启键盘事件                                                 | Boolean          | false     |
| isShowFooterBtn         | 是否显示保存按钮                                                           | Boolean          | false     |
| title                   | 表格左上标题                                                               | String /slot     | -         |
| tableTitle              | 表格左上标题（为解决顶层容器会出现原生的title属性）同时存在优先展示插槽    | String /slot     | -         |
| isShowPagination        | 是否显示分页(默认显示分页)                                                 | Boolean          | true      |
| isPaginationCumulative  | 序列号显示是否分页累加                                                     | Boolean          | false     |
| isTableColumnHidden     | 是否开启合计行隐藏复选框/单选框                                            | Boolean          | false     |
| isCopy                  | 是否允许双击单元格复制                                                     | Boolean          | false     |
| defaultRadioCol         | 设置默认选中项（单选）defaultRadioCol 值必须大于 0！                       | Number           | -         |
| rowClickRadio           | 是否开启点击整行选中单选框                                                 | Boolean          | true      |
| columnSetting           | 是否显示设置（隐藏/显示列）                                                | Boolean          | false     |
| name                    | 与 columnSetting 配合使用标记隐藏/显示列唯一性                             | String           | title     |
| isRowSort               | 是否开启行拖拽(`row-key` 需要设置)                                         | Boolean          | false     |
| isTree                  | 是否开启Tree-table样式                                                     | Boolean          | false     |
| columnSetBind           | 列设置按钮配置（继承`el-button`所有属性）                                  | Object           | -         |
| ----btnTxt              | 按钮显示文字                                                               | String           | '列设置'  |
| ----title               | 点击按钮下拉显示title                                                      | String           | '列设置'  |
| ----size                | el-button的size                                                            | String           | 'default' |
| ----icon                | el-button的icon                                                            | String           | 'Setting' |
| align                   | table对齐方式 可选值`left`、`center`、`right`                              | String           | 'center'  |
| isSlotToolbar           | TAdaptivePage组件是否使用了Toolbar插槽                                     | Boolean          | false     |
| isSlotTitle             | TAdaptivePage组件是否使用了title插槽                                       | Boolean          | -         |

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

| 事件名        | 说明                         | 返回值                                        |
| :------------ | :--------------------------- | :-------------------------------------------- |
| page-change   | 当前页码                     | 当前选中的页码                                |
| save          | 保存按钮                     | 编辑后的所有数据                              |
| handleEvent   | 单个输入触发事件             | configEdit 中的 event 值和对应输入的 value 值 |
| radioChange   | 单选选中事件                 | 返回当前选中的整行数据                        |
| rowSort       | 行拖拽排序后触发事件         | 返回排序后的table数据                         |
| validateError | 单元格编辑保存校验不通过触发 | 返回校验不通过的 prop--label 集合             |

### 4、Methods 方法 继承el-table所有方法(Expose)

| 事件名             | 说明                                                          | 返回值              |
| :----------------- | :------------------------------------------------------------ | :------------------ |
| saveMethod         | 单元格编辑保存方法                                            | callback(tableData) |
| resetFields        | 对表单进行重置，并移除校验结果（单元格编辑时生效）            | —                   |
| clearValidate      | 清空校验规则（单元格编辑时生效）                              | -                   |
| defaultRadioSelect | 单选默认选中--且只能默认选中第一页的数据--传入值必须大于等于1 | -                   |

### 5、Slots插槽

| 插槽名     | 说明                                              | 参数  |
| :--------- | :------------------------------------------------ | :---- |
| title      | TTable 左侧Title                                  | -     |
| titleTip   | TTable 头部tip                                    | -     |
| toolbar    | TTable 右侧toolbar                                | -     |
| expand     | table.firstColumn.type：`expand` 展开行插槽       | scope |
| -          | el-table-column某列自定义插槽（slotName命名）     | scope |
| -          | el-table-column单元格编辑插槽（editSlotName命名） | scope |
| -          | el-table-column表头合并插槽（slotNameMerge命名）  | scope |
| -          | 操作列前一列自定义默认内容插槽                    | -     |
| footer     | 底部操作区（默认隐藏，使用插槽展示“保存”按钮）    | -     |
| pagination | 分页器自定义内容 设置文案(table设置layout才生效)  | -     |
