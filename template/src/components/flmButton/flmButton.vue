<template>
  <el-button
    :size="config.size"
    :type="config.type"
    :plain="config.plain"
    :round="config.round"
    :circle="config.circle"
    :loading="config.loading"
    :disabled="config.disabled"
    :icon="config.icon"
    :autofocus="config.autofocus"
    :native-type="config.nativeType"
    @click="buttonClick(customConfig.operation)"
  >{{ customConfig.buttonText }}</el-button>
</template>

<script>
export default {
  name: 'flmButton',
  props: {
    // 默认配置
    config: {
      type: Object,
      default() {
        return {
          size,
          type,
          plain,
          round,
          circle,
          loading,
          disabled,
          icon,
          autofocus,
          nativeType,
        }
      }
    },
    // 自定义配置
    customConfig: {
      type: Object,
      default() {
        return {
          operation: '',   // 触发函数名
          buttonText: '',  // 按钮文字
        }
      }
    }
  },
  methods: {
    // 按钮点击
    buttonClick(operation) {
      this.$emit('buttonClick', operation)
    }
  }
}
</script>

<style>

</style>