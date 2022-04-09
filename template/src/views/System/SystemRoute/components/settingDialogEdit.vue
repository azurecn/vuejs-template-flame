<template>
  <div class="setting-dialog-edit">
    <div>编辑对话框配置</div>
    <flm-form
      ref="defaultConfig"
      :data="dialogSetting.config.data"
      :config="dialogSetting.config.config"
      :customConfig="dialogSetting.config.customConfig"
      v-bind="$attrs"
      v-on="$listeners"
    />
    <div style="border-bottom: 1px dashed #ccc;"></div>
    <div style="padding-top: 20px">表单配置</div>

    <div class="setting-query">
      <div>默认配置</div>
      <flm-form
        ref="defaultConfig"
        :data="formSetting.config.data"
        :config="formSetting.config.config"
        :customConfig="formSetting.config.customConfig"
        v-bind="$attrs"
        v-on="$listeners"
      />
      <div>自定义配置</div>
      <flm-form
        ref="formSetting"
        :data="formSetting.customConfig.data"
        :config="formSetting.customConfig.config"
        :customConfig="formSetting.customConfig.customConfig"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template #items>
          <settingQueryItems ref="queryItems" v-model="formSetting.customConfig.data.items" />
        </template>
        <template #buttons>
          <settingQueryButtons ref="queryButtons" v-model="formSetting.customConfig.data.buttons" />
        </template>
      </flm-form>
    </div>

    <!-- <flm-form
        v-model="formSetting.config.data"
        :config="formSetting.config.config"
        :customConfig="formSetting.config.customConfig"
    />
    <flm-form
      v-model="formSetting.customConfig.data"
      :config="formSetting.customConfig.config"
      :customConfig="formSetting.customConfig.customConfig"
    >
      <template #items>
        <setting-dialog-items ref="dialogItems" v-model="formSetting.customConfig.data.items" />
      </template>
      <template #buttons>
        <setting-dialog-buttons ref="dialogButtons" v-model="formSetting.customConfig.data.buttons" />
      </template>
    </flm-form> -->
  </div>
</template>

<script>
import { flmForm } from "@/components"
import settingQueryButtons from "./settingQueryButtons"
import settingQueryItems from "./settingQueryItems"
import { QUERY_FORM_SETTING, QUERY_ITEM_SETTING, QUERY_ITEM_TYPE_SETTING, DIALOG_EDIT_SETTING, DIALOG_EDIT_FORM_SETTING } from './settingInfo'
export default {
  name: 'settingDialogEdit',
  components: {
    flmForm,
    settingQueryButtons,
    settingQueryItems
  },
  props: {
    data: null
  },
  data() {
    return {
      operationList: [],  // 搜素条件
      // 对话框设置
      dialogSetting: JSON.parse(JSON.stringify(DIALOG_EDIT_SETTING)),
      // 表单设置
      formSetting: JSON.parse(JSON.stringify(QUERY_FORM_SETTING)),
    }
  },
  computed: {
    formatData: {
      get() {
        // console.log('新增弹框设置', this.dialogSetting)
        let { config, customConfig } = this.formSetting,
            { items, buttons } = customConfig.data,
            filterItemList = (list) => {
              if (list && list.length) {
                return list.map(({ config, customConfig }) => {
                  let { config: itemConfig , type,  ...itemCustomConfig } = customConfig.data
                  return {
                    config: config.data,
                    customConfig: {  // form-item
                      type,
                      config: itemConfig,
                      customConfig: itemCustomConfig
                    }
                  }
                })
              } else {
                return []
              }
            },
            filterButtonList = (list) => {
              if (list && list.length) {
                return list.map(({ config, customConfig }) => {
                  return { config: config.data, customConfig: customConfig.data }
                })
              } else {
                return []
              }
            }
        return {
          dialogSetting: {
            config: this.dialogSetting.config.data,
            customConfig: {}
          },
          formSetting: {
            config: config.data,
            customConfig: {
              items: filterItemList(items),
              buttons: filterButtonList(buttons)
            }
          }
        }
      },
      set(value) {
        console.log('edit', value)
        // const a = {
        //   dialogSetting: {
        //     config: dialogSetting.config.data
        //   },
        //   formSetting: {
        //     config: this.formSetting.config.data,
        //     customConfig: ,
        //   }
        // }
        this.dialogSetting.config.data = value.dialogSetting.config
        this.dialogSetting.customConfig.data = value.dialogSetting.customConfig

        this.formSetting.config.data = value.formSetting.config
        value.formSetting.customConfig.buttons.forEach(button => this.$refs.queryButtons.addOperation(button))
        value.formSetting.customConfig.items.forEach(item => this.$refs.queryItems.addQueryItem(item))

        // value.dialogSetting
        // value.formSetting.customConfig.buttons.forEach(button => this.$refs.queryButtons.addOperation(button))
        // value.formSetting.customConfig.items.forEach(item => this.$refs.queryItems.addQueryItem(item))
      }
    }
  },
  mounted () {
    // console.log(`this.dialogSetting.config.config`)
    // console.log(this.dialogSetting.config.config)
  },
  methods: {
    // 增加弹框的基础配置
    addOperation() {
      // console.log(`addOperation this.operationList`)
      // console.log(this.operationList)
      // console.log('增加表单项', QUERY_ITEM_SETTING)
      this.operationList.push(JSON.parse(JSON.stringify(QUERY_ITEM_SETTING)))
    },
    // 基础配置参数变化赋值，生成对应高级配置
    basicSettingChange(index, { key, value }) {
      console.log(`settingDialog basicSettingChange index: ${index}`)
      console.log(`settingDialog basicSettingChange key: ${key}`)
      console.log(`settingDialog basicSettingChange value: ${value}`)
      this.$set(this.operationList[index].customConfig.data, key, value)

      // 对应详细配置参数变更
      let dialogSetting = JSON.parse(JSON.stringify(QUERY_ITEM_TYPE_SETTING))
      switch (value) {
        case 'input':
          this.$set(this.operationList[index].config.customConfig, 'items', dialogSetting.input)
          this.$set(this.operationList[index].config, 'data', dialogSetting.inputData)
          break
        case 'switch':
          this.$set(this.operationList[index].config.customConfig, 'items', dialogSetting.switch)
          this.$set(this.operationList[index].config, 'data', dialogSetting.switchData)
          break
        case 'select':
          this.$set(this.operationList[index].config.customConfig, 'items', dialogSetting.select)
          this.$set(this.operationList[index].config, 'data', dialogSetting.selectData)
          break
        case 'dateTime':
          this.$set(this.operationList[index].config.customConfig, 'items', dialogSetting.dateTime)
          this.$set(this.operationList[index].config, 'data', dialogSetting.dateTimeData)
          break
      }
    },
    // 显示表单项高级配置
    handleShowMoreSetting(index) {
      // console.log('显示详细配置', this.operationList[index].config.customConfig)
      if(this.operationList[index].config.customConfig.items.length) {
        this.operationList[index].showDetail = !this.operationList[index].showDetail
      }else {
        this.$message.error('请先选择组件类型！')
      }
    },
    // 高级配置参数变化赋值
    detailSettingChange(index, $event) {
      // console.log(`page/settingDialog func/detailSettingChange index: ${index}`)
      this.$set(this.operationList[index].config.data, $event.key, $event.value)
    },
    // 表单项排序
    handleMoveForward(index) {
      let item = JSON.parse(JSON.stringify(this.operationList[index]))
      if(index) {
        // 删除当前操作元素
        this.operationList.splice(index, 1)
        // 在前一位插入当前元素
        this.operationList.splice(index-1, 0, item)
      }
    },
    // 表单项排序
    handleMoveBackward(index) {
      let item = JSON.parse(JSON.stringify(this.operationList[index]))
      if(index) {
        // 删除当前操作元素
        this.operationList.splice(index, 1)
        // 在前一位插入当前元素
        this.operationList.splice(index+1, 0, item)
      }
    },
    // 删除单个基础表单项
    handleDeleteItem(index) {
      this.operationList.splice(index, 1)
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
