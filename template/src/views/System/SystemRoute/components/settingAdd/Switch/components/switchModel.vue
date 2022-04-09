<template>
  <div>
    <el-divider content-position="left">弹窗模型</el-divider>
    <el-switch
      v-model="value"
      :disabled="switchSetting.config.disabled"
      :width="switchSetting.config.width"
      :active-icon-class="switchSetting.config.activeIconClass"
      :inactive-icon-class="switchSetting.config.inactiveIconClass"
      :active-text="switchSetting.config.activeText"
      :inactive-text="switchSetting.config.inactiveText"
      :active-value-type="switchSetting.config.activeValueType"
      :inactive-value-type="switchSetting.config.inactiveValueType"
      :active-value="switchSetting.config.activeValue"
      :inactive-value="switchSetting.config.inactiveValue"
      :active-color="switchSetting.config.activeColor"
      :inactive-color="switchSetting.config.inactiveColor"
      :name="switchSetting.config.name"
      :validate-event="switchSetting.config.validateEvent"
    ></el-switch>
  </div>
</template>

<script>
export default {
  name: 'switchModel',
  props: {
    switchSetting: {
      type: Object,
      default() {
        return {
          config: {},
          customConfig: {}
        }
      }
    }
  },
  data() {
    return {
      value: false
    }
  }
}
</script>