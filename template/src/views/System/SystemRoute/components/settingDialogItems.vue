<template>
  <div class="setting-dialog-items">
    <div
      class="operation"
      v-for="[index, { showDetail, config, customConfig }] in itemsData.entries()"
      :key="index"
    >
      <!-- form-item 默认设置 -->
      <flm-form
        v-show="showDetail"
        :data="config.data"
        :config="config.config"
        :customConfig="config.customConfig"
      />
      <!-- 自定义设置 -->
      <flm-form
        :data="customConfig.data"
        :config="customConfig.config"
        :customConfig="customConfig.customConfig"
        @change="customFormChange(index, $event)"
      >
        <!-- 控件设置 -->
        <template #config="slotProps">
          <div @click="test(slotProps)">控件设置</div>
          <flm-form
            v-model="customConfig.data.config"
            :config="{ labelWidth: '100px', labelPosition: 'right', size: 'medium' }"
            :customConfig="{ items: customConfig.customConfig.items[index].customConfig.customConfig.config }"
          />
        </template>
        <!-- <template #customConfig>自定义设置</template> -->
      </flm-form>
      <el-button-group>
        <el-button
          @click="itemsData[index].showDetail = !itemsData[index].showDetail"
        >{{ showDetail ? '隐藏' : '显示' }}详细配置</el-button>
        <el-button :disabled="index === 0" @click="moveAction(index, true)">上移</el-button>
        <el-button :disabled="index === itemsData.length - 1" @click="moveAction(index)">下移</el-button>
        <el-button @click="deleteAction(index)">删除</el-button>
      </el-button-group>
    </div>
    <el-button @click="addDialogItem">添加项</el-button>
  </div>
</template>

<script>
import { flmForm } from "@/components"
import { DIALOG_ITEMS_SETTING, QUERY_ITEM_TYPE_SETTING } from './settingInfo'
export default {
  name: 'settingDialogItems',
  components: { flmForm },
  props: {
    itemsData: null
  },
  model: {
    prop: 'itemsData',
    event: 'changeItems'
  },
  methods: {
    test(slotProps) {
      console.log('插槽数据', slotProps)
    },
    // 自定义表单变化
    customFormChange(index, { key, value }) {
      console.log('控件修改', key, value)
      let dialogSetting = JSON.parse(JSON.stringify(QUERY_ITEM_TYPE_SETTING))
      // 如果修改的是控件类型，修改控件配置
      if (key === 'type') {
        this.itemsData[index].config.data = dialogSetting[`${value}Data`]
        this.itemsData[index].config.customConfig.items = dialogSetting[value]
        // this.itemsData[index]
        //     .customConfig.customConfig.items[1]
        //     .customConfig.customConfig.config = dialogSetting[value]
        // this.itemsData[index]
        //     .customConfig.data.config = dialogSetting[`${value}Data`]
        // this.itemsData[index].showDetail = true

        // this.itemsData[index]
        //     .customConfig.customConfig.items[1]
        //     .customConfig.customConfig.config = dialogSetting[value]
        // this.itemsData[index]
        //     .customConfig.data.config = dialogSetting[`${value}Data`]
        // 预期参数
        // {
        //   config: {
        //     label: "唯一id",
        //     prop: "flame_id"
        //   },
        //   customConfig: {
        //     config: {},
        //     customConfig: {
        //       prop: "flame_id"
        //     },
        //     type: "input"
        //   }
        // },
        // this.itemsData[index]
        //     .customConfig.data.config = dialogSetting[`${value}Data`]
        console.log(dialogSetting[`${value}`])
        console.log(dialogSetting)
        console.log(this.itemsData[index])
      }
    },
    // 移动操作
    moveAction(index, direction) {
      let item = this.itemsData[index],         // 需要移动的元素
        tarageIndex = direction ? index - 1 : index + 1  // 目标下标
      this.itemsData.splice(index, 1)
      this.itemsData.splice(tarageIndex, 0, item)
    },
    // 删除操作
    deleteAction(index) {
      this.$confirm
      this.$confirm('此操作将删除该配置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.itemsData.splice(index, 1)
          this.$message.success('删除成功!')
        })
        .catch(() => this.$message.info('已取消删除'))
    },
    // 增加权限
    addDialogItem({
      config = {
        prop: null,
        label: null,
        labelWidth: null,
        required: false,
        rules: null,
        error: null,
        showMessage: true,
        inlineMessage: false,
        size: null,
      },
      customConfig = {
        type: '',         // 控件类型
        config: {},       // 控件设置
        // customConfig: {}  // 控件自定义设置
      }
    }) {
      this.itemsData.push(JSON.parse(JSON.stringify(DIALOG_ITEMS_SETTING)))
      this.itemsData[this.itemsData.length - 1].config.label = 'items'
      this.itemsData[this.itemsData.length - 1].config.data = JSON.parse(JSON.stringify(config))
      this.itemsData[this.itemsData.length - 1].customConfig.data = JSON.parse(JSON.stringify(customConfig))
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-dialog-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
