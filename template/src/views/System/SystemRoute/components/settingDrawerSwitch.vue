<!-- 操作按钮属性 -->
<!--      size	尺寸	string	medium / small / mini	—-->
<!--      type	类型	string	primary / success / warning / danger / info / text	—-->
<!--      plain	是否朴素按钮	boolean	—	false-->
<!--      round	是否圆角按钮	boolean	—	false-->
<!--      circle	是否圆形按钮	boolean	—	false-->
<!--      loading	是否加载中状态	boolean	—	false-->
<!--      disabled	是否禁用状态	boolean	—	false-->
<!--      icon	图标类名	string	—	—-->
<!--      autofocus	是否默认聚焦	boolean	—	false-->
<!--      native-type	原生 type 属性	string	button / submit / reset	button-->
<template>
  <el-drawer
      class="components-drawer"
      size="50%"
      :title="title"
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose">
    <div class="drawer-content">
      <div class="demo-style">
        <span>配置样板：</span>
        <span style="padding: 0 1em;font-size: 14px;">14px字体</span>
        <el-button
            :size="drawerForm.size"
            :type="drawerForm.type"
            :plain="drawerForm.plain"
            :round="drawerForm.round"
            :circle="drawerForm.circle"
            :loading="drawerForm.loading"
            :disabled="drawerForm.disabled"
            :icon="drawerForm.icon"
            :autofocus="drawerForm.autofocus"
            :native-type="drawerForm.nativeType"
        >配置样板按钮</el-button>
      </div>

      <el-form
        class="setting-drawer-form"
        ref="form"
        :model="drawerForm"
        label-width="100px"
        label-suffix=":"
        >
        <div style="padding: 15px 0 20px">常用配置3</div>
        <el-form-item label="type" prop="type">
          <el-radio-group v-model="drawerForm.type">
            <el-radio
                v-for="item in optionList(TYPE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="按钮类型（背景色）" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="size" prop="size">
          <el-radio-group
              v-model="drawerForm.size"
              :max="1">
            <el-radio
                v-for="item in optionList(SIZE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="按钮尺寸（大小）" />
          </el-radio-group>
        </el-form-item>
        <div style="padding: 15px 0 20px">其他配置</div>
        <el-form-item label="plain" prop="plain">
          <el-switch v-model="drawerForm.plain"></el-switch>
          <flmTooltip content="是否朴素按钮，仅在type不为白色时生效" />
        </el-form-item>
        <el-form-item label="round" prop="round">
          <el-switch v-model="drawerForm.round"></el-switch>
          <flmTooltip content="是否圆角按钮" />
        </el-form-item>
        <el-form-item label="circle" prop="circle">
          <el-switch v-model="drawerForm.circle"></el-switch>
          <flmTooltip content="是否圆形按钮" />
        </el-form-item>
        <el-form-item label="loading" prop="loading">
          <el-switch v-model="drawerForm.loading"></el-switch>
          <flmTooltip content="是否加载中状态，开启后无法触发事件" />
        </el-form-item>
        <el-form-item label="icon" prop="icon">
          <flmInput
              :data="drawerForm.icon"
              :config="{ type: 'string' }"
              :customConfig="{ prop: 'icon' }"
              @change="changeValue"
          />
          <flmTooltip content="图标类名，参见https://element.eleme.cn/2.15/#/zh-CN/component/icon" />
        </el-form-item>
        <el-form-item label="autofocus" prop="autofocus">
          <el-switch v-model="drawerForm.autofocus"></el-switch>
          <flmTooltip content="是否默认聚焦" />
        </el-form-item>
        <el-form-item label="nativeType" prop="nativeType">
          <el-radio-group v-model="drawerForm.nativeType">
            <el-radio
                v-for="item in optionList(NATIVE_TYPE_OPTION)"
                :key="item.value"
                :label="item.value"
            >{{ item.label }}</el-radio>
            <flmTooltip style="margin-left: 1em;" content="原生按钮类型属性" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="drawer-footer">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleCloseDrawer">取消</el-button>
    </div>
  </el-drawer>
</template>

<script>
import {
  flmTooltip,
  flmInput,
} from "@/components"
export default {
  name: 'settingItemDrawer',
  components: {
    flmTooltip,
    flmInput,
  },
  data() {
    return {
      title: '操作',
      isShow: false,
      direction: 'rtl',
      drawerForm: {
        size: null,
        type: null,
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: '',
        autofocus: false,
        nativeType: 'button'
      },
      // optionList配置
      SIZE_OPTION: {
        null: '默认',
        medium: '普通',
        small: '小',
        mini: '迷你'
      },
      TYPE_OPTION: {
        null: '白色',
        primary: '蓝色',
        success: '绿色',
        warning: '橙色',
        danger: '红色',
        info: '灰色'
      },
      NATIVE_TYPE_OPTION: {
        button: '按钮',
        submit: '提交',
        reset: '重置'
      }
    }
  },
  computed: {

  },
  watch: {
    'isShow'() {
      this.transNullToRender(this.drawerForm, 'size')
      this.transNullToRender(this.drawerForm, 'type')
    }
  },
  mounted () {
    // // 模拟数据传入
    // this.drawerForm = {
    //   size: 'null',
    //   type: 'null',
    //   plain: false,
    //   round: false,
    //   circle: false,
    //   loading: false,
    //   disabled: false,
    //   icon: '',
    //   autofocus: false,
    //   nativeType: 'button'
    // }
  },
  methods: {
    optionList(obj) {
      return Object
      .entries(obj)
      .map(([ value, text ]) => ({ value, label: `${value}${text}` }))
    },
    transNullToRender(obj, attr) {
       obj[attr] === null && (obj[attr] = 'null')
    },
    changeValue({ key, value }) {
      this.drawerForm[key] = value
    },
    handleClose(done) {
      done()
    },
    handleCloseDrawer() {
      this.isShow = false
    },
    formToSetting() {
      this.formData = {
        ...this.drawerForm,
        size: this.transNullToSubmit(this.drawerForm, 'size'),
        type: this.transNullToSubmit(this.drawerForm, 'type'),
      }
    },
    transNullToSubmit(obj, attr) {
      return obj[attr] === 'null' ? null : obj[attr]
    },
    handleSubmit() {
      this.formToSetting()
      this.$emit('actionSubmit', this.formData)
      console.log(this.formData)
      this.handleCloseDrawer()
    },
  }
}
</script>

<style lang="scss">
.components-drawer {
  .drawer-content {
    padding: 15px;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    border-top: 1px solid #eee;
  }
  .demo-style {
    margin: 10px;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 15px;
  }

  .el-drawer__header {
    margin-bottom: 12px;
  }
  .drawer-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button + button {
      margin-right: 20px;
    }
  }

  .el-input {
    width: 203px;
  }
}
</style>
