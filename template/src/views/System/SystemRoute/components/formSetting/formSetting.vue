<template>
  <div class="form-form">
    <setting-config v-model="formSetting.config" />
    <setting-custom-config v-model="formSetting.customConfig" />
    <!-- <el-button @click="preview">预览</el-button> -->
  </div>
</template>

<script>
import settingConfig from "./settingConfig.vue"
import settingCustomConfig from "./settingCustomConfig.vue"
export default {
  name: 'formSetting',
  components: {
    settingConfig,
    settingCustomConfig,
  },
  model: {
    prop: 'formSetting',
    event: 'change'
  },
  props: {
    formSetting: {
      type: Object,
      default() {
        return {
          config: {},
          customConfig: {},
        }
      }
    }
  },
  methods: {
    preview() {}
  }
}
</script>

<style>
</style>