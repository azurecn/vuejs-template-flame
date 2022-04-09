<template>
  <div class="dialog-form">
    <setting-config v-model="dialogSetting.config" />
    <!-- <setting-custom-config /> -->
  </div>
</template>

<script>
import settingConfig from "./settingConfig.vue"
// import settingCustomConfig from "./settingCustomConfig.vue"
export default {
  name: 'dialogSetting',
  components: {
    settingConfig,
    // settingCustomConfig,
  },
  model: {
    prop: 'dialogSetting',
    event: 'change'
  },
  props: {
    dialogSetting: {
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