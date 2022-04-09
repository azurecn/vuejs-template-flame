<template>
  <el-main class="route-setting">
    <el-container style="height: 100%">
      <el-header class="setting-header">
        页面配置{{ routeName ? `（${routeName}）` : "" }}
      </el-header>
      <el-main class="setting-main" v-show="showTabs">
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane
            v-for="tab in tabs"
            :key="tab.name"
            :label="tab.label"
            :name="tab.name"
            stretch
          >
            <setting-query v-if="tab.name === 'query'" ref="query" />
            <setting-dialog-add v-else-if="tab.name === 'dialogAdd'" ref="dialogAdd" />
            <setting-dialog-edit v-else-if="tab.name === 'dialogEdit'" ref="dialogEdit" />
            <setting-dialog-read v-else-if="tab.name === 'dialogRead'" ref="dialogRead" />
            <setting-action v-else-if="tab.name === 'action'" ref="action" />
            <setting-table v-else-if="tab.name === 'table'" ref="table" />
            <setting-table-action v-else-if="tab.name === 'tableAction'" ref="tableAction" />
            <setting-batch-action v-else-if="tab.name === 'batchAction'" ref="batchAction" />
            <setting-pagination v-else-if="tab.name === 'pagination'" ref="pagination" />
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer class="setting-footer" v-show="showTabs">
        <el-button
          type="primary"
          icon="el-icon-folder-checked"
          @click="submitSetting"
        >保 存</el-button>
      </el-footer>
      <el-alert
        v-show="!showTabs"
        class="alert"
        type="info"
        title="提示"
        description="请点击配置按钮开始配置"
        show-icon
        center
      >
      </el-alert>
    </el-container>
  </el-main>
</template>

<script>
import {
  settingQuery,
  settingDialogAdd,
  settingDialogEdit,
  settingDialogRead,
  settingAction,
  settingTable,
  settingTableAction,
  settingBatchAction,
  settingPagination,
} from './index.js'
import { callPost, singleUpdate } from '@/api/system.js'
export default {
  name: "routeSetting",
  components: {
    settingQuery,
    settingDialogAdd,
    settingDialogEdit,
    settingDialogRead,
    settingAction,
    settingTable,
    settingTableAction,
    settingBatchAction,
    settingPagination,
  },
  props: {
    routeName: String,
    routeId: String,
    routeTableName: String
  },
  watch: {
    routeId() {
      this.getSetting()
    }
  },
  data() {
    return {
      showTabs: false,
      activeName: 'table',
      settingId: null,
      tabs: [
        { name: 'table', label: '表格' },
        { name: 'tableAction', label: '表格操作' },
        { name: 'dialogAdd', label: '新增弹框' },
        { name: 'dialogEdit', label: '编辑弹框' },
        { name: 'dialogRead', label: '查看弹框' },
        { name: 'query', label: '查询' },
        { name: 'action', label: '操作' },
        { name: 'batchAction', label: '批量操作' },
        { name: 'pagination', label: '分页' },
      ]
    };
  },
  methods: {
    // 获取配置
    getSetting(showSuccses) {
      let commit_data = {
        tableName:'FlamePageConfig',
        data:{ 
          menu_flame_id: this.routeId,
          page_config_type:"page"
        }
      }
      callPost(commit_data, 'getpageconfigbymenuid')
        .then(({ item }) =>{
          this.showTabs = true
          const { page_all_config: pageSetting, flame_id } = item
          this.settingId = flame_id
          this.tabs.forEach(({ name }) => {
            pageSetting[name] && (this.$refs[name][0][`${name}Setting`] = pageSetting[name])
          })
          showSuccses
            ? this.$message.success('保存成功')
            : this.activeName = 'table'
        })
    },
    // 提交配置
    submitSetting() {
      let submitData = {},
        formComponents = ['dialogAdd', 'dialogEdit', 'dialogRead']
      this.tabs.forEach(({ name }) => {
        let settingData = this.$refs[name][0][`${name}Setting`]
        if (formComponents.includes(name)) {
          this.addFormData(settingData.formSetting)
        } else if (name === 'query') {
          this.addFormData(settingData)
        }
        submitData[name] = settingData
      })
      singleUpdate({
        tableName: 'FlamePageConfig',
        data: {
          key: this.settingId,
          data: submitData
        }
      })
        .then(() => this.getSetting(true))
    },
    addFormData(formSetting) {
      formSetting.data = {}
      formSetting.customConfig.items.forEach(item => {
        // 后续需要根据控件类型设置默认值
        formSetting.data[item.config.prop] = null
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.route-setting {
  height: 100%;
  padding: 0;
  .setting {
    &-header {
      $height: 40px;
      height: $height;
      padding: 0;
      font-size: 18px;
      text-align: center;
      line-height: $height;
    }
    &-main {
      height: 100%;
      padding: 0 10px;
      .form {
        padding: 0 100px;
      }
    }
    &-footer {
      text-align: center;
      line-height: 60px;
    }
  }
  .alert {
    height: 100%;
  }
}
</style>
