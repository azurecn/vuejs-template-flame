<template>
  <div>
    <el-divider content-position="left">默认配置</el-divider>
    <el-form
      class="setting-form"
      ref="form"
      :model="dialogConfig"
      label-width="200px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="title" prop="title">
            <flmInput v-model="dialogConfig.title" />
            <flmTooltip content="Dialog 的标题" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="width" prop="width">
            <flmInput v-model="dialogConfig.width" />
            <flmTooltip content="Dialog 的宽度" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="top" prop="top">
            <flmInput v-model="dialogConfig.top" />
            <flmTooltip content="Dialog CSS 中的 margin-top 值" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="custom-class" prop="customClass">
            <flmInput v-model="dialogConfig.customClass" />
            <flmTooltip content="Dialog 的自定义类名" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button class="advanced" @click="showConfigDetail = true" type="text">弹窗高级配置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="弹窗高级配置"
      :visible.sync="showConfigDetail"
      width="1100px"
      :before-close="closeConfigDetail"
    >
      <el-form
        class="setting-form"
        ref="form"
        :model="dialogConfig"
        label-width="200px"
        label-suffix=":"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="visible" prop="visible">
              <flmSwitch v-model="dialogConfig.visible" />
              <flmTooltip content="是否显示 Dialog" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="fullscreen" prop="fullscreen">
              <flmSwitch v-model="dialogConfig.fullscreen" />
              <flmTooltip content="是否为全屏 Dialog" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="modal" prop="modal">
              <flmSwitch v-model="dialogConfig.modal" />
              <flmTooltip content="是否需要遮罩层" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="modal-append-to-body" prop="modalAppendToBody">
              <flmSwitch v-model="dialogConfig.modalAppendToBody" />
              <flmTooltip content="遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="append-to-body" prop="appendToBody">
              <flmSwitch v-model="dialogConfig.appendToBody" />
              <flmTooltip content="Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="lock-scroll" prop="lockScroll">
              <flmSwitch v-model="dialogConfig.lockScroll" />
              <flmTooltip content="是否在 Dialog 出现时将 body 滚动锁定" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="close-on-click-modal" prop="closeOnClickModal">
              <flmSwitch v-model="dialogConfig.closeOnClickModal" />
              <flmTooltip content="是否可以通过点击 modal 关闭 Dialog" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="close-on-press-escape" prop="closeOnPressEscape">
              <flmSwitch v-model="dialogConfig.closeOnPressEscape" />
              <flmTooltip content="是否可以通过按下 ESC 关闭 Dialog" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="show-close" prop="showClose">
              <flmSwitch v-model="dialogConfig.showClose" />
              <flmTooltip content="是否显示关闭按钮" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="center" prop="center">
              <flmSwitch v-model="dialogConfig.center" />
              <flmTooltip content="是否对头部和底部采用居中布局" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="destroy-on-close" prop="destroyOnClose">
              <flmSwitch v-model="dialogConfig.destroyOnClose" />
              <flmTooltip content="关闭时销毁 Dialog 中的元素" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" style="text-align: center;">
        <!-- <el-button @click="showConfigDetail = false">取 消</el-button> -->
        <el-button type="primary" @click="showConfigDetail = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { flmTooltip, flmInput, flmSwitch } from "@/components"
export default {
  name: 'settingConfig',
  components: { flmTooltip, flmInput, flmSwitch },
  model: {
    prop: 'dialogConfig',
    event: 'change'
  },
  props: {
    dialogConfig: {
      type: Object,
      default() {
        return {
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
        }
      }
    }
  },
  data() {
    return {
      showConfigDetail: false,
    }
  },
  methods: {
    closeConfigDetail() {
      this.showConfigDetail = false
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../routerSetting.scss';
</style>