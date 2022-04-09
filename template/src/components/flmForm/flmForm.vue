<template>
  <!-- flmForm组件，包含表单所有内容，提交操作时向上级抛出form数据 -->
  <div>
    <!--  组件接收 flmSetupData 用于form设置 -->
    <el-form
      class="form-body"
      ref="form"
      :model="form"
      :label-width="$attrs.flmSetupData.labelWidth"
      :inline="$attrs.flmSetupData.inline"
      v-bind="$attrs.flmSetupData"
    >
      <!--   flmFormItem子组件，接收 flmItemData 用于下级组件form-item渲染  -->
      <template v-for="(item, $idx) in $attrs.flmItemData">
        <!--    非展开情况下只显示固定（默认2）个数的搜索选项    -->
        <div :key="item.id" v-show="$idx < showCount && !toggleSearchStatus">
          <flm-form-item ref="flmFormItem"
                         v-bind="item"
                         v-on="$listeners"></flm-form-item>
        </div>
        <!--    展开情况下显示全部搜索选项    -->
        <div :key="item.id" v-show="toggleSearchStatus">
          <flm-form-item ref="flmFormItem"
                         v-bind="item"
                         v-on="$listeners"></flm-form-item>
        </div>
      </template>
      <!--   按钮区域   -->
      <el-form-item>
<!--        <el-button v-if="$attrs.flmSetupData.customConfig.defaultButtons.isSubmitShow" type="primary" @click="handleSubmit">查询</el-button>-->
<!--        <el-button v-if="$attrs.flmSetupData.customConfig.defaultButtons.isResetShow" type="primary" @click="handleReset">重置</el-button>-->
<!--        <el-button v-if="$attrs.flmSetupData.customConfig.defaultButtons.isCancelShow" type="primary" @click="handleCancel">取消</el-button>-->
        <el-button
          v-for="button in $attrs.permissions"
          :key="button.func"
          type="primary"
          @click="handleClick(button.func)"
        >{{ button.text }}</el-button>
        <a @click="handleToggleSearch" style="margin-left: 8px">
          {{ toggleSearchStatus ? '收起' : '展开' }}
          <i :class="toggleSearchStatus ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" />
        </a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import flmFormItem from './flmFormItem.vue'
import { QUERY_ITEM_NO_TOGGLE_SHOW_COUNT } from '@/utils/constantDefined'

export default {
  name: 'flmForm',
  inheritAttrs: true,
  components: {
    flmFormItem
  },
  props: {

  },
  data() {
    return {
      form: {}, // flmForm 表单提交数据
      showCount: QUERY_ITEM_NO_TOGGLE_SHOW_COUNT, // 显示表单栏目数（默认2）
      toggleSearchStatus: false // 表单栏目展开（全显）状态
    }
  },
  created () {
    // console.log(`this.$attrs.flmItemData:`)
    // console.log(this.$attrs.flmItemData)
    // console.log(this.$listeners)
    // this.initForm()
  },
  methods: {
    // change(val, formItemId) {
    //   console.log(`flmForm ${formItemId} change ${val}`)
    //   this.$emit('change', val, formItemId)
    // },
    // 初始化绑定form与提交项目
    initForm() {
      this.$attrs.flmItemData && this.$attrs.flmItemData.forEach(qli => {
        this.form[qli.data.submitLabel] = qli.data.value
      })
    },
    // 切换展开装填
    handleToggleSearch() {
      this.toggleSearchStatus = !this.toggleSearchStatus
    },
    // *** 20210712 表单事件改到业务层处理，向外层传参action（当前操作名称）、form（当前form数据） ***
    handleClick(action) {
      // console.log(`flmForm handleClick ${action}`)
      this.initForm()
      this.$emit('submitFormFunc', action, this.form)
    },
    // *** 20210712 表单事件改到业务层处理，向外层传参action（当前操作名称）、form（当前form数据） end ***

    // // form表单提交
    // handleSubmit() {
    //   // 整理提交数据赋值给this.form
    //   this.initForm()
    //   console.log(`flmForm handleSubmit ${JSON.stringify(this.form)}`)
    //   // 通过提交事件向父组件传form参数
    //   this.$emit('submit', this.form)
    // },
    // handleReset() {
    //   this.$attrs && this.$attrs.flmItemData && this.$attrs.flmItemData.forEach(qli => {
    //     // checkbox初始化赋值为null会报错
    //     if(qli.config.type === 'Checkbox') {
    //       this.$set(qli.data, 'value', [])
    //     }else {
    //       this.$set(qli.data, 'value', null)
    //     }
    //   })
    // },
    // handleCancel() {
    //   this.$emit('cancel')
    // }
  }
}
</script>

<style lang="scss" scoped>
  .form-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .el-form-item {
    margin-bottom: 0;
  }
</style>
