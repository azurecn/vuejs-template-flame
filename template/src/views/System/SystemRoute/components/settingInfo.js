import { DEFAULT_LABEL_WIDTH } from '@/utils/defaultConst.config.js'

// action配置
export const ACTION_SETTING = {
  showDetail: false,  // 显示详细设置
  config: {  // 一个按钮默认设置
    data: {},
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'size', label: 'size 尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'size'
            }
          }
        },
        {
          config: { prop: 'type', label: 'type 类型' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'type'
            }
          }
        },
        {
          config: { prop: 'plain', label: 'plain 朴素按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'plain'
            }
          }
        },
        {
          config: { prop: 'round', label: 'round 圆角按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'round'
            }
          }
        },
        {
          config: { prop: 'circle', label: 'circle 圆形按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'circle'
            }
          }
        },
        {
          config: { prop: 'loading', label: 'loading 是否加载中' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'loading'
            }
          }
        },
        {
          config: { prop: 'disabled', label: 'disabled 禁用' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'disabled'
            }
          }
        },
        {
          config: { prop: 'icon', label: 'icon 图标' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'icon'
            }
          }
        },
        {
          config: { prop: 'autofocus', label: 'autofocus 默认聚焦' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'autofocus'
            }
          }
        },
        {
          config: { prop: 'nativeType', label: 'native-type 原生type属性' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'nativeType'
            }
          }
        },
      ]
    },
  },
  customConfig: {  // 按钮额外设置
    data: {},
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
      inline: true,
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'buttonText', label: 'buttonText 按钮文字' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'buttonText'
            }
          }
        },
        {
          config: { prop: 'operation', label: 'operation 操作方式' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'operation'
            }
          }
        },
        {
          config: { prop: 'buttons' },
          customConfig: {
            type: 'slot',
            // config: {},
            // customConfig: {
            //   prop: 'operation'
            // }
          }
        },
      ]
    },
  }
}

// 批量action
export const BATCH_ACTION_SETTING = {  // 按钮额外设置
  data: {},
  config: {
    labelWidth: "220px",
    labelPosition: "right",
    size: "medium",
    inline: true,
  },
  customConfig: {
    items: [  // item
      {
        config: { prop: 'buttonText', label: 'buttonText 按钮文字' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'buttonText'
          }
        }
      },
      {
        config: { prop: 'operation', label: 'operation 操作方式' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'operation'
          }
        }
      },
      {
        config: { prop: 'buttons' },
        customConfig: { type: 'slot' }
      },
    ]
  },
}

// 表格
export const TABLE_SETTING = {
  config: {
    data: {
      height: null,
      maxHeight: null,
      stripe: null,
      border: null,
      size: null,
      fit: null,
      showHeader: null,
      highlightCurrentRow: null,
      currentRowKey: null,
      rowClassName: null,
      rowStyle: null,
      cellClassName: null,
      cellStyle: null,
      headerRowClassName: null,
      headerRowStyle: null,
      headerCellClassName: null,
      headerCellStyle: null,
      rowKey: null,
      emptyText: null,
      defaultExpandAll: null,
      expandRowKeys: null,
      defaultSort: null,
      tooltipEffect: null,
      showSummary: null,
      sumText: null,
      summaryMethod: null,
      spanMethod: null,
      selectOnIndeterminate: null,
      indent: null,
      lazy: null,
      load: null,
      treeProps: JSON.stringify({ hasChildren: 'hasChildren', children: 'children' }),
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'height', label: 'height 表格高度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'height' }
          }
        },
        {
          config: { prop: 'maxHeight', label: 'max-height 表格最大高度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'maxHeight' }
          }
        },
        {
          config: { prop: 'stripe', label: 'stripe 是否是斑马纹' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'stripe' }
          }
        },
        {
          config: { prop: 'border', label: 'border 是否有纵向边框' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'border' }
          }
        },
        {
          config: { prop: 'size', label: 'size 尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'size'
            }
          }
        },
        {
          config: { prop: 'fit', label: 'fit 列宽度自动撑开' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'fit' }
          }
        },
        {
          config: { prop: 'showHeader', label: 'showHeader 显示表头' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showHeader' }
          }
        },
        {
          config: { prop: 'highlightCurrentRow', label: 'highlight-current-row 高亮显示当前行' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'highlightCurrentRow' }
          }
        },
        {
          config: { prop: 'currentRowKey', label: 'current-row-key 当前行key' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'currentRowKey' }
          }
        },
        {
          config: { prop: 'rowClassName', label: 'row-class-name 行的className' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rowClassName' }
          }
        },
        {
          config: { prop: 'rowStyle', label: 'row-style 行的style' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rowStyle' }
          }
        },
        {
          config: { prop: 'cellClassName', label: 'cell-class-name 单元格className' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'cellClassName' }
          }
        },
        {
          config: { prop: 'cellStyle', label: 'cell-style 单元格style' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'cellStyle' }
          }
        },
        {
          config: { prop: 'headerRowClassName', label: 'header-row-class-name 表头行className' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'headerRowClassName' }
          }
        },
        {
          config: { prop: 'headerRowStyle', label: 'header-cell-style 表头行className' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'headerRowStyle' }
          }
        },
        {
          config: { prop: 'rowKey', label: 'row-key 行数据key' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rowKey' }
          }
        },
        {
          config: { prop: 'emptyText', label: 'empty-text 空数据文本' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'emptyText' }
          }
        },
        {
          config: { prop: 'defaultExpandAll', label: 'default-expand-all 默认展开所有行' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'defaultExpandAll' }
          }
        },
        {
          config: { prop: 'expandRowKeys', label: 'expand-row-keys 默认展开行' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'expandRowKeys' }
          }
        },
        {
          config: { prop: 'defaultSort', label: 'default-sort 默认排序列' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'defaultSort' }
          }
        },
        {
          config: { prop: 'tooltipEffect', label: 'tooltip-effect tooltip effect 属性' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'tooltipEffect' }
          }
        },
        {
          config: { prop: 'showSummary', label: 'show-summary 表头行className' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showSummary' }
          }
        },
        {
          config: { prop: 'sumText', label: 'sum-text 合计行第一列文本' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'sumText' }
          }
        },
        {
          config: { prop: 'summaryMethod', label: 'summary-method 自定义合计计算方法' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'summaryMethod' }
          }
        },
        {
          config: { prop: 'spanMethod', label: 'span-method	 合并行或列的计算方法' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'spanMethod' }
          }
        },
        {
          config: { prop: 'selectOnIndeterminate', label: 'select-on-indeterminate 表头行className' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'selectOnIndeterminate' }
          }
        },
        {
          config: { prop: 'indent', label: 'indent 树形数据缩进' },
          customConfig: {
            type: 'input',
            config: { type: 'number' },
            customConfig: { prop: 'indent' }
          }
        },
        {
          config: { prop: 'lazy', label: 'lazy 是否懒加载子节点' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'lazy' }
          }
        },
        {
          config: { prop: 'load', label: 'load 加载子节点数据的函数' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'load' }
          }
        },
        {
          config: { prop: 'treeProps', label: 'tree-props 渲染嵌套数据的配置选项' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'treeProps' }
          }
        }
      ]
    },
  },
  customConfig: {
    data: {
      isSlot: false,
      children: []
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'isSlot', label: 'isSlot 类型' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'isSlot' }
          }
        },
        {
          config: { prop: 'children', label: 'children 子列' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'children' }
          }
        },
      ]
    },
  }
}

//
export const TABLE_COLUMN_SETTING = {
  // 基本配置表单
  config: {
    data: {
      type: null,
      index: null,
      columnKey: null,
      label: null,
      prop: null,
      width: null,
      minWidth: null,
      fixed: null,
      renderHeader: null,
      sortable: false,
      sortMethod: null,
      sortBy: null,
      sortOrders: null,
      resizable: true,
      formatter: null,
      showOverflowTooltip: false,
      align: 'left',
      headerAlign: null,
      className: null,
      labelClassName: null,
      selectable: null,
      reserveSelection: false,
      filters: null,
      filterPlacement: null,
      filterMultiple: null,
      filterMethod: null,
      filteredValue: null
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'type', label: 'type 列类型' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'type' }
          }
        },
        {
          config: { prop: 'index', label: 'index 引索' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'index' }
          }
        },
        {
          config: { prop: 'columnKey', label: 'column-key 引索' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'columnKey' }
          }
        },
        {
          config: { prop: 'label', label: 'label 标题' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'label' }
          }
        },
        {
          config: { prop: 'prop', label: 'prop 字段名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'prop' }
          }
        },
        {
          config: { prop: 'width', label: 'width 列宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'width' }
          }
        },
        {
          config: { prop: 'minWidth', label: 'min-width 列最小宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'minWidth' }
          }
        },
        {
          config: { prop: 'fixed', label: 'fixed 固定方向' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'fixed' }
          }
        },
        {
          config: { prop: 'renderHeader', label: 'render-header 列标题渲染函数' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'renderHeader' }
          }
        },
        {
          config: { prop: 'sortable', label: 'sortable 是否可排序' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'sortable' }
          }
        },
        {
          config: { prop: 'sortMethod', label: 'sort-method 排序方法' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'sortMethod' }
          }
        },
        {
          config: { prop: 'sortBy', label: 'sort-by 排序属性' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'sortBy' }
          }
        },
        {
          config: { prop: 'sortOrders', label: 'sort-orders 排序策略' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'sortOrders' }
          }
        },
        {
          config: { prop: 'resizable', label: 'resizable 拖动修改宽度' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'resizable' }
          }
        },
        {
          config: { prop: 'formatter', label: 'formatter 格式化内容' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'formatter' }
          }
        },
        {
          config: { prop: 'showOverflowTooltip', label: 'show-overflow-tooltip 超长隐藏显示tooltip' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showOverflowTooltip' }
          }
        },
        {
          config: { prop: 'align', label: 'align 对齐方式' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'align' }
          }
        },
        {
          config: { prop: 'headerAlign', label: 'header-align 表头对齐方式' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'headerAlign' }
          }
        },
        {
          config: { prop: 'className', label: 'class-name 列类名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'className' }
          }
        },
        {
          config: { prop: 'labelClassName', label: 'label-class-name 列标题类名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelClassName' }
          }
        },
        {
          config: { prop: 'selectable', label: 'selectable 是否可勾选' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'selectable' }
          }
        },
        {
          config: { prop: 'reserveSelection', label: 'reserve-selection 数据更新后保留之前选择' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'reserveSelection' }
          }
        },
        {
          config: { prop: 'filters', label: 'filters 数据过滤' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'filters' }
          }
        },
        {
          config: { prop: 'filterPlacement', label: 'filter-placement 过滤弹出定位' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'filterPlacement' }
          }
        },
        {
          config: { prop: 'filterMultiple', label: 'filter-multiple 过滤条件是否多选' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'filterMultiple' }
          }
        },
        {
          config: { prop: 'filterMethod', label: 'filter-method 过滤方法' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'filterMethod' }
          }
        },
        {
          config: { prop: 'filteredValue', label: 'filtered-value 选择的过滤项' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'filteredValue' }
          }
        },
      ]
    },
  },
  // 自定义配置表单
  customConfig: {
    data: {
      isSlot: false,
      children: []
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'isSlot', label: 'isSlot 类型' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'isSlot' }
          }
        },
        {
          config: { prop: 'children', label: 'children 子列' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'children' }
          }
        },
      ]
    },
  },
}

// 表格列child配置
export const TABLE_COLUMN_CHILDREN_SETTING = {
  config: {
    type: null,
    index: null,
    columnKey: null,
    label: null,
    prop: null,
    width: null,
    minWidth: null,
    fixed: null,
    renderHeader: null,
    sortable: false,
    sortMethod: null,
    sortBy: null,
    sortOrders: null,
    resizable: true,
    formatter: null,
    showOverflowTooltip: false,
    align: 'left',
    headerAlign: null,
    className: null,
    labelClassName: null,
    selectable: null,
    reserveSelection: false,
    filters: null,
    filterPlacement: null,
    filterMultiple: null,
    filterMethod: null,
    filteredValue: null
  },
  customConfig: {
    isSlot: false,
    children: []
  }
}

// 表行为
export const TABLE_ACTION_SETTING = {  // 按钮额外设置
  data: {},
  config: {
    labelWidth: "220px",
    labelPosition: "right",
    size: "medium",
    inline: true,
  },
  customConfig: {
    items: [  // item
      {
        config: { prop: 'buttonText', label: 'buttonText 按钮文字' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'buttonText'
          }
        }
      },
      {
        config: { prop: 'operation', label: 'operation 操作方式' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'operation'
          }
        }
      },
      {
        config: { prop: 'buttons' },
        customConfig: { type: 'slot' }
      },
    ]
  },
}

// 按钮配置
export const BUTTONS_SETTING = {
  showDetail: false,  // 显示详细设置
  config: {  // 一个按钮默认设置
    data: {},
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'size', label: 'size 尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'size'
            }
          }
        },
        {
          config: { prop: 'type', label: 'type 类型' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'type'
            }
          }
        },
        {
          config: { prop: 'plain', label: 'plain 朴素按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'plain'
            }
          }
        },
        {
          config: { prop: 'round', label: 'round 圆角按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'round'
            }
          }
        },
        {
          config: { prop: 'circle', label: 'circle 圆形按钮' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'circle'
            }
          }
        },
        {
          config: { prop: 'loading', label: 'loading 是否加载中' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'loading'
            }
          }
        },
        {
          config: { prop: 'disabled', label: 'disabled 禁用' },
          customConfig: {
            type: 'switch',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'disabled'
            }
          }
        },
        {
          config: { prop: 'icon', label: 'icon 图标' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'icon'
            }
          }
        },
        {
          config: { prop: 'autofocus', label: 'autofocus 默认聚焦' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'autofocus'
            }
          }
        },
        {
          config: { prop: 'nativeType', label: 'native-type 原生type属性' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'nativeType'
            }
          }
        },
      ]
    },
  },
  customConfig: {  // 按钮额外设置
    data: {},
    config: {
      labelWidth: "150px",
      labelPosition: "right",
      size: "medium",
      inline: true,
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'buttonText', label: 'buttonText 按钮文字' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'buttonText'
            }
          }
        },
        {
          config: { prop: 'operation', label: 'operation 操作方式' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'operation'
            }
          }
        },
        {
          config: { prop: 'buttons' },
          customConfig: {
            type: 'slot',
            // config: {},
            // customConfig: {
            //   prop: 'operation'
            // }
          }
        },
      ]
    },
  }
}

// 新增对话框配置
export const DIALOG_ADD_SETTING = {
  // 默认配置
  config: {
    data: {
      title: '',
      width: '50%',
      fullscreen: false,
      top: '15vh',
      modal: true,
      modalAppendToBody: true,
      appendToBody: false,
      lockScroll: true,
      customClass: '',
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showClose: true,
      beforeClose: null,
      center: false,
      destroyOnClose: false
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'title', label: 'title 标题' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'title' }
          }
        },
        {
          config: { prop: 'width', label: 'Dialog 的宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'width' }
          }
        },
        {
          config: { prop: 'fullscreen', label: '是否为全屏 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'fullscreen' }
          }
        },
        {
          config: { prop: 'top', label: 'Dialog CSS 中的 margin-top 值' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'top' }
          }
        },
        {
          config: { prop: 'modal', label: '是否需要遮罩层' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'modal' }
          }
        },
        {
          // 若为 false，则遮罩层会插入至 Dialog 的父元素上
          config: { prop: 'modalAppendToBody', label: '遮罩是否插入body元素上' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'modalAppendToBody'
            }
          }
        },
        {
          // 嵌套的 Dialog 必须指定该属性并赋值为 true
          config: { prop: 'appendToBody', label: 'Dialog是否插入至body元素上' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'appendToBody' }
          }
        },
        {
          config: { prop: 'lockScroll', label: '是否在Dialog出现时将body滚动锁定' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'lockScroll' }
          }
        },
        {
          config: { prop: 'customClass', label: 'Dialog 的自定义类名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'customClass' }
          }
        },
        {
          config: { prop: 'closeOnClickModal', label: '是否可以通过点击 modal 关闭 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'closeOnClickModal' }
          }
        },
        {
          config: { prop: 'closeOnPressEscape', label: '是否可以通过按下 ESC 关闭 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'closeOnPressEscape' }
          }
        },
        {
          config: { prop: 'showClose', label: '是否显示关闭按钮' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showClose' }
          }
        },
        {
          config: { prop: 'beforeClose', label: '关闭前的回调，会暂停 Dialog 的关闭' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'beforeClose' }
          }
        },
        {
          config: { prop: 'center', label: '是否对头部和底部采用居中布局' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'center' }
          }
        },
        {
          config: { prop: 'destroyOnClose', label: '关闭时销毁 Dialog 中的元素' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'destroyOnClose' }
          }
        }
      ]
    },
  },
  // 自定义配置
  customConfig: {
    data: {
      // items: [],   // 表单项
      // buttons: []  // 按钮
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
        labelPosition: "right",
        size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'items', label: 'items 表单项' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'items' }
          }
        },
        {
          config: { prop: 'buttons', label: 'buttons 操作按钮' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'buttons' }
          }
        },
      ]
    },
  }
}

// 新增对话框表单配置
export const DIALOG_ADD_FORM_SETTING = {
  // 默认配置
  config: {
    data: {
      rules: JSON.stringify({}),
      inline: false,
      labelPosition: 'right',
      labelWidth: null,
      labelSuffix: '',
      hideRequiredAsterisk: false,
      showMessage: true,
      inlineMessage: false,
      statusIcon: false,
      validateOnRuleChange: true,
      size: null,
      disabled: false,
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'rules', label: 'rules 校验规则' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rules' }
          }
        },
        {
          config: { prop: 'inline', label: 'inline 行内表单模式' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inline' }
          }
        },
        {
          config: { prop: 'labelPosition', label: 'label-position 标签位置' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelPosition' }
          }
        },
        {
          config: { prop: 'labelWidth', label: 'label-width 标签宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelWidth' }
          }
        },
        {
          config: { prop: 'labelSuffix', label: 'label-suffix 标签后缀' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelSuffix' }
          }
        },
        {
          config: { prop: 'hideRequiredAsterisk', label: 'hide-required-asterisk 隐藏必填星号' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'hideRequiredAsterisk'
            }
          }
        },
        {
          config: { prop: 'showMessage', label: 'show-message 显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showMessage' }
          }
        },
        {
          config: { prop: 'inlineMessage', label: 'inline-message 行内模式显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inlineMessage' }
          }
        },
        {
          config: { prop: 'statusIcon', label: 'status-icon 输入框显示反馈图标' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'statusIcon' }
          }
        },
        {
          config: { prop: 'validateOnRuleChange', label: 'validate-on-rule-change 校验规则变化后立即验证' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'validateOnRuleChange' }
          }
        },
        {
          config: { prop: 'size', label: 'size 组件尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'size' }
          }
        },
        {
          config: { prop: 'disabled', label: 'disabled 禁用' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'disabled' }
          }
        },
      ]
    },
  },
  // 自定义配置
  customConfig: {
    data: {
      items: [],   // 搜索项
      buttons: []  // 按钮
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'items', label: 'items 查询项' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'items' }
          }
        },
        {
          config: { prop: 'buttons', label: 'buttons 操作按钮' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'buttons' }
          }
        },
      ]
    },
  }
}

// 编辑对话框配置
export const DIALOG_EDIT_SETTING = {
  // 默认配置
  config: {
    data: {
      title: '',
      width: '50%',
      fullscreen: false,
      top: '15vh',
      modal: true,
      modalAppendToBody: true,
      appendToBody: false,
      lockScroll: true,
      customClass: '',
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showClose: true,
      beforeClose: null,
      center: false,
      destroyOnClose: false
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'title', label: 'title 标题' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'title' }
          }
        },
        {
          config: { prop: 'width', label: 'Dialog 的宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'width' }
          }
        },
        {
          config: { prop: 'fullscreen', label: '是否为全屏 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'fullscreen' }
          }
        },
        {
          config: { prop: 'top', label: 'Dialog CSS 中的 margin-top 值' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'top' }
          }
        },
        {
          config: { prop: 'modal', label: '是否需要遮罩层' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'modal' }
          }
        },
        {
          // 若为 false，则遮罩层会插入至 Dialog 的父元素上
          config: { prop: 'modalAppendToBody', label: '遮罩是否插入body元素上' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'modalAppendToBody'
            }
          }
        },
        {
          // 嵌套的 Dialog 必须指定该属性并赋值为 true
          config: { prop: 'appendToBody', label: 'Dialog是否插入至body元素上' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'appendToBody' }
          }
        },
        {
          config: { prop: 'lockScroll', label: '是否在Dialog出现时将body滚动锁定' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'lockScroll' }
          }
        },
        {
          config: { prop: 'customClass', label: 'Dialog 的自定义类名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'customClass' }
          }
        },
        {
          config: { prop: 'closeOnClickModal', label: '是否可以通过点击 modal 关闭 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'closeOnClickModal' }
          }
        },
        {
          config: { prop: 'closeOnPressEscape', label: '是否可以通过按下 ESC 关闭 Dialog' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'closeOnPressEscape' }
          }
        },
        {
          config: { prop: 'showClose', label: '是否显示关闭按钮' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showClose' }
          }
        },
        {
          config: { prop: 'beforeClose', label: '关闭前的回调，会暂停 Dialog 的关闭' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'beforeClose' }
          }
        },
        {
          config: { prop: 'center', label: '是否对头部和底部采用居中布局' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'center' }
          }
        },
        {
          config: { prop: 'destroyOnClose', label: '关闭时销毁 Dialog 中的元素' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'destroyOnClose' }
          }
        }
      ]
    },
  },
  // 自定义配置
  customConfig: {
    data: {
      // items: [],   // 表单项
      // buttons: []  // 按钮
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'items', label: 'items 表单项' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'items' }
          }
        },
        {
          config: { prop: 'buttons', label: 'buttons 操作按钮' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'buttons' }
          }
        },
      ]
    },
  }
}

// 编辑对话框表单配置
export const DIALOG_EDIT_FORM_SETTING = {
  // 默认配置
  config: {
    data: {
      rules: JSON.stringify({}),
      inline: false,
      labelPosition: 'right',
      labelWidth: null,
      labelSuffix: '',
      hideRequiredAsterisk: false,
      showMessage: true,
      inlineMessage: false,
      statusIcon: false,
      validateOnRuleChange: true,
      size: null,
      disabled: false,
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'rules', label: 'rules 校验规则' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rules' }
          }
        },
        {
          config: { prop: 'inline', label: 'inline 行内表单模式' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inline' }
          }
        },
        {
          config: { prop: 'labelPosition', label: 'label-position 标签位置' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelPosition' }
          }
        },
        {
          config: { prop: 'labelWidth', label: 'label-width 标签宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelWidth' }
          }
        },
        {
          config: { prop: 'labelSuffix', label: 'label-suffix 标签后缀' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelSuffix' }
          }
        },
        {
          config: { prop: 'hideRequiredAsterisk', label: 'hide-required-asterisk 隐藏必填星号' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'hideRequiredAsterisk'
            }
          }
        },
        {
          config: { prop: 'showMessage', label: 'show-message 显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showMessage' }
          }
        },
        {
          config: { prop: 'inlineMessage', label: 'inline-message 行内模式显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inlineMessage' }
          }
        },
        {
          config: { prop: 'statusIcon', label: 'status-icon 输入框显示反馈图标' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'statusIcon' }
          }
        },
        {
          config: { prop: 'validateOnRuleChange', label: 'validate-on-rule-change 校验规则变化后立即验证' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'validateOnRuleChange' }
          }
        },
        {
          config: { prop: 'size', label: 'size 组件尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'size' }
          }
        },
        {
          config: { prop: 'disabled', label: 'disabled 禁用' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'disabled' }
          }
        },
      ]
    },
  },
  // 自定义配置
  customConfig: {
    data: {
      items: [],   // 搜索项
      buttons: []  // 按钮
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'items', label: 'items 查询项' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'items' }
          }
        },
        {
          config: { prop: 'buttons', label: 'buttons 操作按钮' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'buttons' }
          }
        },
      ]
    },
  }
}

// 对话框items配置
export const DIALOG_ITEMS_SETTING = {
  showDetail: false,  // 显示详细设置
  config: {  // 一个按钮默认设置
    data: {},
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'prop', label: 'prop 字段名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'prop'
            }
          }
        },
        {
          config: { prop: 'label', label: 'label 标签文本' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'label'
            }
          }
        },
        {
          config: { prop: 'labelWidth', label: 'label-width 标签宽度' },
          customConfig: {
            type: 'input',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'labelWidth'
            }
          }
        },
        {
          config: { prop: 'required', label: 'required 是否必填' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'required'
            }
          }
        },
        {
          config: { prop: 'rules', label: 'rules 验证规则' },
          customConfig: {
            type: 'input',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'rules'
            }
          }
        },
        {
          config: { prop: 'error', label: 'error 错误信息' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'error'
            }
          }
        },
        {
          config: { prop: 'showMessage', label: 'show-message 显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'showMessage'
            }
          }
        },
        {
          config: { prop: 'inlineMessage', label: 'inline-message 行内模式显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'inlineMessage'
            }
          }
        },
        {
          config: { prop: 'size', label: 'size 组件尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'size'
            }
          }
        },
      ]
    },
  },
  customConfig: {  // 按钮额外设置
    data: {},
    config: {
      labelWidth: "150px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'type', label: 'type 控件类型' },
          customConfig: {
            type: 'select',
            config: {},
            customConfig: {
              prop: 'type',
              options: [
                { value: 'input', label: '输入框' },
                { value: 'switch', label: '开关' },
                { value: 'select', label: '选择器' },
              ]
            }
          }
        },
        {
          config: { prop: 'config', label: 'config 控件配置' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: {
              prop: 'config',
              config: {},
              customConfig: {},
            }
          }
        },
        // {
        //   config: { prop: 'customConfig', label: 'customConfig 控件自定义配置' },
        //   customConfig: {
        //     type: 'slot',
        //     config: {},
        //     customConfig: { prop: 'customConfig' }
        //   }
        // },
      ]
    },
  }
}

// 查询条件items配置
export const QUERY_ITEMS_SETTING = {
  showDetail: false,  // 显示详细设置
  config: {  // 一个按钮默认设置
    data: {},
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'prop', label: 'prop 字段名' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'prop'
            }
          }
        },
        {
          config: { prop: 'label', label: 'label 标签文本' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'label'
            }
          }
        },
        {
          config: { prop: 'labelWidth', label: 'label-width 标签宽度' },
          customConfig: {
            type: 'input',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'labelWidth'
            }
          }
        },
        {
          config: { prop: 'required', label: 'required 是否必填' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'required'
            }
          }
        },
        {
          config: { prop: 'rules', label: 'rules 验证规则' },
          customConfig: {
            type: 'input',
            config: {
              type: 'number',
            },
            customConfig: {
              prop: 'rules'
            }
          }
        },
        {
          config: { prop: 'error', label: 'error 错误信息' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'error'
            }
          }
        },
        {
          config: { prop: 'showMessage', label: 'show-message 显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'showMessage'
            }
          }
        },
        {
          config: { prop: 'inlineMessage', label: 'inline-message 行内模式显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'inlineMessage'
            }
          }
        },
        {
          config: { prop: 'size', label: 'size 组件尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'size'
            }
          }
        },
      ]
    },
  },
  customConfig: {  // 按钮额外设置
    data: {},
    config: {
      labelWidth: "150px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'type', label: 'type 控件类型' },
          customConfig: {
            type: 'select',
            config: {},
            customConfig: {
              prop: 'type',
              options: [
                { value: 'input', label: '输入框' },
                { value: 'switch', label: '开关' },
                { value: 'select', label: '选择器' },
              ]
            }
          }
        },
        {
          config: { prop: 'config', label: 'config 控件配置' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: {
              prop: 'config',
              config: {},
              customConfig: {},
            }
          }
        },
        // {
        //   config: { prop: 'customConfig', label: 'customConfig 控件自定义配置' },
        //   customConfig: {
        //     type: 'slot',
        //     config: {},
        //     customConfig: { prop: 'customConfig' }
        //   }
        // },
      ]
    },
  }
}

// 查询条件基础配置
export const QUERY_ITEM_SETTING = {
  showDetail: false,  // 显示详细设置
  config: {  // 一个按钮默认设置
    data: {},
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
      ]
    },
  },
  customConfig: {  // 按钮额外设置
    data: {
      label: null,  // 显示标题
      type: null
    },
    config: {
      labelWidth: "220px",
      labelPosition: "right",
      size: "medium",
      inline: true,
    },
    customConfig: {
      items: [  // item
        {
          config: {
            prop: 'label', label: 'label 显示标题'
          },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: {
              prop: 'label'
            }
          }
        },
        {
          data: '',
          config: {
            prop: 'type', label: 'type 组件类型'
          },
          customConfig: {
            type: 'select',
            config: {
              labelWidth: "220px",
              labelPosition: "right",
              size: "medium",
              inline: true,
            },
            customConfig: {
              prop: 'type',
              options: [
                {
                  label: '输入框',
                  value: 'input',
                },
                {
                  label: '开关',
                  value: 'switch'
                },
                {
                  label: '选择器',
                  value: 'select'
                },
                {
                  label: '时间选择',
                  value: 'dateTime'
                }
              ]
            }
          }
        },
        {
          config: { prop: 'buttons' },
          customConfig: {
            type: 'slot',
            // config: {
            //   labelWidth: "220px",
            // },
            // customConfig: {
            //   prop: 'operation'
            // }
          }
        },
      ]
    },
  }
}
// 查询条件高级配置
export const QUERY_ITEM_TYPE_SETTING = {
  // input配置项
  input: [
    {
      config: { prop: 'type', label: 'type 类型' },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'type',
          // option选项
          options: [
            { label: '文字', value: 'text' },
            { label: '文本', value: 'textarea'},
            { label: '密码', value: 'password'},
            { label: '数字', value: 'number'},
            { label: '邮箱', value: 'email'},
            { label: '链接', value: 'url' }
          ]
        }
      }
    },
    {
      config: { prop: 'maxlength', label: 'maxlength 最大输入长度' },
      customConfig: {
        type: 'input',
        config: { type: 'number' },
        customConfig: { prop: 'maxlength' }
      }
    },
    {
      config: { prop: 'minlength', label: 'minlength 最小输入长度' },
      customConfig: {
        type: 'input',
        config: { type: 'number' },
        customConfig: { prop: 'minlength' }
      }
    },
    {
      config: { prop: 'showWordLimit', label: 'showWordLimit 显示字数统计' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'showWordLimit' }
      }
    },
    {
      config: { prop: 'placeholder', label: 'placeholder 显示字数统计' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'placeholder' }
      }
    },
    {
      config: { prop: 'clearable', label: 'clearable 是否可清空' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'clearable' }
      }
    },
    // 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效
    {
      config: { prop: 'showPassword', label: 'showPassword 是否显示切换密码icon' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'showPassword' }
      }
    },
    {
      config: { prop: 'disabled', label: 'disabled 禁用' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'disabled' }
      }
    },
    // 输入框尺寸，只在 type!="textarea" 时有效
    {
      config: { prop: 'size', label: 'size 输入框尺寸' },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'size',
          // option选项
          options: [
            {
              label: '默认',
              value: null,
            },
            {
              label: '中型',
              value: 'medium',
            },
            {
              label: '小型',
              value: 'small'
            },
            {
              label: '迷你',
              value: 'mini'
            }
          ]
        }
      }
    },
    // 输入框头部图标
    {
      config: { prop: 'prefixIcon', label: 'prefixIcon 头部图标' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'prefixIcon' }
      }
    },
    // 输入框尾部图标
    {
      config: { prop: 'suffixIcon', label: 'suffixIcon 尾部图标' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'suffixIcon' }
      }
    },
    // 输入框行数，只对 type="textarea" 有效
    {
      config: { prop: 'rows', label: 'rows 输入框行数' },
      customConfig: {
        type: 'input',
        config: { type: 'number' },
        customConfig: { prop: 'rows' }
      }
    },
    // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
    {
      config: { prop: 'autosize', label: 'autosize 自适应内容高度' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'autosize' }
      }
    },
    {
      config: { prop: 'autocomplete', label: 'autocomplete 自动补全' },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'autocomplete',
          // option选项
          options: [
            { label: 'on', value: 'on' },
            { label: 'off', value: 'off' }
          ]
        }
      }
    },
    {
      config: { prop: 'name', label: 'name 原生属性' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'name' }
      }
    },
    {
      config: { prop: 'readonly', label: 'readonly 是否只读' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'readonly' }
      }
    },
    // <input max="number|date"> 数字值/日期
    {
      config: { prop: 'max', label: 'max 原生属性，最大值' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'max' }
      }
    },
    // <input min="number|date"> 数字值/日期
    {
      config: { prop: 'min', label: 'min 原生属性，最小值' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'min' }
      }
    },
    // 原生属性，设置输入字段的合法数字间隔
    {
      config: { prop: 'step', label: 'step 输入间隔' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'step' }
      }
    },
    // 控制是否能被用户缩放
    {
      config: { prop: 'resize', label: 'resize 用户缩放' },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'resize',
          // option选项
          options: [
            { label: '无', value: 'none' },
            { label: '双向', value: 'both' },
            { label: '水平', value: 'horizontal' },
            { label: '垂直', value: 'vertical' }
          ]
        }
      }
    },
    // 原生属性，自动获取焦点
    {
      config: { prop: 'autofocus', label: 'autofocus 自动获取焦点' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'autofocus' }
      }
    },
    // 原生属性
    {
      config: { prop: 'form', label: 'form 原生属性' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'form' }
      }
    },
    // 输入框关联的label文字
    {
      config: { prop: 'label', label: 'label 关联文字' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'label' }
      }
    },
    // 输入框的tabindex
    {
      config: { prop: 'tabindex', label: 'tabindex' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'tabindex' }
      }
    },
    // 输入时是否触发表单的校验
    {
      config: { prop: 'validateEvent', label: 'validateEvent' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'validateEvent' }
      }
    },
  ],
  // input配置项提交数据
  inputData: {
    type: 'text',
    maxlength: null,
    minlength: null,
    showWordLimit: false,
    placeholder: null,
    clearable: false,
    showPassword: false,
    disabled: false,
    size: null,
    prefixIcon: null,
    suffixIcon: null,
    rows: null,
    autosize: false,
    autocomplete: 'off',
    name: null,
    readonly: false,
    max: null,
    min: null,
    step: null,
    resize: null,
    autofocus: false,
    form: null,
    label: null,
    tabindex: null,
    validateEvent: true,
  },
  // switch配置项
  switch: [
    {
      config: { prop: 'disabled', label: 'disabled 禁用' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'disabled' }
      }
    },
    {
      config: { prop: 'width', label: 'width 宽度' },
      customConfig: {
        type: 'input',
        config: { type: 'number' },
        customConfig: { prop: 'width' }
      }
    },
    // switch 打开时所显示图标的类名，设置此项会忽略 active-text
    {
      config: { prop: 'activeIconClass', label: 'active-icon-class 打开显示图标' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'activeIconClass' }
      }
    },
    // switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text
    {
      config: { prop: 'inactiveIconClass', label: 'inactive-icon-class 关闭显示图标' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'inactiveIconClass' }
      }
    },
    // switch 打开时的文字描述
    {
      config: { prop: 'activeText', label: 'active-text 打开时文字描述' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'activeText' }
      }
    },
    // switch 关闭时的文字描述
    {
      config: { prop: 'inactiveText', label: 'inactive-text 关闭时文字描述' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'inactiveText' }
      }
    },
    // switch 打开时的值，因为此处只能input类型设置此值会引起问题，不建议使用
    {
      config: { prop: 'activeValue', label: 'active-value 打开时的值' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'activeValue' }
      }
    },
    // switch 关闭时的值，因为此处只能input类型设置此值会引起问题，不建议使用
    {
      config: { prop: 'inactiveValue', label: 'inactive-value 关闭时的值' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'inactiveValue' }
      }
    },
    // switch 打开时的背景色
    {
      config: { prop: 'activeColor', label: 'active-color 打开时的背景色' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'activeColor' }
      }
    },
    // switch 关闭时的背景色
    {
      config: { prop: 'inactiveColor', label: 'inactive-color 关闭时的背景色' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'inactiveColor' }
      }
    },
    // name
    {
      config: { prop: 'name', label: 'name' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'name' }
      }
    },
    {
      config: { prop: 'validateEvent', label: 'validate-event 修改时是否触发表单校验' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'validateEvent' }
      }
    },
  ],
  // switch配置项提交数据
  switchData: {
    disabled: false,
    width: 40,
    activeIconClass: null,
    inactiveIconClass: null,
    activeText: null,
    inactiveText: null,
    activeValue: true,     // 类型有布尔值、数字、字符串，控件需要加入JSON解析设置
    inactiveValue: false,  // 同上
    activeColor: '#409EFF',
    inactiveColor: '#C0CCDA',
    name: null,
    validateEvent: true
  },
  // select配置项
  select: [
    {
      config: { prop: 'multiple', label: 'multiple 是否多选' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'multiple' }
      }
    },
    {
      config: { prop: 'disabled', label: 'disabled 是否禁用' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'disabled' }
      }
    },
    {
      config: { prop: 'valueKey', label: 'value-key value键名' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'valueKey' }
      }
    },
    {
      config: { prop: 'size', label: 'size 控件尺寸' },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'size',
          options: [
            { label: '默认', value: null },
            { label: '中型', value: 'medium' },
            { label: '小型', value: 'small' },
            { label: '迷你', value: 'mini' }
          ]
        }
      }
    },
    {
      config: { prop: 'clearable', label: 'clearable 显示清空选中值按钮' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'clearable' }
      }
    },
    {
      config: { prop: 'collapseTags', label: 'collapse-tags 多选tags以文字方式显示' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'collapseTags' }
      }
    },
    {
      config: { prop: 'multipleLimit', label: 'multiple-limit 多选最大选中数' },
      customConfig: {
        type: 'input',
        config: { type: 'number' },
        customConfig: { prop: 'multipleLimit' }
      }
    },
    {
      config: { prop: 'name', label: 'name input的name属性' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'name' }
      }
    },
    {
      config: { prop: 'autocomplete', label: 'autocomplete input的autocomplete 属性' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'autocomplete' }
      }
    },
    {
      config: { prop: 'placeholder', label: 'placeholder 占位符' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'placeholder' }
      }
    },
    {
      config: { prop: 'filterable', label: 'filterable 是否可搜索' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'filterable' }
      }
    },
    {
      config: { prop: 'allowCreate', label: 'allow-create 允许创建新条目' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'allowCreate' }
      }
    },
    {
      config: { prop: 'filterMethod', label: 'filter-method 自定义搜索方法' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'filterMethod' }
      }
    },
    {
      config: { prop: 'remote', label: 'remote 是否远程搜索' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'remote' }
      }
    },
    {
      config: { prop: 'remoteMethod', label: 'remote-method 远程搜索方法' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'remoteMethod' }
      }
    },
    {
      config: { prop: 'loading', label: 'loading 显示加载' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'loading' }
      }
    },
    {
      config: { prop: 'loadingText', label: 'loading-text 加载文字' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'loadingText' }
      }
    },
    {
      config: { prop: 'noMatchText', label: 'no-match-text 搜索无匹配时文字' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'noMatchText' }
      }
    },
    {
      config: { prop: 'noDataText', label: 'no-data-text 选项为空时文字' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'noDataText' }
      }
    },
    {
      config: { prop: 'popperClass', label: 'popper-class 下拉框类名' },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: { prop: 'popperClass' }
      }
    },
    {
      config: { prop: 'reserveKeyword', label: 'reserve-keyword 多选时保留关键词' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'reserveKeyword' }
      }
    },
    {
      config: { prop: 'defaultFirstOption', label: 'default-first-option 是否回车选择第一选项' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'defaultFirstOption' }
      }
    },
    {
      config: { prop: 'popperAppendToBody', label: 'popper-append-to-body 是否将弹窗插入body' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'popperAppendToBody' }
      }
    },
    {
      config: { prop: 'automaticDropdown', label: 'automatic-Dropdown 是否自动弹窗选项' },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: { prop: 'automaticDropdown' }
      }
    },
  ],
  // select配置项提交数据
  selectData: {
    multiple: false,
    disabled: false,
    valueKey: 'value',
    size: null,
    clearable: false,
    collapseTags: false,
    multipleLimit: 0,
    name: null,
    autocomplete: 'off',
    placeholder: '请选择',
    filterable: false,
    allowCreate: false,
    filterMethod: null,
    remote: false,
    remoteMethod: null,
    loading: false,
    loadingText: '加载中',
    noMatchText: '无匹配数据',
    noDataText: '无数据',
    popperClass: null,
    reserveKeyword: false,
    defaultFirstOption: false,
    popperAppendToBody: true,
    automaticDropdown: false
  },
  // dateTime 时间日期配置项
  dateTime: [
    {
      config: {
        prop: 'readonly',
        label: 'readonly 完全只读'
      },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: {
          prop: 'readonly'
        }
      }
    },
    {
      config: {
        prop: 'disabled',
        label: 'disabled 禁用'
      },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: {
          prop: 'disabled'
        }
      }
    },
    {
      config: {
        prop: 'editable',
        label: 'editable 文本框可输入'
      },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: {
          prop: 'editable'
        }
      }
    },
    {
      config: {
        prop: 'clearable',
        label: 'clearable 是否显示清除按钮'
      },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: {
          prop: 'clearable'
        }
      }
    },
    {
      config: {
        prop: 'size',
        label: 'size 输入框尺寸'
      },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'size',
          // option选项
          options: [
            {
              label: '普通',
              value: 'medium',
            },
            {
              label: '小型',
              value: 'small'
            },
            {
              label: '迷你',
              value: 'mini'
            }
          ]
        }
      }
    },
    {
      config: {
        prop: 'placeholder',
        label: 'placeholder 站位内容'
      },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: {
          prop: 'placeholder'
        }
      }
    },
    // 范围选择时开始日期的占位内容
    {
      config: {
        prop: 'startPlaceholder',
        label: 'startPlaceholder 开始日期的占位'
      },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: {
          prop: 'startPlaceholder'
        }
      }
    },
    // 范围选择时结束日期的占位内容
    {
      config: {
        prop: 'endPlaceholder',
        label: 'endPlaceholder 结束日期的占位'
      },
      customConfig: {
        type: 'input',
        config: {},
        customConfig: {
          prop: 'endPlaceholder'
        }
      }
    },
    // 是否使用箭头进行时间选择
    {
      config: {
        prop: 'timeArrowControl',
        label: 'timeArrowControl 是否用箭头选择'
      },
      customConfig: {
        type: 'switch',
        config: {},
        customConfig: {
          prop: 'timeArrowControl'
        }
      }
    },
    // 显示在输入框中的格式
    {
      config: {
        prop: 'type',
        label: 'type 显示类型'
      },
      customConfig: {
        type: 'select',
        config: {},
        customConfig: {
          prop: 'type',
          options: [
            {
              label: 'year',
              value: 'year',
            },
            {
              label: 'month',
              value: 'month'
            },
            {
              label: 'date',
              value: 'date'
            },
            {
              label: 'week',
              value: 'week'
            },
            {
              label: 'datetime',
              value: 'datetime'
            },
            {
              label: 'datetimerange',
              value: 'datetimerange'
            },
            {
              label: 'daterange',
              value: 'daterange'
            }
          ]
        }
      }
    },
    // 是否使用箭头进行时间选择
    {
      config: {
        prop: 'format',
        label: 'format 日期格式'
      },
      customConfig: {
        type: 'input',
        config: {
          placeholder: 'yyyy年 M月 W周 d日 H小时24 h小时12 m分 s秒 timestamp时间戳'
        },
        customConfig: {
          prop: 'format'
        }
      }
    },
    // 对齐方式
    {
      config: {
        prop: 'align',
        label: 'align 日期格式'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'align',
          options: [
            {
              label: 'left',
              value: 'left'
            },
            {
              label: 'middle',
              value: 'middle'
            },
            {
              label: 'right',
              value: 'right'
            }
          ]
        }
      }
    },
    // DatePicker 下拉框的类名
    {
      config: {
        prop: 'popperClass',
        label: 'popperClass 下拉框样式名'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'popperClass'
        }
      }
    },
    // 当前时间日期选择器特有的选项参考下表
    {
      config: {
        prop: 'pickerOptions',
        label: 'pickerOptions 选择器选项'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'pickerOptions'
        }
      }
    },
    // 选择范围时的分隔符
    {
      config: {
        prop: 'rangeSeparator',
        label: 'rangeSeparator 范围分隔符'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'rangeSeparator'
        }
      }
    },
    // 可选，选择器打开时默认显示的时间
    {
      config: {
        prop: 'defaultValue',
        label: 'defaultValue 默认时间'
      },
      customConfig: {
        type: 'input',
        config: {
          placeholder: 'Date格式，new Date()'
        },
        customConfig: {
          prop: 'defaultValue'
        }
      }
    },
    // 范围选择时选中日期所使用的当日内具体时刻，数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00
    {
      config: {
        prop: 'defaultTime',
        label: 'defaultTime 范围时刻'
      },
      customConfig: {
        type: 'input',
        config: {
          placeholder: 'eg: [ 12:00:00, 00:00:00 ]'
        },
        customConfig: {
          prop: 'defaultTime'
        }
      }
    },
    // 可选，绑定值的格式。不指定则绑定值为 Date 对象
    {
      config: {
        prop: 'valueFormat',
        label: 'valueFormat 绑定值的格式'
      },
      customConfig: {
        type: 'input',
        config: {
          placeholder: 'yyyy年 M月 W周 d日 H小时24 h小时12 m分 s秒 timestamp时间戳'
        },
        customConfig: {
          prop: 'valueFormat'
        }
      }
    },
    // 原生属性
    {
      config: {
        prop: 'name',
        label: 'name 原生属性'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'name'
        }
      }
    },
    // 在范围选择器里取消两个日期面板之间的联动
    {
      config: {
        prop: 'unlinkPanels',
        label: 'unlinkPanels 取消联动'
      },
      customConfig: {
        type: 'switch',
        config: {
        },
        customConfig: {
          prop: 'unlinkPanels'
        }
      }
    },
    // 自定义头部图标的类名
    {
      config: {
        prop: 'prefixIcon',
        label: 'prefixIcon 头部图标类名'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'prefixIcon'
        }
      }
    },
    // 自定义清空图标的类名
    {
      config: {
        prop: 'clearIcon',
        label: 'clearIcon 清空图标类名'
      },
      customConfig: {
        type: 'input',
        config: {
        },
        customConfig: {
          prop: 'clearIcon'
        }
      }
    },
    // 输入时是否触发表单的校验
    {
      config: {
        prop: 'validateEvent',
        label: 'validateEvent 是否触发校验'
      },
      customConfig: {
        type: 'switch',
        config: {
        },
        customConfig: {
          prop: 'validateEvent'
        }
      }
    },
  ],
  dateTimeData: {
    readonly: null,
    disabled: null,
    editable: null,
    clearable: null,
    size: null,
    placeholder: null,
    startPlaceholder: null,
    endPlaceholder: null,
    timeArrowControl: null,
    type: null,
    format: null,
    align: null,
    popperClass: null,
    pickerOptions: null,
    rangeSeparator: null,
    defaultValue: null,
    defaultTime: null,
    valueFormat: null,
    name: null,
    unlinkPanels: null,
    prefixIcon: null,
    clearIcon: null,
    validateEvent: null
  }
}

// 查询表单配置
export const QUERY_FORM_SETTING = {
  // 默认配置
  config: {
    data: {
      rules: JSON.stringify({}),
      inline: false,
      labelPosition: 'right',
      labelWidth: null,
      labelSuffix: '',
      hideRequiredAsterisk: false,
      showMessage: true,
      inlineMessage: false,
      statusIcon: false,
      validateOnRuleChange: true,
      size: null,
      disabled: false,
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'rules', label: 'rules 校验规则' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'rules' }
          }
        },
        {
          config: { prop: 'inline', label: 'inline 行内表单模式' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inline' }
          }
        },
        {
          config: { prop: 'labelPosition', label: 'label-position 标签位置' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelPosition' }
          }
        },
        {
          config: { prop: 'labelWidth', label: 'label-width 标签宽度' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelWidth' }
          }
        },
        {
          config: { prop: 'labelSuffix', label: 'label-suffix 标签后缀' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'labelSuffix' }
          }
        },
        {
          config: { prop: 'hideRequiredAsterisk', label: 'hide-required-asterisk 隐藏必填星号' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: {
              prop: 'hideRequiredAsterisk'
            }
          }
        },
        {
          config: { prop: 'showMessage', label: 'show-message 显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'showMessage' }
          }
        },
        {
          config: { prop: 'inlineMessage', label: 'inline-message 行内模式显示校验错误信息' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'inlineMessage' }
          }
        },
        {
          config: { prop: 'statusIcon', label: 'status-icon 输入框显示反馈图标' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'statusIcon' }
          }
        },
        {
          config: { prop: 'validateOnRuleChange', label: 'validate-on-rule-change 校验规则变化后立即验证' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'validateOnRuleChange' }
          }
        },
        {
          config: { prop: 'size', label: 'size 组件尺寸' },
          customConfig: {
            type: 'input',
            config: {},
            customConfig: { prop: 'size' }
          }
        },
        {
          config: { prop: 'disabled', label: 'disabled 禁用' },
          customConfig: {
            type: 'switch',
            config: {},
            customConfig: { prop: 'disabled' }
          }
        },
      ]
    },
  },
  // 自定义配置
  customConfig: {
    data: {
      items: [],   // 搜索项
      buttons: []  // 按钮
    },
    config: {
      labelWidth: DEFAULT_LABEL_WIDTH,
      labelPosition: "right",
      size: "medium",
    },
    customConfig: {
      items: [  // item
        {
          config: { prop: 'items', label: 'items 查询项' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'items' }
          }
        },
        {
          config: { prop: 'buttons', label: 'buttons 操作按钮' },
          customConfig: {
            type: 'slot',
            config: {},
            customConfig: { prop: 'buttons' }
          }
        },
      ]
    },
  }
}

// 分页
export const PAGINATION_SETTING = {
  data: {
    small: false,
    background: false,
    pageSize: 10,
    total: null,
    pageCount: null,
    pagerCount: 7,
    currentPage: 1,
    layout: 'prev, pager, next, jumper, ->, total',
    pageSizes: '10, 20, 30, 40, 50, 100',
    popperClass: null,
    prevText: null,
    nextText: null,
    disabled: false,
    hideOnSinglePage: null,
  },
  config: {
    labelWidth: "220px",
    labelPosition: "right",
    size: "medium",
  },
  customConfig: {
    items: [  // item
      {
        config: { prop: 'small', label: 'small 小型分页样式' },
        customConfig: {
          type: 'switch',
          config: {},
          customConfig: {
            prop: 'small'
          }
        }
      },
      {
        config: { prop: 'background', label: 'background 显示按钮添背景' },
        customConfig: {
          type: 'switch',
          config: {},
          customConfig: {
            prop: 'background'
          }
        }
      },
      {
        config: { prop: 'pageSize', label: 'page-size 每页显示条目个数' },
        customConfig: {
          type: 'input',
          config: {
            type: 'number',
          },
          customConfig: {
            prop: 'pageSize'
          }
        }
      },
      {
        config: { prop: 'total', label: 'total 总条目数' },
        customConfig: {
          type: 'input',
          config: {
            type: 'number',
          },
          customConfig: {
            prop: 'total'
          }
        }
      },
      {
        config: { prop: 'pageCount', label: 'page-count 总页数' },
        customConfig: {
          type: 'input',
          config: {
            type: 'number',
          },
          customConfig: {
            prop: 'pageCount'
          }
        }
      },
      {
        config: { prop: 'pagerCount', label: 'pager-count 按钮显示数量' },
        customConfig: {
          type: 'input',
          config: {
            type: 'number',
          },
          customConfig: {
            prop: 'pagerCount'
          }
        }
      },
      {
        config: { prop: 'currentPage', label: 'current-page 当前页数' },
        customConfig: {
          type: 'input',
          config: {
            type: 'number',
          },
          customConfig: {
            prop: 'currentPage'
          }
        }
      },
      {
        config: { prop: 'layout', label: 'layout 组件布局' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'layout'
          }
        }
      },
      {
        config: { prop: 'pageSizes', label: 'page-sizes 每页条目数选项' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'pageSizes'
          }
        }
      },
      {
        config: { prop: 'popperClass', label: 'popper-class 选择器下拉类名' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'popperClass'
          }
        }
      },
      {
        config: { prop: 'prevText', label: 'prev-text 上一页按钮文字' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'prevText'
          }
        }
      },
      {
        config: { prop: 'nextText', label: 'next-text 下一页按钮文字' },
        customConfig: {
          type: 'input',
          config: {},
          customConfig: {
            prop: 'nextText'
          }
        }
      },
      {
        config: { prop: 'disabled', label: 'disabled 禁用' },
        customConfig: {
          type: 'switch',
          config: {},
          customConfig: {
            prop: 'disabled'
          }
        }
      },
      {
        config: { prop: 'hideOnSinglePage', label: 'hide-on-singlePage 只有一页时隐藏' },
        customConfig: {
          type: 'switch',
          config: {},
          customConfig: {
            prop: 'hideOnSinglePage'
          }
        }
      },
    ]
  },
}
