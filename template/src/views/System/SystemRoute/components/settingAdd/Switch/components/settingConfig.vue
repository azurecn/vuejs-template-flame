<template>
  <div>
    <el-divider content-position="left">默认配置</el-divider>
    <el-form
      class="setting-form"
      ref="form"
      :model="switchConfig"
      label-width="200px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="disabled" prop="disabled">
            <flmSwitch v-model="switchConfig.disabled" />
            <flmTooltip content="是否禁用" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="width" prop="width">
            <flmInput v-model.number="switchConfig.width" />
            <flmTooltip content="switch 的宽度（像素）" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="active-icon-class" prop="activeIconClass">
            <flmInput v-model="switchConfig.activeIconClass" />
            <flmTooltip content="switch 打开时所显示图标的类名，设置此项会忽略 active-text" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="inactive-icon-class" prop="inactiveIconClass">
            <flmInput v-model="switchConfig.inactiveIconClass" />
            <flmTooltip content="switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="active-text" prop="activeText">
            <flmInput v-model="switchConfig.activeText" />
            <flmTooltip content="switch 打开时的文字描述" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="inactive-text" prop="inactiveText">
            <flmInput v-model="switchConfig.inactiveText" />
            <flmTooltip content="switch 关闭时的文字描述" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="active-value" prop="activeValue">
            <flmSelect
              style="width: 100px"
              v-model="switchConfig.activeValueType"
              :config="{ placeholder: '请选择value类型' }"
              :customConfig="{ options: valueTypes }"
              @change="changeValueType($event, 'activeValue')"
            />
            <flmInput
              style="width: 103px;"
              v-if="switchConfig.activeValueType !== 'boolean'"
              :type="switchConfig.activeValueType === 'string' ? 'text' : 'number'"
              v-model="switchConfig.activeValue"
            />
            <flmTooltip content="switch 打开时的值" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="inactive-value" prop="inactiveValue">
            <flmSelect
              style="width: 100px"
              v-model="switchConfig.inactiveValueType"
              :config="{ placeholder: '请选择value类型' }"
              :customConfig="{ options: valueTypes }"
              @change="changeValueType($event, 'inactiveValue')"
            />
            <flmInput
              style="width: 103px;"
              v-if="switchConfig.inactiveValueType !== 'boolean'"
              :type="switchConfig.inactiveValueType === 'string' ? 'text' : 'number'"
              v-model="switchConfig.inactiveValue"
            />
            <flmTooltip content="switch 关闭时的值" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="active-color" prop="activeColor">
            <el-color-picker v-model="switchConfig.activeColor"></el-color-picker>
            <flmTooltip content="switch 打开时的背景色" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="inactive-color" prop="inactiveColor">
            <el-color-picker v-model="switchConfig.inactiveColor"></el-color-picker>
            <flmTooltip content="switch 关闭时的背景色" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="name" prop="name">
            <flmInput v-model="switchConfig.name" />
            <flmTooltip content="switch 对应的 name 属性" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="validate-event" prop="validateEvent">
            <flmSwitch v-model="switchConfig.validateEvent" />
            <flmTooltip content="改变 switch 状态时是否触发表单的校验" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {
  flmTooltip,
  flmInput,
  flmSwitch,
  flmSelect
} from "@/components"
export default {
  name: 'settingConfig',
  components: {
    flmTooltip,
    flmInput,
    flmSwitch,
    flmSelect
  },
  model: {
    prop: 'switchConfig',
    event: 'change'
  },
  props: {
    switchConfig: {
      type: Object,
      default() {
        return {
          disabled: false,
          width: 40,
          activeIconClass: null,
          inactiveIconClass: null,
          activeText: null,
          inactiveText: null,
          activeValueType: 'boolean',
          inactiveValueType: 'boolean',
          activeValue: true,
          inactiveValue: false,
          activeColor: '#409EFF',
          inactiveColor: '#C0CCDA',
          name: null,
          validateEvent: true,
        }
      }
    }
  },
  data() {
    return {
      valueTypes: [
        { value: 'boolean', label: '布尔值' },
        { value: 'string', label: '字符串' },
        { value: 'number', label: '数字' },
      ],
      showConfigDetail: false,
    }
  },
  methods: {
    // 修改值类型
    changeValueType(event, key) {
      let switchConfig = { ...this.switchConfig }
      switch (event) {
        case 'boolean':
          switchConfig[key] = key === 'activeValue'
          break
        case 'string':
          switchConfig[key] = key === 'activeValue' ? '开启' : '关闭'
          break
        case 'number':
          switchConfig[key] = key === 'activeValue' ? 1 : 0
          break
      }
      this.$emit('change', switchConfig)
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../routerSetting.scss';
</style>