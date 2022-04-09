<template>
  <div class="dialog-page">
    <dialog-model />
    <dialog-setting v-model="dialogSetting" />
  </div>
</template>

<script>
import dialogModel from "./components/dialogModel"
import dialogSetting from "./components/dialogSetting"

export default {
  name: 'Table',
  components: {
    dialogModel,
    dialogSetting,
  },
  model: {
    prop: 'dialogSetting',
    event: 'change',
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

<style scoped>
</style>