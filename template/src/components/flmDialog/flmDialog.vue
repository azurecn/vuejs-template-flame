<template>
  <el-dialog
    :visible.sync="dialogSetting.config.visible"
    :title="dialogSetting.config.title"
    :width="dialogSetting.config.width"
    :fullscreen="dialogSetting.config.fullscreen"
    :top="dialogSetting.config.top"
    :modal="dialogSetting.config.modal"
    :modal-append-to-body="dialogSetting.config.modalAppendToBody"
    :append-to-body="dialogSetting.config.appendToBody"
    :lock-scroll="dialogSetting.config.lockScroll"
    :custom-class="dialogSetting.config.customClass"
    :close-on-click-modal="dialogSetting.config.closeOnClickModal"
    :close-on-press-escape="dialogSetting.config.closeOnPressEscape"
    :show-close="dialogSetting.config.showClose"
    :before-close="dialogSetting.config.beforeClose"
    :center="dialogSetting.config.center"
    :destroy-on-close="dialogSetting.config.destroyOnClose"
  >
    <flm-form
      ref="dialogForm"
      :data="formSetting.data"
      :config="formSetting.config"
      :customConfig="formSetting.customConfig"
      @formAciton="$emit('dialogAction', $event)"
    ></flm-form>
  </el-dialog>
</template>

<script>
import { flmForm } from '@/components'
export default {
  name: 'flmDialog',
  components: { flmForm },
  props: {
    dialogSetting: {
      type: Object,
      default() {
        return  {
          config: {},
          customConfig: {}
        }
      }
    },
    formSetting: {
      type: Object,
      default() {
        return {
          data: {},
          config: {},
          customConfig: {
            items: []
          }
        }
      }
    }
  },
}
</script>
