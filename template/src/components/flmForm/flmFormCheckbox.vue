<template>
  <div>
    <el-checkbox-group v-model="value" v-bind="$attrs" >
      <template v-if="$attrs.customConfig.checkboxType === itemType.CHECKBOX">
        <el-checkbox
            v-for="item in $attrs.config.options"
            :key="item.value"
            :label="item.value"
            @change="selectChanged($event, item, $attrs.id)">{{ item.label }}</el-checkbox>
      </template>
      <template v-if="$attrs.customConfig.checkboxType === itemType.CHECKBOX_BUTTON">
        <el-checkbox-button
            v-for="item in $attrs.config.options"
            :key="item.value"
            :label="item.value"
            @change="selectChanged($event, item, $attrs.id)">{{ item.label }}</el-checkbox-button>
      </template>
    </el-checkbox-group>
  </div>
</template>

<script>
import { CHECKBOX_COMPONENT_TYPE } from '@/utils/constantDefined'

export default {
  name: 'flmFormCheckbox',
  inheritAttrs: true,
  props: {

  },
  data() {
    return {
      itemType: CHECKBOX_COMPONENT_TYPE
    }
  },
  computed: {
    value: {
      get() {
        return this.$attrs.data.value || null
      },
      set(val) {
        // this.$attrs.data.value = (val || null)
      }
    },
  },
  methods: {
    test() {
      // console.log(this.$attrs)
      // console.log(this.$listeners)
    },

    selectChanged(e, item, formItemId) {
      // console.log(`flmFormCheckbox ${formItemId} change ${e}`)
      let result =  JSON.parse(JSON.stringify(this.value))
      this.$attrs.config.options && this.$attrs.config.options.forEach(opi => {
        if(e && item.value === opi.value) {
          result.push(item.value)
        }
        if(!e && item.value === opi.value) {
          result && result.forEach((ri,$idx) => {
            ri === item.value && result.splice($idx, 1)
          })
        }
      })

      this.$emit('change', [...new Set(result)], formItemId) // 去重提交
    },
  }
}
</script>

<style>

</style>
