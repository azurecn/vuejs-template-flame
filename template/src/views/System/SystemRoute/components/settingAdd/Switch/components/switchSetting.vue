<template>
  <div class="switch-form">
    <setting-config v-model="switchSetting.config" />
    <!-- <setting-custom-config /> -->
  </div>
</template>

<script>
import settingConfig from "./settingConfig.vue"
// import settingCustomConfig from "./settingCustomConfig.vue"
export default {
  name: 'switchSetting',
  components: {
    settingConfig,
    // settingCustomConfig,
  },
  model: {
    prop: 'switchSetting',
    event: 'change'
  },
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
  }
}
</script>

<style>
</style>