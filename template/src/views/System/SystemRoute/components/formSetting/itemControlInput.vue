<template>
  <el-form
    class="setting-form"
    :model="inputSetting"
    ref="form"
    label-width="150px"
    label-suffix=":"
  >
    <el-divider content-position="left">输入框模型</el-divider>
    <flmInput v-model="modelText" :config="inputSetting.config" />
    <el-divider content-position="left">输入框属性</el-divider>
    <el-row>
      <el-col :span="12">
        <el-form-item label="type" prop="type">
          <flmSelect v-model="inputSetting.config.type" :customConfig="{ options: typeOptions }" />
          <flmTooltip content="输入框类型" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="size" prop="size">
          <flmSelect v-model="inputSetting.config.size" :customConfig="{ options: sizeOptions }" />
          <flmTooltip content="输入框尺寸（大小）" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="maxlength" prop="maxlength">
          <flmInput v-model="inputSetting.config.maxlength" :config="{ type: 'number' }" />
          <flmTooltip content="原生属性，最大输入长度" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="minlength" prop="minlength">
          <flmInput v-model="inputSetting.config.minlength" :config="{ type: 'number' }" />
          <flmTooltip content="原生属性，最小输入长度" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="show-word-limit" prop="showWordLimit">
          <flmSwitch v-model="inputSetting.config.showWordLimit" :config="{ disabled: ['text', 'textarea'].includes(inputSetting.config.type) }" />
          <flmTooltip content="是否显示输入字数统计" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="show-password" prop="showPassword">
          <flmSwitch v-model="inputSetting.config.showPassword" />
          <flmTooltip content="是否显示切换密码图标" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="placeholder" prop="placeholder">
          <flmInput v-model="inputSetting.config.placeholder" />
          <flmTooltip content="输入框占位文本" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="resize" prop="resize">
          <flmSelect v-model="inputSetting.config.resize" :customConfig="{ options: resizeOptions }" />
          <flmTooltip content="输入框尺寸（大小）" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="clearable" prop="clearable">
          <flmSwitch v-model="inputSetting.config.clearable" />
          <flmTooltip content="是否可清空" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="disabled" prop="disabled">
          <flmSwitch v-model="inputSetting.config.disabled" />
          <flmTooltip content="禁用组件" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="prefix-icon" prop="prefixIcon">
          <iconSelect v-model="inputSetting.config.prefixIcon" />
          <flmTooltip content="输入框头部图标，默认string" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="suffix-icon" prop="suffixIcon">
          <iconSelect v-model="inputSetting.config.suffixIcon" />
          <flmTooltip content="输入框尾部图标，默认string" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="prefix-icon" prop="prefixIcon">
          <iconSelect v-model="inputSetting.config.prefixIcon" />
          <flmTooltip content="输入框头部图标，默认string" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="suffix-icon" prop="suffixIcon">
          <iconSelect v-model="inputSetting.config.suffixIcon" />
          <flmTooltip content="输入框尾部图标，默认string" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="autocomplete" prop="autocomplete">
          <flmSwitch v-model="inputSetting.config.autocomplete" :config="{ activevalue: 'on', inactiveValue: 'off' }" />
          <flmTooltip content="原生属性，自动补全，默认off" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="readonly" prop="readonly">
          <flmSwitch v-model="inputSetting.config.readonly" />
          <flmTooltip content="原生属性，是否只读，默认值false" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="max" prop="max">
          <flmInput v-model="inputSetting.config.max" :config="{ type: 'number' }" />
          <flmTooltip content="原生属性，设置最大值" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="min" prop="min">
          <flmInput v-model="inputSetting.config.min" :config="{ type: 'number' }"/>
          <flmTooltip content="原生属性，设置最小值" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="rows" prop="rows">
          <flmInput
            v-model="inputSetting.config.rows"
            :config="{ disabled: inputSetting.config.type !== 'textarea', type: 'number' }"
          />
          <flmTooltip content="输入框行数" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="name" prop="name">
          <flmInput v-model="inputSetting.config.name" />
          <flmTooltip content="原生属性" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="autofocus" prop="autofocus">
          <flmSwitch v-model="inputSetting.config.autofocus" />
          <flmTooltip content="原生属性，自动获取焦点，默认值false" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="autosize" prop="autosize">
          <flmSwitch v-model="inputSetting.config.autosize" :config="{ disabled: inputSetting.config.type !== 'textarea' }" />
          <flmTooltip content="自适应内容高度，只对 type='textarea' 有效，可传入对象" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="step" prop="step">
          <flmInput v-model="inputSetting.config.step" :config="{ type: 'number' }" />
          <flmTooltip content="原生属性，设置输入字段的合法数字间隔" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="form" prop="form">
          <flmInput v-model="inputSetting.config.form" />
          <flmTooltip content="原生属性" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="label" prop="label">
          <flmInput v-model="inputSetting.config.label" />
          <flmTooltip content="输入框关联的label文字" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="tabindex" prop="tabindex">
          <flmInput v-model="inputSetting.config.tabindex" />
          <flmTooltip content="输入框的tabindex" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="validateEvent" prop="validateEvent">
      <flmSwitch v-model="inputSetting.config.validateEvent" />
      <flmTooltip content="输入时是否触发表单的校验，默认值true" />
    </el-form-item>
  </el-form>
</template>

<script>
import {
  flmTooltip,
  flmInput,
  flmSelect,
  flmSwitch,
  iconSelect
} from "@/components"
export default {
  name: 'itemControlInput',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch,
    iconSelect
  },
  model: {
    prop: 'inputSetting',
    event: 'change'
  },
  props: {
    inputSetting: {
      type: Object,
      default() {
        return {
          config: {
            size: null,
            type: 'text', 
            maxlength: null, 
            minlength: null, 
            showWordLimit: false, 
            placeholder: null, 
            clearable: false, 
            showPassword: false, 
            disabled: false, 
            size: null, 
            prefixIcon: null, 
            suffixIcon: null, 
            rows: 2, 
            autosize: false, 
            autocomplete: 'off', 
            autoComplete: 'off', 
            name: null, 
            readonly: false, 
            max: null, 
            min: null, 
            step: null, 
            resize: null, 
            autofocus: false, 
            form: null, 
            label: null, 
            tabindex: null, 
            validateEvent: true, 
          },
          customConfig: {}
        }
      }
    }
  },
  data() {
    return {
      modelText: '',
      typeOptions: [
        { label: '文本', value: 'text' },
        { label: '文本块', value: 'textarea' },
        { label: '密码', value: 'password' },
        { label: '数字', value: 'number' },
        { label: '邮箱', value: 'email' },
        { label: '链接', value: 'url' },
      ],
      sizeOptions: [
        { label: '默认', value: null },
        { label: '普通', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '迷你', value: 'mini' },
      ],
      resizeOptions: [
        { label: '不能重置大小', value: 'none' },
        { label: '任意方向', value: 'both' },
        { label: '水平方向', value: 'horizontal' },
        { label: '垂直方向', value: 'vertical' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>