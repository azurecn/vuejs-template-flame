<template>
  <div class="table-form">
    <setting-config v-model="tableSetting.config" />
    <setting-custom-config v-model="tableSetting.customConfig" />
    <!-- <el-button @click="preview">预览</el-button> -->
  </div>
</template>

<script>
import settingConfig from "./settingConfig.vue"
import settingCustomConfig from "./settingCustomConfig.vue"
export default {
  name: 'tableSetting',
  components: {
    settingConfig,
    settingCustomConfig,
  },
  model: {
    prop: 'tableSetting',
    event: 'change'
  },
  props: {
    tableSetting: {
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
    preview() {

    }
  }
}
</script>

<style>
</style>