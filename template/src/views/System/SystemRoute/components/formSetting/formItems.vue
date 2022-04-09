<template>
  <div class="setting-custom-config">
    <el-form
      v-for="(formItem, itemIndex) in formItems"
      :key="itemIndex"
      class="setting-form"
      ref="form"
      :model="formItem"
      label-width="50px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="6">
          <el-form-item label="prop" prop="prop">
            <flmSelect v-model="formItem.config.prop" :customConfig="{ options: propOptions }" />
            <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="label" prop="label">
            <flmInput v-model="formItem.config.label" />
            <flmTooltip content="列是否固定在左侧或者右侧" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="control-type" size="type">
            <flmSelect v-model="formItem.customConfig.type" :customConfig="{ options: controlTypes }" @change="changeControlType($event, itemIndex)" />
            <flmTooltip content="控件类型" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item>
            <el-button type="text" @click="openItemDetail(formItem, itemIndex)">高级配置</el-button>
            <el-button :disabled="formItem.customConfig.type === 'slot'" type="text" @click="openControlDetail(formItem, itemIndex)">控件配置</el-button>
            <el-button type="text" disabled @click="moveItem">上移</el-button>
            <el-button type="text" disabled @click="moveItem">下移</el-button>
            <el-button type="text" @click="deleteItem(itemIndex)">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="buttons">
      <el-button size="small" @click="addItem">增加表单项</el-button>
    </div>
    <el-dialog
      title="表单项高级配置"
      :visible.sync="showItemDetail"
      width="1100px"
      :before-close="closeItemDetail"
      destroy-on-close
    >
      <el-form
        class="setting-form"
        ref="form"
        :model="itemDetail"
        label-width="200px"
        label-suffix=":"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="size" size="size">
              <flmSelect
                v-model="itemDetail.config.size"
                :customConfig="{ options: sizeList }"
              />
              <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="label-width" prop="labelWidth">
              <flmInput v-model="itemDetail.config.labelWidth" />
              <flmTooltip content="对应列内容的字段名" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="error" prop="error">
              <flmInput v-model="itemDetail.config.error" />
              <flmTooltip content="对应列内容的字段名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="required" prop="required">
              <flmSwitch v-model="itemDetail.config.required" />
              <flmTooltip content="显示的标题" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="show-message" prop="showMessage">
              <flmSwitch v-model="itemDetail.config.showMessage" />
              <flmTooltip content="显示的标题" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="inline-message" prop="inlineMessage">
              <flmSwitch v-model="itemDetail.config.inlineMessage" />
              <flmTooltip content="显示的标题" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" style="text-align: center;">
        <el-button @click="closeItemDetail">取 消</el-button>
        <el-button type="primary" @click="saveItemDetail">保 存</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="控件配置"
      :visible.sync="showControlDetail"
      width="1100px"
      :before-close="closeControlDetail"
    >
      <component :is="controlComponent(controlDetail.type)" v-model="controlDetail"></component>
      <div slot="footer" style="text-align: center;">
        <el-button @click="closeControlDetail">取 消</el-button>
        <el-button type="primary" @click="saveControlDetail">保 存</el-button>
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
  flmSwitch
} from "@/components"
import settingDrawerInput from '../settingDrawerInput.vue'
import itemControlInput from './itemControlInput.vue'
import itemControlSwitch from './itemControlSwitch.vue'
import itemControlSelect from './itemControlSelect.vue'
import controlModel from './formItems.js'
export default {
  name: 'settingCustomConfig',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch,
    settingDrawerInput,
    itemControlInput,
    itemControlSwitch,
    itemControlSelect
  },
  model: {
    prop: 'formItems',
    event: 'change'
  },
  props: {
    formItems: {
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
      showItemDetail: false,  // 显示高级配置
      currentIndex: null,
      itemDetail: {  // 列配置
        config: {
          prop: '',
          label: '',
          labelWidth: null,
          required: false,
          // rules: {},  // obj
          error: '',
          showMessage: true,
          inlineMessage: false,
          size: null,
        }
      },
      backupItemDetail: {},   // 列配置份（比对修改）
      showControlDetail: false,  // 显示控件配置
      controlDetail: {},         // 控件配置
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
      ]
    }
  },
  computed: {
    itemModel() {
      return (controlType) => {
        return {
          config: {
            prop: '',
            label: '',
            labelWidth: null,
            required: false,
            rules: {},
            error: '',
            showMessage: true,
            inlineMessage: false,
            size: null,
          },
          customConfig: {
            type: controlType,
            ..._.cloneDeep(controlModel[`${controlType}Model`])
          }
        }
      }
    },
    controlComponent() {
      return (controlName) => {
        return {
          input: 'itemControlInput',
          switch: 'itemControlSwitch',
          select: 'itemControlSelect',
        }[controlName]
      }
    }
  },
  created() {
    this.getPropOptions()
  },
  methods: {
    // 获取字段选项
    getPropOptions(tableName, prefix = '') {
      console.log(tableName, prefix)
      allSearch({
        tableName: 'flametableinfoitem',
        data: { 
          conditions: { table_name: tableName || localStorage.getItem('settingTableName') }  // 表名要活的，后续集成进vuex
        }
      })
        .then(({ items }) => {
          this.propOptions = items
            .map(({ field_name, field_description, fk_table_name }) => ({
              label: field_description,
              value: `${prefix}${field_name}`,
              subLabel: field_name,
              subTableName: fk_table_name
            }))
        })
    },
    // 新增项
    addItem() {
      let formItems = this.formItems
      this.$emit('change', [ ...formItems, this.itemModel('input') ])
    },
    // 修改控件类型
    changeControlType(controlType, index) {
      let formItems = this.formItems
      console.log('control', formItems)
      formItems[index].customConfig = {
        type: controlType,
        ..._.cloneDeep(controlModel[`${controlType}Model`])
      }
      this.$emit('change', formItems)
    },
    // 打开项配置弹窗
    openItemDetail(itemData, itemIndex) {
      this.currentIndex = itemIndex
      this.itemDetail = _.cloneDeep(itemData)
      this.showItemDetail = true
    },
    // 关闭项配置弹窗
    closeItemDetail() {
      this.showItemDetail = false
    },
    // 保存项配置
    saveItemDetail() {
      let formItems = this.formItems
      formItems[this.currentIndex] = this.itemDetail
      this.$emit('change', formItems)
      this.closeItemDetail()
    },
    // 打开按钮配置弹窗
    openControlDetail(itemData, itemIndex) {
      console.log('单项详情', itemData.customConfig)
      this.currentIndex = itemIndex
      this.controlDetail = _.cloneDeep(itemData.customConfig)
      this.showControlDetail = true
    },
    // 关闭按钮配置弹窗
    closeControlDetail() {
      this.showControlDetail = false
    },
    // 保存按钮配置
    saveControlDetail() {
      console.log('单项信息', this.controlDetail)
      let formItems = this.formItems,
        { config, customConfig } = this.controlDetail
      formItems[this.currentIndex].customConfig.config = config
      formItems[this.currentIndex].customConfig.customConfig = customConfig
      this.$emit('change', formItems)
      this.closeControlDetail()
    },
    actionSubmit() {},
    // 移动项
    moveItem(type) {},
    // 删除项
    deleteItem(index) {
      this.$confirm(`此操作将删除该按钮, 是否继续?`, `提示`, {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
      .then(() => {
        let formItems = this.formItems
        formItems.splice(index, 1)
        this.$emit('change', formItems)
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
.config-main {
  display: flex;
}
.node-action {
  display: none;
}
.custom-tree-node:hover 
.node-action {
  display: inline-block;
}
.icon {
  margin-left: 5px;
  font-size: 18px;
}
.tree-action {
  width: 300px;
  margin-top: 10px;
  text-align: center;
}
</style>