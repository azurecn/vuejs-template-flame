<template>
  <!-- flmFormItem组件，根据传入渲染list的单个item渲染不同类型的单个组件 -->
  <div class="item__wrap" :style="{ flexDirection: $attrs.customConfig.titleDirection, alignItems: $attrs.customConfig.titleDirection === 'row' ? `center` : `flex-start` }">
    <div class="item__title" :style="{ width: `${$attrs.customConfig.titleWidth}` }" v-if="$attrs.customConfig.isTitleShow || isTitleShow">{{ $attrs.customConfig.titleName }}</div>
    <div class="item__content">
      <template v-if="($attrs.config.type || type) === itemType.INPUT">
        <flm-form-input
            ref="flmFormSelect"
            v-bind="$attrs"
            v-on="$listeners"></flm-form-input>
      </template>
      <template v-else-if="($attrs.config.type || type) === itemType.SELECTOR">
        <flm-form-select
            ref="flmFormSelect"
            v-bind="$attrs"
            v-on="$listeners"></flm-form-select>
      </template>
      <template v-else-if="($attrs.config.type || type) === itemType.RADIO">
        <flm-form-radio
            ref="flmFormRadio"
            v-bind="$attrs"
            v-on="$listeners"></flm-form-radio>
      </template>
      <template v-else-if="($attrs.config.type || type) === itemType.CHECKBOX">
        <flm-form-checkbox
            ref="flmFormCheckbox"
            v-bind="$attrs"
            v-on="$listeners"></flm-form-checkbox>
      </template>
    </div>
  </div>
</template>

<script>

import FlmFormInput from './flmFormInput'
import FlmFormSelect from './flmFormSelect'
import FlmFormRadio from './flmFormRadio'
import FlmFormCheckbox from './flmFormCheckbox'
import { FORM_COMPONENT_TYPE, FORM_COMPONENT_TYPE_LIST } from '@/utils/constantDefined'

export default {
  name: 'flmFormItem',
  inheritAttrs: true,
  components: {
    FlmFormInput,
    FlmFormSelect,
    FlmFormRadio,
    FlmFormCheckbox
  },
  props: {
    isTitleShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'Select',
      // validator: function(value) {
      //   return FORM_COMPONENT_TYPE_LIST.indexOf(value) !== -1
      // }
    }
  },
  data() {
    return {
      itemType: FORM_COMPONENT_TYPE
    }
  },
  computed: {
    // value: {
    //   get() {
    //     // console.log(this)
    //     return this.$attrs.value || null
    //   },
    //   set(val) {
    //     this.$attrs.value = (val || null)
    //   }
    // },
  },
  created () {
    // console.log(this.$attrs)
  },
  methods: {
    // change(val, formItemId) {
    //   let sendData = {
    //     id: formItemId,
    //     val: val
    //   }
    //   console.log(`flmFormItem change ${sendData}`)
    //   this.$emit('change', sendData)
    // },
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/ui/mixin.scss";
  $item__padding-right: 15px;
  $item__padding-top: 10px;

  .item__wrap {
    padding: $item__padding-top $item__padding-right;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .item__title {
    @include font-style-12();
    @include ellipsis();
    @include cannotSelected();
  }
</style>
