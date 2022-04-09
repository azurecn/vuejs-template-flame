<template>
  <div class="setting-table">
    <div>默认配置</div>
    <flm-form
      ref="defaultConfig"
      v-model="tableSetting.config.data"
      :config="tableSetting.config.config"
      :customConfig="tableSetting.config.customConfig"
    />
    <div>自定义配置</div>
    <flm-form
      ref="tableSetting"
      v-model="tableSetting.customConfig.data"
      :config="tableSetting.customConfig.config"
      :customConfig="tableSetting.customConfig.customConfig"
    >
      <template #children>
<!--        <settingTableColumns-->
<!--          v-for="(column, columnIndex) in tableSetting.customConfig.data.children"-->
<!--          :key="columnIndex"-->
<!--          v-model="tableSetting.customConfig.data.children[columnIndex]"-->
<!--        />-->
        <div class="item-list" v-for="(column, $idx) in tableSetting.customConfig.data.children" :key="$idx">
          <div class="label">{{ column.config.label }}</div>
          <el-button @click="handleShowDetail(column)">详情</el-button>
          <el-button :disabled="$idx === 0" @click="moveAction($idx, true)">上移</el-button>
          <el-button :disabled="$idx === tableSetting.customConfig.data.children.length - 1" @click="moveAction($idx)">下移</el-button>
          <el-button @click="deleteAction($idx)">删除</el-button>
        </div>
      </template>
    </flm-form>
    <el-button @click="addColumn">增加列</el-button>

    <flm-drawer ref="detailDrawer"></flm-drawer>
  </div>
</template>

<script>
import { flmForm, flmDrawer } from "@/components"
import settingTableColumns from "./settingTableColumns"
import { TABLE_SETTING, TABLE_COLUMN_CHILDREN_SETTING } from './settingInfo'
export default {
  name: 'setting-table',
  components: {
    flmForm,
    flmDrawer,
    settingTableColumns
  },
  data() {
    return {
      tableSetting: TABLE_SETTING
    }
  },
  computed: {
    formatData: {
      get() {
        JSON.parse(this.tableSetting.config.data.treeProps)
        return {
          config: {
            ...this.tableSetting.config.data,
            treeProps: JSON.parse(this.tableSetting.config.data.treeProps)
          },
          customConfig: this.tableSetting.customConfig.data,
        }
      },
      set({ config, customConfig }) {
        this.tableSetting.config.data = {
          ...config,
          treeProps: JSON.stringify(config.treeProps)
        }
        this.tableSetting.customConfig.data = customConfig
      }
    }
  },
  methods: {
    // 增加列
    addColumn() {
      // 新增字段命名
      let tableColumnSetting = TABLE_COLUMN_CHILDREN_SETTING
      tableColumnSetting.config.label = `新增字段${this.tableSetting.customConfig.data.children.length + 1}`
      this.tableSetting.customConfig.data.children.push(JSON.parse(JSON.stringify(tableColumnSetting)))
    },

    handleShowDetail(config) {
      // this.operationList[index].showDetail = !this.operationList[index].showDetail
      console.log(config)
      console.log(JSON.stringify(config))
      // let format = {}
      // format.data = JSON.parse(JSON.stringify(config.config))
      // format.customConfig
      this.$refs['detailDrawer'].isShow = true
      this.$refs['detailDrawer'].title = '详细配置'
      this.$refs['detailDrawer'].dataSource = config
    },

    // 移动操作
    moveAction(index, direction) {
      console.log(index)
      console.log(this.tableSetting.customConfig.data.children)
      let item = this.tableSetting.customConfig.data.children[index],         // 需要移动的元素
          tarageIndex = direction ? index - 1 : index + 1  // 目标下标
      this.tableSetting.customConfig.data.children.splice(index, 1)
      this.tableSetting.customConfig.data.children.splice(tarageIndex, 0, item)
    },
    // 删除操作
    deleteAction(index) {
      this.$confirm('此操作将删除该配置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        this.tableSetting.customConfig.data.children.splice(index, 1)
        this.$message.success('删除成功!')
      })
      .catch(() => this.$message.info('已取消删除'))
    },
  }
}
</script>

<style lang="scss">
.setting-table {
  padding: 0 30px;
  .el-form-item__label-wrap {
    width: 100%;
    float: none;
  }

  .item-list {
    display: flex;
    align-items: center;
    .label {
      flex: 0 0 120px;
    }
  }
}
</style>
