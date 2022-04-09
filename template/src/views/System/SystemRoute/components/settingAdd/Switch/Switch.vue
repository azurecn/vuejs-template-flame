<template>
  <div class="switch-page">
    <switch-model :switchSetting="switchSetting" />
    <switch-setting v-model="switchSetting" />
  </div>
</template>

<script>
import switchModel from "./components/switchModel"
import switchSetting from "./components/switchSetting"

export default {
  name: 'Table',
  components: {
    switchModel,
    switchSetting,
  },
  data() {
    return {
      switchSetting: {
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
        }
      }
    }
  }
}
</script>

<style scoped>
</style>