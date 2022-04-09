<template>
  <el-date-picker
    :value="data"
    :readonly="config.readonly"
    :disabled="config.disabled"
    :editable="config.editable"
    :clearable="config.clearable"
    :size="config.size"
    :placeholder="config.placeholder"
    :start-placeholder="config.startPlaceholder"
    :end-placeholder="config.endPlaceholder"
    :type="config.type"
    :format="config.format"
    :align="config.align"
    :popper-class="config.popperClass"
    :picker-options="config.pickerOptions"
    :range-separator="config.rangeSeparator"
    :default-value="config.defaultValue"
    :default-time="config.defaultTime"
    :value-format="config.valueFormat"
    :name="config.name"
    :unlink-panels="config.unlinkPanels"
    :prefix-icon="config.prefixIcon"
    :clear-icon="config.clearIcon"
    :validate-event="config.validateEvent"
    @input="change"
  ></el-date-picker>
</template>

<script>
export default {
  name: 'flmDateTime',
  props: {
    data: '',
    config: {
      type: Object,
      default() {
        readonly,
        disabled,
        editable,
        clearable,
        size,
        placeholder,
        startPlaceholder,
        endPlaceholder,
        timeArrowControl,
        type,
        format,
        align,
        popperClass,
        pickerOptions,
        rangeSeparator,
        defaultValue,
        defaultTime,
        valueFormat,
        name,
        unlinkPanels,
        prefixIcon,
        clearIcon,
        validateEvent
      }
    },
    customConfig: Object
  },
  methods: {
    change(event) {
      // console.log(`********`)
      // console.log(`flmDateTime change event: ${event}`)
      this.$emit('change', {
        key: this.customConfig.prop,
        value: event
      })
    }
  }
}
</script>

<style>

</style>
