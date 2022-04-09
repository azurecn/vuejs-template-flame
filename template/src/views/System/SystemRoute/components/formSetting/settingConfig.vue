<template>
  <div>
    <el-divider content-position="left">表单-默认配置</el-divider>
    <el-form
      class="setting-form"
      ref="form"
      :model="formConfig"
      label-width="200px"
      label-suffix=":"
    >
      <!-- <el-form-item label="rules" prop="rules">
        <flmInput v-model="formConfig.rules" :config="{ disabled: true, placeholder: '表单规则需要JSON编辑器' }" />
        <flmTooltip content="表单验证规则" />
      </el-form-item> -->
      <el-row>
        <el-col :span="12">
          <el-form-item label="size" prop="size">
            <flmSelect
              v-model="formConfig.size"
              :config="{ placeholder: '请选择表单尺寸' }"
              :customConfig="{ options: sizeList }"
            />
            <flmTooltip content="用于控制该表单内组件的尺寸" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="label-position" prop="labelPosition">
            <flmSelect
              v-model="formConfig.labelPosition"
              :config="{ placeholder: '请选择表单尺寸' }"
              :customConfig="{ options: labelPositionList }"
            />
            <flmTooltip content="表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="label-width" prop="labelWidth">
            <flmInput v-model="formConfig.labelWidth" />
            <flmTooltip content="表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="label-suffix" prop="labelSuffix">
            <flmInput v-model="formConfig.labelSuffix" />
            <flmTooltip content="表单域标签的后缀" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="inline" prop="inline">
            <flmSwitch v-model="formConfig.inline" />
            <flmTooltip content="行内表单模式" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="disabled" prop="disabled">
            <flmSwitch v-model="formConfig.disabled" />
            <flmTooltip content="是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="hide-required-asterisk" prop="hideRequiredAsterisk">
            <flmSwitch v-model="formConfig.hideRequiredAsterisk" />
            <flmTooltip content="是否隐藏必填字段的标签旁边的红色星号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="show-message" prop="showMessage">
            <flmSwitch v-model="formConfig.showMessage" />
            <flmTooltip content="是否显示校验错误信息" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="inline-message" prop="inlineMessage">
            <flmSwitch v-model="formConfig.inlineMessage" />
            <flmTooltip content="是否以行内形式展示校验信息" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="status-icon" prop="statusIcon">
            <flmSwitch v-model="formConfig.statusIcon" />
            <flmTooltip content="是否在输入框中显示校验结果反馈图标" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="validate-on-rule-change" prop="validateOnRuleChange">
            <flmSwitch v-model="formConfig.validateOnRuleChange" />
            <flmTooltip content="是否在 rules 属性改变后立即触发一次验证" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  flmInput,
  flmSelect,
  flmSwitch,
  flmTooltip,
} from "@/components"
export default {
  name: 'formConfig',
  components: {
    flmInput,
    flmSelect,
    flmSwitch,
    flmTooltip,
  },
  model: {
    prop: 'formConfig',
    event: 'change'
  },
  props: {
    // 查询设置
    formConfig: {
      type: Object,
      default() {
        return {
          // rules: {},  // obj
          inline: false,
          labelPosition: 'right',
          labelWidth: 'auto',
          labelSuffix: null,
          hideRequiredAsterisk: false,
          showMessage: true,
          inlineMessage: false,
          statusIcon: false,
          validateOnRuleChange: true,
          size: null,
          disabled: false,
        }
      }
    }
  },
  data() {
    return {
      sizeList: [
        { label: "默认", value: null },
        { label: "中型", value: "medium" },
        { label: "小型", value: "small" },
        { label: "迷你", value: "mini" },
      ],
      labelPositionList: [
        { label: "右对齐", value: "right" },
        { label: "左对齐", value: "left" },
        { label: "上方", value: "top" },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>