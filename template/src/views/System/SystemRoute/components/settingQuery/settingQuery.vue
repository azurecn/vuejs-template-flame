
<template>
  <formSetting v-model="querySetting" />
</template>

<script>
import formSetting from '../formSetting/formSetting.vue'
export default {
  name: 'settingQuery',
  components: { formSetting },
  data() {
    return {
      querySetting: {
        config: {   // el-form默认设置
          // rules: {},  // obj
          inline: false,
          labelPosition: 'right',
          labelWidth: 'auto',
          labelSuffix: '',
          hideRequiredAsterisk: false,
          showMessage: true,
          inlineMessage: false,
          statusIcon: false,
          validateOnRuleChange: true,
          size: null,
          disabled: false,
        },
        customConfig: {
          items: [],   // 表单项
          buttons: []  // 表单按钮
        }
      },
    }
  }
}
</script>

