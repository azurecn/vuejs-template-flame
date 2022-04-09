<template>
  <div class="setting-custom-config">
    <el-form
      v-for="(formButton, itemIndex) in formButtons"
      :key="itemIndex"
      class="setting-form"
      ref="form"
      :model="formButton"
      label-width="50px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="6">
          <el-form-item label-width="80px" label="operation" prop="customConfig.operation">
            <flmSelect
              v-model="formButton.customConfig.operation"
              :config="{ filterable: true, allowCreate: true }"
              :customConfig="{ options: operations }"
              @change="changOperation($event, itemIndex)"
            />
            <flmTooltip content="列是否固定在左侧或者右侧" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="buttonText" prop="buttonText">
            <flmInput v-model="formButton.customConfig.buttonText" />
            <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="text" @click="openButtonDetail(formButton, itemIndex)">高级配置</el-button>
            <el-button type="text" disabled @click="moveItem">上移</el-button>
            <el-button type="text" disabled @click="moveItem">下移</el-button>
            <el-button type="text" @click="deleteItem(itemIndex)">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="buttons">
      <el-button size="small" @click="addItem">增加按钮</el-button>
    </div>
    <el-dialog
      title="表单项高级配置"
      :visible.sync="showButtonDetail"
      width="1100px"
      :before-close="closeButtonDetail"
    >
      <el-divider content-position="left">按钮模板</el-divider>
      <flmButton :config="buttonDetail.config" :customConfig="buttonDetail.customConfig" />
      <el-divider content-position="left">详细配置</el-divider>
      <el-form
        class="setting-form"
        ref="form"
        :model="buttonDetail"
        label-width="200px"
        label-suffix=":"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="size" size="size">
              <flmSelect v-model="buttonDetail.config.size" :customConfig="{ options: sizeList }" />
              <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="icon" prop="icon">
              <iconSelect v-model="buttonDetail.config.icon" />
              <flmTooltip content="图标类名，参见https://element.eleme.cn/2.15/#/zh-CN/component/icon" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="type" size="type">
              <flmSelect v-model="buttonDetail.config.type" :customConfig="{ options: types }" />
              <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="native-type" prop="nativeType">
              <flmSelect v-model="buttonDetail.config.nativeType" :customConfig="{ options: nativeTypes }" />
              <flmTooltip style="margin-left: 1em;" content="原生按钮类型属性" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="plain" prop="plain">
              <el-switch v-model="buttonDetail.config.plain"></el-switch>
              <flmTooltip content="是否朴素按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="round" prop="round">
              <el-switch v-model="buttonDetail.config.round"></el-switch>
              <flmTooltip content="是否圆角按钮" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="circle" prop="circle">
              <el-switch v-model="buttonDetail.config.circle"></el-switch>
              <flmTooltip content="是否圆形按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="loading" prop="loading">
              <el-switch v-model="buttonDetail.config.loading"></el-switch>
              <flmTooltip content="是否加载中状态" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="disable" prop="disable">
              <el-switch v-model="buttonDetail.config.disable"></el-switch>
              <flmTooltip content="是否禁用状态" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="autofocus" prop="autofocus">
              <el-switch v-model="buttonDetail.config.autofocus"></el-switch>
              <flmTooltip content="是否默认聚焦" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" style="text-align: center;">
        <el-button @click="closeButtonDetail">取 消</el-button>
        <el-button type="primary" @click="saveButtonDetail">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import { allSearch } from '@/api/system.js'
import {
  flmTooltip,
  flmInput,
  flmSelect,
  flmSwitch,
  iconSelect,
  flmButton
} from "@/components"
import settingDrawerInput from '../settingDrawerInput.vue'
import settingDrawerButton from '../settingDrawerButton.vue'
export default {
  name: 'settingCustomConfig',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch,
    iconSelect,
    flmButton,
    settingDrawerInput,
    settingDrawerButton
  },
  model: {
    prop: 'formButtons',
    event: 'change'
  },
  props: {
    formButtons: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      // 自定义配置数据
      currentId: null,
      currentNode: {},
      showButtonDetail: false,  // 显示高级配置
      currentIndex: null,
      buttonDetail: {  // 列配置
        config: { // el-button 默认设置
          size: null,
          type: null,
          plain: false,
          round:	false,
          circle:	false,
          loading:	false,
          disabled:	false,
          icon: null,
          autofocus:	false,
          nativeType: 'button'
        },
        customConfig: {           // el-button 自定义设置
          buttonText: '',      // 按钮文字
          operation: ''  // 调用函数
        }
      },
      backupButtonDetail: {},   // 列配置份（比对修改）
      showControlDetail: false,  // 显示控件配置
      controlDetail: {},         // 控件配置
      // 新增模板
      buttonModel: {  // 列配置
        config: { // el-button 默认设置
          size: null,
          type: null,
          plain: false,
          round:	false,
          circle:	false,
          loading:	false,
          disabled:	false,
          icon: null,
          autofocus:	false,
          nativeType: 'button'
        },
        customConfig: {           // el-button 自定义设置
          buttonText: '',      // 按钮文字
          operation: ''  // 调用函数
        }
      },
      propOptions: [],
      sizeList: [
        { label: "默认", value: null },
        { label: "中型", value: "medium" },
        { label: "小型", value: "small" },
        { label: "迷你", value: "mini" },
      ],
      controlTypes: [
        { label: '插槽', value: 'slot' },
        { label: '输入框', value: 'input' },
        { label: '开关', value: 'switch' },
        { label: '选择器', value: 'select' },
      ],
      operations: [
        { label: 'formSubmit', value: 'formSubmit', text: '提交' },
        { label: 'formReset', value: 'formReset', text: '重置' },
      ],
      nativeTypes: [
        { label: 'button', value: 'button' },
        { label: 'submit', value: 'submit' },
        { label: 'reset', value: 'reset' },
      ],
      types: [
        { label: '默认', value: null },
        { label: '主要', value: 'primary' },
        { label: '成功', value: 'success' },
        { label: '信息', value: 'info' },
        { label: '警告', value: 'warning' },
        { label: '危险', value: 'danger' },
        { label: '文字', value: 'text' },
      ]
    }
  },
  methods: {
    // 新增项
    addItem() {
      this.$emit('change', [ ...this.formButtons, _.cloneDeep(this.buttonModel) ])
    },
    // 修改调用函数
    changOperation(event, index) {
      console.log('operation', event)
      const operation = this.operations.find(({ value }) => value === event)
      if (operation) {
        let formButtons = this.formButtons
        formButtons[index].customConfig.buttonText = operation.text
        this.$emit('change', formButtons)
      }
    },
    // 打开项配置弹窗
    openButtonDetail(itemData, itemIndex) {
      this.currentIndex = itemIndex
      this.buttonDetail = _.cloneDeep(itemData)
      this.showButtonDetail = true
    },
    // 关闭项配置弹窗
    closeButtonDetail() {
      this.showButtonDetail = false
    },
    // 保存项配置
    saveButtonDetail() {
      let formButtons = this.formButtons
      formButtons[this.currentIndex] = this.buttonDetail
      this.$emit('change', formButtons)
      this.closeButtonDetail()
    },
    // 移动按钮
    moveItem(type) {},
    // 删除按钮
    deleteItem(index) {
      this.$confirm(`此操作将删除该按钮, 是否继续?`, `提示`, {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
      .then(() => {
        let formButtons = this.formButtons
        formButtons.splice(index, 1)
        this.$emit('change', formButtons)
      })
      .catch(() => this.$message.info('已取消删除'))
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
.setting-form {
  width: 100%;
}
.buttons {
  text-align: center;
}
</style>