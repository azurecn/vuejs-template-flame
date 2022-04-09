<template>
  <el-form
    class="setting-form"
    ref="form"
    :model="switchSetting"
    label-width="200px"
    label-suffix=":"
  >
    <el-divider content-position="left">开关模型</el-divider>
    <flmSwitch v-model="modelText" :config="switchSetting.config" />
    <el-divider content-position="left">开关属性</el-divider>
    <el-row>
      <el-col :span="12">
        <el-form-item label="disabled" prop="disabled">
          <flmSwitch v-model="switchSetting.config.disabled" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="width" prop="width">
          <flmInput v-model.number="switchSetting.config.width" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="active-icon-class" prop="activeIconClass">
          <flmInput v-model="switchSetting.config.activeIconClass" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="inactive-icon-class" prop="inactiveIconClass">
          <flmInput v-model="switchSetting.config.inactiveIconClass" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="active-text" prop="activeText">
          <flmInput v-model="switchSetting.config.activeText" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="inactive-text" prop="inactiveText">
          <flmInput v-model="switchSetting.config.inactiveText" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="active-value" prop="activeValue">
          <el-select
            v-model="switchSetting.config.activeValueType"
            placeholder="请选择value类型"
            @change="changeValueType($event, 'activeValue')"
          >
            <el-option
              v-for="item in valueTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <flmInput
            v-if="switchSetting.config.activeValueType !== 'boolean'"
            :type="switchSetting.config.activeValueType === 'string' ? 'text' : 'number'"
            v-model="switchSetting.config.activeValue"
           />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="inactive-value" prop="inactiveValue">
          <el-select
            v-model="switchSetting.config.inactiveValueType"
            placeholder="请选择value类型"
            @change="changeValueType($event, 'inactiveValue')"
          >
            <el-option
              v-for="item in valueTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <flmInput
            v-if="switchSetting.config.inactiveValueType !== 'boolean'"
            :type="switchSetting.config.inactiveValueType === 'string' ? 'text' : 'number'"
            v-model="switchSetting.config.inactiveValue"
           />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="active-color" prop="activeColor">
          <el-color-picker v-model="switchSetting.config.activeColor"></el-color-picker>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="inactive-color" prop="inactiveColor">
          <el-color-picker v-model="switchSetting.config.inactiveColor"></el-color-picker>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="name" prop="name">
          <flmInput v-model="switchSetting.config.name" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="validate-event" prop="validateEvent">
          <flmSwitch v-model="switchSetting.config.validateEvent" />
        </el-form-item>
      </el-col>
    </el-row>
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
    prop: 'switchSetting',
    event: 'change'
  },
  props: {
    switchSetting: {
      type: Object,
      default() {
        return {
          config: {
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
          },
          customConfig: {}
        }
      }
    }
  },
  data() {
    return {
      modelText: true,
      valueTypes: [
        { value: 'boolean', label: '布尔值' },
        { value: 'string', label: '字符串' },
        { value: 'number', label: '数字' },
      ],
    }
  },
  methods: {
    // 修改值类型
    changeValueType(event, key) {
      let switchConfig = { ...this.switchSetting.config }
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
      this.$emit('change', { config: switchConfig, customConfig: this.switchSetting.customConfig })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>