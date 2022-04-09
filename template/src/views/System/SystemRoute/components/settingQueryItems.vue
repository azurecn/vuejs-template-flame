<template>
  <div class="setting-query-items">
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
            :config="{ labelWidth: '180px', labelPosition: 'right', size: 'medium' }"
            :customConfig="{ items: customConfig.customConfig.items[1].customConfig.customConfig.config }"
          />
        </template>
        <!-- <template #customConfig>自定义设置</template> -->
      </flm-form>
      <el-button-group>
        <el-button @click="handleShowDetail(index)">{{ showDetail ? '隐藏' : '显示' }}详细配置</el-button>
        <el-button :disabled="index === 0" @click="moveAction(index, true)">上移</el-button>
        <el-button :disabled="index === itemsData.length - 1" @click="moveAction(index)">下移</el-button>
        <el-button @click="deleteAction(index)">删除</el-button>
      </el-button-group>
    </div>
    <el-button @click="addQueryItem">添加查询条件</el-button>

    <flm-drawer ref="detailDrawer" @actionSubmit="actionSubmit"></flm-drawer>
  </div>
</template>

<script>
import { flmForm, flmDrawer } from "@/components"
import { QUERY_ITEMS_SETTING, QUERY_ITEM_TYPE_SETTING } from './settingInfo'
export default {
  name: 'settingQueryItems',
  components: {
    flmForm,
    flmDrawer
  },
  props: {
    itemsData: null
  },
  data() {
    return {
      currentItemIndex: null
    }
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
      console.log('控件修改',index, key, value)
      let querySetting = JSON.parse(JSON.stringify(QUERY_ITEM_TYPE_SETTING))
      // 如果修改的是控件类型，修改控件配置
      if (key === 'type') {
        console.log('修改项', this.itemsData)
        this.itemsData[index]
          .customConfig.customConfig.items[1]
          .customConfig.customConfig.config = querySetting[value]
        this.itemsData[index]
          .customConfig.data.config = querySetting[`${value}Data`]
        this.currentItemIndex = index
        this.$refs['detailDrawer'].isShow = true
        this.$refs['detailDrawer'].title = '详细配置'
        this.$refs['detailDrawer'].dataSource = {
          data: querySetting[`${value}Data`],
          config: {},
          customConfig: {
            items: querySetting[value]
          }
        }
      }
    },
    actionSubmit(e) {
      // console.log(this.currentItemIndex)
      // console.log(e)
      console.log(this.itemsData)
    },
    handleShowDetail(index) {
      this.currentItemIndex = index
      // let config = this.itemsData[index].config
      console.log(this.itemsData[index])
      let querySetting = JSON.parse(JSON.stringify(QUERY_ITEM_TYPE_SETTING))
      let value = this.itemsData[index].customConfig.customConfig.items[0].customConfig.type
      this.$refs['detailDrawer'].isShow = true
      this.$refs['detailDrawer'].title = '详细配置'
      this.$refs['detailDrawer'].dataSource = {
        data: querySetting[`${value}Data`],
        config: {},
        customConfig: {
          items: this.itemsData[index].customConfig.customConfig.items[1].customConfig.customConfig.config
        }
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
    // 增加查询项
    addQueryItem({
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
      this.itemsData.push(JSON.parse(JSON.stringify(QUERY_ITEMS_SETTING)))
      this.itemsData[this.itemsData.length - 1].config.data = config
      this.itemsData[this.itemsData.length - 1].customConfig.data = config
      // this.itemsData.config.data = config
      // this.itemsData.customConfig.data = customConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-query-items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
