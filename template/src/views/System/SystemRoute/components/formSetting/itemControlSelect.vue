<template>
  <el-form
    class="config-form"
    ref="form"
    :model="selectSetting"
    label-width="200px"
    label-suffix=":"
  >
    <el-divider content-position="left">选择器模型</el-divider>
    <flmSelect v-model="modelText" :config="selectSetting.config" :customConfig="selectSetting.customConfig" />
    <el-divider content-position="left">选择器属性</el-divider>
    <el-row>
      <el-col :span="12">
        <el-form-item label="multiple" prop="multiple">
          <el-switch v-model="selectSetting.config.multiple"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="disabled" prop="disabled">
          <el-switch v-model="selectSetting.config.disabled"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="value-key" prop="valueKey">
          <el-input v-model.number="selectSetting.config.valueKey"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="size" prop="size">
          <el-select v-model="selectSetting.config.region" placeholder="请选择表格尺寸">
            <el-option label="默认" :value="null"></el-option>
            <el-option label="中型" value="medium"></el-option>
            <el-option label="小型" value="small"></el-option>
            <el-option label="迷你" value="mini"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="clearable" prop="clearable">
          <el-switch v-model="selectSetting.config.clearable"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="collapse-tags" prop="collapseTags">
          <el-switch v-model="selectSetting.config.collapseTags"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="multiple-limit" prop="multipleLimit">
          <el-input v-model.number="selectSetting.config.multipleLimit" type="number"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="name" prop="name">
          <el-input v-model.number="selectSetting.config.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="autocomplete" prop="autocomplete">
          <el-input v-model.number="selectSetting.config.autocomplete"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="placeholder" prop="placeholder">
          <el-input v-model.number="selectSetting.config.placeholder"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="filterable" prop="filterable">
          <el-switch v-model="selectSetting.config.filterable"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="allow-create" prop="allowCreate">
          <el-switch v-model="selectSetting.config.allowCreate"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="remote" prop="remote">
          <el-switch v-model="selectSetting.config.remote"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="loading" prop="loading">
          <el-switch v-model="selectSetting.config.loading"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="loading-text" prop="loadingText">
          <el-input v-model.number="selectSetting.config.loadingText"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="no-match-text" prop="noMatchText">
          <el-input v-model.number="selectSetting.config.noMatchText"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="no-data-text" prop="noDataText">
          <el-input v-model.number="selectSetting.config.noDataText"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="popper-class" prop="popperClass">
          <el-input v-model.number="selectSetting.config.popperClass"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="reserve-keyword" prop="reserveKeyword">
          <el-switch v-model="selectSetting.config.reserveKeyword"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="default-first-option" prop="defaultFirstOption">
          <el-switch v-model="selectSetting.config.defaultFirstOption"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="popper-append-to-body" prop="popperAppendToBody">
          <el-switch v-model="selectSetting.config.popperAppendToBody"></el-switch>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="automatic-dropdown" prop="automaticDropdown">
          <el-switch v-model="selectSetting.config.automaticDropdown"></el-switch>
        </el-form-item>
      </el-col>
    </el-row>
    <el-divider content-position="left">选择器自定义属性</el-divider>
    <el-form-item label="type" prop="type">
      <el-switch
        v-model="selectSetting.customConfig.getOptionWay"
        activeText="自定义配置"
        inactiveText="远程获取"
        @change="changeGetOptionWay"
      ></el-switch>
    </el-form-item>
    <el-form-item v-show="!selectSetting.customConfig.getOptionWay" label="groupName" prop="groupName">
      <el-input v-model="selectSetting.customConfig.groupName"></el-input>
    </el-form-item>
    <el-form-item v-show="selectSetting.customConfig.getOptionWay" label="options" prop="options">
      <el-form
        class="option"
        v-for="(option, optionIndex) in selectSetting.customConfig.options"
        :key="optionIndex"
        label-width="80px"
        label-suffix=":"
        inline
      >
        <el-form-item label="label" prop="label">
          <el-input v-model="option.label"></el-input>
        </el-form-item>
        <el-form-item label="value" prop="value">
          <el-input v-model="option.value"></el-input>
        </el-form-item>
        <el-form-item label="disabled" prop="disabled">
          <el-switch v-model="option.disabled"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button size="small">上移</el-button>
            <el-button size="small">下移</el-button>
            <el-button size="small">删除</el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
      <el-button @click="addOption">新增选项</el-button>
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
    prop: 'selectSetting',
    event: 'change'
  },
  props: {
    selectSetting: {
      type: Object,
      default() {
        return {
          config: {
            multiple:	false,
            disabled:	false,
            valueKey: 'value',
            size: null,
            clearable: false,
            collapseTags: false,
            multipleLimit: 0,
            name: null,
            autocomplete:	'off',
            autoComplete: 'off',
            placeholder: '请选择',
            filterable:	false,
            allowCreate:	false,
            // filterMethod: null,  // function
            remote: false,
            // remoteMethod: null,  // function
            loading: false,
            loadingText: '加载中',
            noMatchText: '无匹配数据',
            noDataText:	'无数据',
            popperClass: null,
            reserveKeyword: false,
            defaultFirstOption: false,
            popperAppendToBody: true,
            automaticDropdown: false
          },
          customConfig: {
            options: [
              { value: 0, label: '选项1' },
              { value: 1, label: '选项2' },
            ]
          }
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
  },
  methods: {
    changeGetOptionWay(event) {
      let selectSetting = this.selectSetting
      event
        ? selectSetting.customConfig.groupName = ''
        : selectSetting.customConfig.options = []
      this.$emit('change', selectSetting)
    },
    addOption() {
      let selectSetting = this.selectSetting
      selectSetting.customConfig.options = [
        ...selectSetting.customConfig.options,
        { value: '', label: '', disabled: false }
      ]
      this.$emit('change', selectSetting)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>