<template>
  <div>
    <el-radio-group
        v-model="value"
        :size="$attrs.config.size || size"
        :disabled="$attrs.config.disabled || disabled"
        :text-color="$attrs.config.textColor || textColor"
        :fill="$attrs.fill || fill"
        v-bind="$attrs">
      <template v-if="$attrs.customConfig.radioType === itemType.RADIO">
        <el-radio v-for="item in $attrs.config.options"
                  :key="item.value"
                  :label="item.value.toString()"
                  :disabled="item.disabled"
                  :border="item.border || itemBorder"
                  :size="item.size || itemSize"
                  :name="item.name || itemName"
                  @change="selectChanged(item.value.toString(), $attrs.id)">{{ item.label }}</el-radio>
      </template>
      <template v-if="$attrs.customConfig.radioType === itemType.RADIO_BUTTON">
        {{ itemType.RADIO_BUTTON }}
        <el-radio-button v-for="item in $attrs.config.options"
                         :key="item.value"
                         :label="item.value.toString()"
                         :disabled="item.disabled"
                         :border="item.border || itemBorder"
                         :size="item.size || itemSize"
                         :name="item.name || itemName"
                         @change="selectChanged(item.value.toString(), $attrs.id)">{{ item.label }}</el-radio-button>
      </template>
    </el-radio-group>
  </div>
</template>

<script>

import { RADIO_COMPONENT_TYPE } from '@/utils/constantDefined'

export default {
  name: 'flmFormRadio',
  inheritAttrs: true,
  props: {
    // div标签尺寸：默认为medium，可选small、mini
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    // 禁用组件
    disabled: {
      type: Boolean,
      default: false
    },
    // 按钮形式的 Radio 激活时的文本颜色
    'text-color': {
      type: String,
      default: '#fff',
    },
    // 按钮形式的 Radio 激活时的填充色和边框色
    fill: {
      type: String,
      default: '#409EFF'
    },
    // 选项item全局配置
    itemBorder: {
      type: Boolean,
      default: false
    },
    // radio item大小属性
    itemSize: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['medium', 'small', 'mini'].indexOf(value) !== -1
      }
    },
    // 原生item name属性
    itemName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      itemType: RADIO_COMPONENT_TYPE
    }
  },
  computed: {
    value: {
      get() {
        return this.$attrs.data.value || null
      },
      set(val) {
        this.$attrs.data.value = (val || null)
      }
    },
  },
  created () {
    // console.log(`flmFormRadio created`)
    // console.log(this.$attrs)
  },
  methods: {
    // test() {
    //   // console.log(this.$attrs)
    //   // console.log(this.$listeners)
    // },

    selectChanged(val, formItemId) {
      // console.log(`flmFormCheckbox ${formItemId} change ${val}`)
      this.$emit('change', val, formItemId)
    },
  }
}
</script>

<style>

</style>
