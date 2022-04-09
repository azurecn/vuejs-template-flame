'use strict'

import default_portrait from '@/assets/logo.png'

/**
 * @name DEFAULT_PORTRAIT
 * @desc 默认头像
 * @readonly
 */
export const DEFAULT_PORTRAIT = default_portrait

/**
 * @name 验证码相关
 * @desc 重发验证码时间间隔
 * @desc 重发验证码长度
 */
export const VERIFICATION_CODE_RESEND_DELAY_TIME = 60
export const VERIFICATION_CODE_LENGTH = 6

/**
 * @name ROLE_SUPER
 * @type {object}
 * @property { String } label 显示名称
 * @property { String } value 提交参数
 * @property { String } desc 权限描述
 */
export const ROLE_SUPER = {
  label: '超级管理员',
  value: 'super',
  desc: '全部权限'
}

/**
 * @name FORM_COMPONENT_TYPE
 * @type {object}
 */
export const FORM_COMPONENT_TYPE = {
  INPUT: 'Input',
  SELECTOR: 'Select',
  RADIO: 'Radio',
  CHECKBOX: 'Checkbox'
}

/**
 * @name FORM_COMPONENT_TYPE_LIST
 * @type {array}
 */
let TEMP_FORM_COMPONENT_TYPE_LIST = []
Object.keys(FORM_COMPONENT_TYPE).forEach(key => {
  TEMP_FORM_COMPONENT_TYPE_LIST.push(FORM_COMPONENT_TYPE[key])
})
export const FORM_COMPONENT_TYPE_LIST = TEMP_FORM_COMPONENT_TYPE_LIST

/**
 * @name RADIO_COMPONENT_TYPE
 * @type {object}
 */
export const RADIO_COMPONENT_TYPE = {
  RADIO: 'Radio',
  RADIO_BUTTON: 'RadioButton'
}

/**
 * @name CHECKBOX_COMPONENT_TYPE
 * @type {object}
 */
export const CHECKBOX_COMPONENT_TYPE = {
  CHECKBOX: 'Checkbox',
  CHECKBOX_BUTTON: 'CheckboxButton'
}

/**
 * @name QUERY_ITEM_NO_TOGGLE_SHOW_COUNT
 * @type {Number}
 * @desc 查询栏未展开默认显示查询条件个数
 * @readonly
 */
export const QUERY_ITEM_NO_TOGGLE_SHOW_COUNT = 2

