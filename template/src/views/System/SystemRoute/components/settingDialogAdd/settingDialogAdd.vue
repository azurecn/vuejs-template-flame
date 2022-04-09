<template>
  <div class="add-setting">
    <el-divider content-position="left">弹窗配置</el-divider>
    <dialogSetting class="sub-main" v-model="dialogAddSetting.dialogSetting" />
    <el-divider content-position="left">新增配置</el-divider>
    <formSetting class="sub-main" v-model="dialogAddSetting.formSetting" />
  </div>
</template>

<script>
import dialogSetting from '../dialogSetting/dialogSetting.vue'
import formSetting from '../formSetting/formSetting.vue'
export default {
  name: 'settingDialogAdd',
  components: {
    dialogSetting,
    formSetting
  },
  data() {
    return {
      dialogAddSetting: {
        dialogSetting: {
          config: {
            visible: false,
            title: null,
            width: '50%',
            fullscreen: false,
            top: '15vh',
            modal: true,
            modalAppendToBody: true,
            appendToBody: false,
            lockScroll: true,
            customClass: null,
            closeOnClickModal: true,
            closeOnPressEscape: true,
            showClose: true,
            // beforeClose: null,  // function
            center: false,
            destroyOnClose: false
          },
          customConfig: {}
        },
        formSetting: {
          config: {
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
          },  // el-form默认设置
          customConfig: {
            items: [],   // 表单项
            buttons: []  // 表单按钮
          }
        },
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-main {
  margin-left: 20px;
}
</style>