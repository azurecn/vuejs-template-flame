<template>
  <buttonSetting v-model="actionSetting" />
</template>

<script>
import buttonSetting from '../formSetting/formButtons.vue'
export default {
  name: 'settingAction',
  components: { buttonSetting },
  props: {
    data: null
  },
  data() {
    return {
      actionSetting: [],  // 权限列表
    }
  },
}
</script>