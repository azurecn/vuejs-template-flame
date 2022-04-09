export default {
  // 输入框模板
  inputModel: {
    config: {
      size: null,
      type: 'text',
      maxlength: null, 
      minlength: null, 
      showWordLimit: false, 
      placeholder: null, 
      clearable: false, 
      showPassword: false, 
      disabled: false, 
      prefixIcon: null, 
      suffixIcon: null, 
      rows: 2, 
      autosize: false, 
      autocomplete: 'off', 
      autoComplete: 'off', 
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
    customConfig: {},
  },
  // 开关模板
  switchModel: {
    config: {
      disabled: false,
      width: 40,
      activeIconClass: null,
      inactiveIconClass: null,
      activeText: null,
      inactiveText: null,
      activeValueType: 'boolean',
      inactiveValueType: 'boolean',
      activeValue: true,
      inactiveValue: false,
      activeColor: '#409EFF',
      inactiveColor: '#C0CCDA',
      name: null,
      validateEvent: true,
    },
    customConfig: {}
  },
  // 选择器模板
  selectModel: {
    config: {
      multiple:	false,
      disabled:	false,
      valueKey: 'value',
      size: null,
      clearable: false,
      collapseTags: false,
      multipleLimit: 0,
      name: null,
      autocomplete:	'off',
      autoComplete: 'off',
      placeholder: '请选择',
      filterable:	false,
      allowCreate:	false,
      // filterMethod: null,  // function
      remote: false,
      // remoteMethod: null,  // function
      loading: false,
      loadingText: '加载中',
      noMatchText: '无匹配数据',
      noDataText:	'无数据',
      popperClass: null,
      reserveKeyword: false,
      defaultFirstOption: false,
      popperAppendToBody: true,
      automaticDropdown: false
    },
    customConfig: { 
      options: [
        { value: 0, label: '选项1' },
        { value: 1, label: '选项2' },
      ]
    }
  }
}