
/**
 * @name pageData
 * @desc 页面模拟数据
 * @type { Object }
 * @property { Object } toolbar toolbar数据
 * @property { Object } table table表单数据
 */
export const PAGEDATA = {
  toolbar: {},
  table: {}
}

export const PAGEDATA_TOOLBAR = {}

export const PAGEDATA_TABLE = {
  data: [],
  config: {},
  columns: []
}

export const PAGEDATA_TABLE_DATA = [
  {
    date: '2016-05-03',
    name: '张三',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 111
  }, {
    date: '2016-05-02',
    name: '李四',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 222
  }, {
    date: '2016-05-04',
    name: '王五',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 333
  }, {
    date: '2016-05-01',
    name: '赵六',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 444
  }
]

export const PAGEDATA_TABLE_CONFIG = {

}

export const PAGEDATA_TABLE_COLUMNS = [
  {
    field_name: 'name',
    field_description: 'name',
    isSlot: false,
    config: {
      index: 1,
      width: '120px'
    },
    children: [
      {
        config: {
          field_name: 'a1b1',
          index: 1,
          field_description: 'bb1',
          width: '120px',
        },
        children: [
          {
            config: {
              field_name: 'name',
              index: 1,
              field_description: 'bbb1',
              width: '120px'
            }
          },
          {
            config: {
              field_name: 'date',
              index: 2,
              field_description: 'bbb2',
              width: '120px'
            }
          }
        ]
      },
      {
        config: {
          field_name: 'province',
          index: 2,
          field_description: 'bb2',
          width: '120px'
        }
      }
    ]
  },
  {
    field_name: 'city',
    field_description: 'cc1',
    config: {
      index: 2,
      width: '120px'
    },
    children: [
      {
        config: {
          field_name: 'city',
          index: 1,
          field_description: 'cc1',
          width: '120px'
        }
      },
      {
        isSlot: true,
        config: {
          field_name: 'address',
          index: 2,
          field_description: 'address',
          width: '120px'
        }
      },
      {
        isSlot: true,
        config: {
          prop: 'more',
          field_name: 'more',
          index: 3,
          field_description: 'more1',
          width: '120px',
        }
      }
    ]
  }
]

/**
 * @name flmData
 * @desc 页面formData
 * @type { Object }
 * @property { Object } data 渲染数据
 * @property { Object } config 配置
 * @property { Object } customConfig 自定义配置
 */
export const FLMDATA = {
  data: {},
  config: {},
  customConfig: {}
}

export const FLMDATA_DATA = {}

export const FLMDATA_CONFIG = {
  labelWidth: '80px',
  labelPosition: 'right', // 'left'、'right'、'top'
  inline: false,
  size: 'medium', // medium / small / mini
  disabled: false // 默认false
}

export const FLMDATA_CUSTOMCONFIG = {}

export const FLMDATA_CUSTOMCONFIG_DEFAULTBUTTONS = {
  isSubmitShow: true,
  isResetShow: true,
  isCancelShow: true
}

export const FLMDATA_CUSTOMCONFIG_EXTENDBUTTONS = {
}

export const FLMDATA_CUSTOMCONFIG_QUERYDATALIST = [
  {
    id: '1',
    data: {
      submitLabel: 'name1',
      value: null, // 多选selector、checkbox
    },
    config: {
      type: 'Select',  // 支持'selector'、'radio'、'checkbox'
      options: [
        {
          label: '112',
          value: '00',
        },
        {
          label: '222',
          value: '11'
        },
        {
          label: '333',
          value: '22'
        }
      ],
      placeholder: '9999',
      // selector选项
      multiple: true,
    },
    customConfig: {
      titleName: '选择name1',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px'
    }
  },
  {
    id: '2',
    data: {
      submitLabel: 'name2',
      value: null, // 多选selector、checkbox
    },
    config: {
      type: 'Radio',
      options: [
        {
          label: '张三',
          value: '00',
          size: 'mini'
        },
        {
          label: '李四',
          value: '11',
          disabled: true
        },
        {
          label: '王五',
          value: '22'
        }
      ],
      placeholder: 'name2',
      disabled: false,
      size: 'small',
      textColor: '#eee',
    },
    customConfig: {
      titleName: '选择Label name',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px',
      radioType: 'RadioButton'
    }
  },
  {
    id: '3',
    data: {
      submitLabel: 'name3',
      value: '', // 多选selector、checkbox
    },
    config: {
      type: 'Radio',  // 支持'selector'、'radio'、'checkbox'
      options: [
        {
          label: '112',
          value: '00',
        },
        {
          label: '222',
          value: '11'
        },
        {
          label: '333',
          value: '22'
        }
      ],
      placeholder: 'name3',
    },
    customConfig: {
      titleName: '选择Label name',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px',
      radioType: 'Radio'
    }
  },
  {
    id: '4',
    data: {
      submitLabel: 'name4',
      value: [], // 多选selector、checkbox
    },
    config: {
      type: 'Checkbox',  // 支持'selector'、'radio'、'checkbox'
      options: [
        {
          label: '112',
          value: '00',
        },
        {
          label: '222',
          value: '11'
        },
        {
          label: '333',
          value: '22'
        }
      ],
      // selector选项
    },
    customConfig: {
      titleName: '选择name4',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px',
      checkboxType: 'CheckboxButton'
    }
  },
  {
    id: '5',
    data: {
      submitLabel: 'group',
      value: '', // 多选selector、checkbox
    },
    config: {
      type: 'Radio',  // 支持'selector'、'radio'、'checkbox'
      options: [
        {
          label: '112',
          value: '00',
        },
        {
          label: '222',
          value: '11'
        },
        {
          label: '333',
          value: '22'
        }
      ],
      placeholder: '9999',
      // selector选项
      multiple: true,
    },
    customConfig: {
      titleName: '选择Label name',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px',
      radioType: 'RadioButton'
    }
  },
  {
    id: '6',
    data: {
      submitLabel: 'name6',
      value: null, // 多选selector、checkbox
    },
    config: {
      type: 'Input',  // 支持'selector'、'radio'、'checkbox'
      placeholder: 'name6',
    },
    customConfig: {
      titleName: '选择name1',
      isTitleShow: false,
      titleDirection: 'column',// 'row'、'column'
      titleWidth: '80px'
    }
  },
]


// 新flmFormYJ结构demo数据
export const NEW_FLMDATA = {
  data: {
    name: '',

  }
}
