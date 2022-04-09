# 页面配置数据
* page结构图，请使用typora打开查看

```mermaid
graph LR
%% 头部
subgraph header
query & action
end

%% 主体
subgraph main
table & tableAction
end

%% 底部
subgraph footer
batchAction & pagination
end

%% 浮动层
subgraph float
dialogAdd & dialogEdit & dialogRead
end

%%主结构
page --> dialogAdd & dialogEdit & dialogRead --> flmDialog
page --> query & action
	query --> form
	action -->  buttons
page --> table & tableAction
  table --> flmTable
  tableAction --> actionArray
page --> batchAction & pagination
  batchAction --> actionArray
  pagination --> flmPagination

actionArray[组件名称: buttonGroup selectOptions<br>组件类型: 操作数组<br>组件说明: 包含按钮文字和调用函数的数组<br>数据示例: &#91&#123 text: '新增', operation: 'pageAdd' &#125&#93]
flmTable[组件名称: flmTable <a href='https://element.eleme.cn/2.12/#/zh-CN/component/table'>文档</a><br>组件类型: 表格<br>数据示例: &#123 config, customConfig: &#123 children: &#91&#93 &#125&#125]
buttons[组件名称: el-button <a href='https://element.eleme.cn/2.12/#/zh-CN/component/button'>文档</a><br>组件类型: 按钮<br>数据示例: items: &#91&#123config, customConfig: &#123 text, operation</b> &#125 &#125&#93]
flmPagination[组件名称: flmPagination <a href='https://element.eleme.cn/2.12/#/zh-CN/component/pagination'>文档</a><br>组件类型: 分页器<br>数据示例: &#123 config &#125]
flmDialog[组件名称: flmDialog<br>组件类型: 弹窗 + 表单<br>数据示例: &#123 <b>dialogSetting, formSetting</b> &#125]
dialog[组件名称: el-dialog <a href='https://element.eleme.cn/2.12/#/zh-CN/component/dialog'>文档</a><br>组件类型: 弹窗<br>数据示例: dialogSetting: &#123 config &#125]

form[组件名称: el-form <a href='https://element.eleme.cn/2.12/#/zh-CN/component/form'>文档</a><br>组件类型: 表单<br>数据示例: formSetting: &#123 config, customConfig:&#123 <b>items, buttons</b> &#125 &#125]
formItems[组件名称: el-form-item <a href='https://element.eleme.cn/2.12/#/zh-CN/component/form'>文档</a><br>组件类型: 表单项<br>数据示例: items: &#91&#123config, customConfig: &#123 type, config, customConfig</b> &#125 &#125&#93]


%%组件结构
flmDialog --> dialog & form
form --> formItems & buttons

classDef note text-align: left
class actionArray,flmTable,flmPagination,flmDialog,dialog,form,formItems,buttons note
```

```js
// 页面设置
pageSetting: {
  // 表格
  table: {
    config: {},      // el-table 默认设置
    customConfig: {  // el-table 自定义设置
      children: [    // 列配置
        {
          config: {},       // el-column 默认设置
          customConfig: {   // el-column 自定义设置
            isSlot: false,  // 当前列是否是插槽
            children: [     // 当前列的子列
              {
                config: {},
                customConfig: {
                  isSlot: false,
                  children: [...]  // 可无限嵌套
                }
              }
            ],
          }
        }
      ]
    }
  },
  // 表格操作
  tableAction: [
    {
      buttonText: "编辑",      // 按钮文字
      operation: "tableEdit"  // 调用函数
    }
  ],
  // 新增弹窗
  dialogAdd: {
    dialogSetting: {    // 弹窗
      config: {},       // el-dialog设置
      customConfig: {}  // el-dialog自定义设置（暂无）
    },
    formSetting: {  // 新增表单设置
      config: {},   // el-form默认设置
      customConfig: {
        items: [    // 表单项
          {
            config: {},      // el-form-item 默认配置
            customConfig: {  // el-form-item 自定义配置
              type: 'input',     // 控件类型
              config: {},        // 控件配置
              customConfig: {},  // 控件自定义配置
            },
          }
        ],
        buttons: [  // 表单按钮
          config: {},               // el-button 默认设置
          customConfig: {           // el-button 自定义设置
            buttonText: "新增"       // 按钮文字
            operation: "pageQuery"  // 调用函数
          }
        ]
      }
    }
  },
  // 编辑弹窗
  dialogEdit: {
    dialogSetting: {    // 弹窗
      config: {},       // el-dialog设置
      customConfig: {}  // el-dialog自定义设置（暂无）
    },
    formSetting: {  // 编辑表单设置
      config: {},   // el-form默认设置
      customConfig: {
        items: [    // 表单项
          {
            config: {},      // el-form-item 默认配置
            customConfig: {  // el-form-item 自定义配置
              type: 'input',     // 控件类型
              config: {},        // 控件配置
              customConfig: {},  // 控件自定义配置
            },
          }
        ],
        buttons: [                  // 表单按钮
          config: {},               // el-button 默认设置
          customConfig: {           // el-button 自定义设置
            buttonText: "保存编辑"   // 按钮文字
            operation: "pageQuery"  // 调用函数
          }
        ]
      }
    }
  },
  // 查询
  query: {
    config: {},  // el-form默认设置
    customConfig: {
      items: [    // 表单项
          {
            config: {},      // el-form-item 默认配置
            customConfig: {  // el-form-item 自定义配置
              type: 'input',     // 控件类型
              config: {},        // 控件配置
              customConfig: {},  // 控件自定义配置
            },
          }
        ],
        buttons: [  // 表单按钮
          {
            config: {},               // el-button 默认设置
            customConfig: {           // el-button 自定义设置
              buttonText: "查询"       // 按钮文字
              operation: "pageQuery"  // 调用函数
            }
          }
        ]
    }
  },
  // 操作栏
  action: [
    {
      config: {},              // el-button 默认设置
      customConfig: {          // el-button 自定义设置
        buttonText: "新增"     // 按钮文字
        operation: "pageAdd"  // 调用函数
      }
    }
  ],
  // 批量操作栏
  batchAction: [
    {
      buttonText: "批量删除"          // 选项文字
      operation: "pageBatchDelete"  // 调用函数
    }
  ],
  // 分页
  pagination: {}  // el-pagination默认设置
},
```