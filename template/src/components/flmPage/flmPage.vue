<template>
  <div class="flm-page" ref="flmPage">
    <!-- 查询 -->
    <flm-form
      class="page-query"
      ref="queryForm"
      :data="pageSetting.query.data"
      :config="pageSetting.query.config"
      :customConfig="pageSetting.query.customConfig"
      @formAciton="queryAction"
    />
    <!-- 操作栏 -->
    <el-button-group class="page-action">
      <flm-button
        v-for="button in pageSetting.action"
        :key="button.customConfig.operation"
        :config="button.config"
        :customConfig="button.customConfig"
        @buttonClick="actionClick"
      />
    </el-button-group>
    <!-- 表格 -->
    <div class="page-table">
      <flm-table
        ref="pageTable"
        :data="pageSetting.table.data"
        :config="pageSetting.table.config"
        :customConfig="pageSetting.table.customConfig"
        @select="select"
        @selectAll="selectAll"
        @selectionChange="selectionChange"
        @cellMouseEnter="cellMouseEnter"
        @cellMouseLeave="cellMouseLeave"
        @cellClick="cellClick"
        @cellDblclick="cellDblclick"
        @rowClick="rowClick"
        @rowContextmenu="rowContextmenu"
        @rowDblclick="rowDblclick"
        @headerClick="headerClick"
        @headerContextmenu="headerContextmenu"
        @sortChange="sortChange"
        @filterChange="filterChange"
        @currentChange="currentChange"
        @headerDragend="headerDragend"
        @expandChange="expandChange"
      >
        <template v-if="pageSetting.tableAction.length" #tableAction="slotProps">
          <div v-if="pageSetting.tableAction.length <= 3">
            <el-button
              v-for="(permission, permissionIdx) in pageSetting.tableAction"
              :key="permissionIdx"
              type="text"
              :icon="permission.icon"
              @click="tableAction(permission.operation, slotProps)"
            >{{ permission.buttonText }}</el-button>
          </div>
          <el-dropdown v-else>
            <div>
              <template v-for="(permission, permissionIdx) in pageSetting.tableAction">
                <el-button
                  v-if="permissionIdx < 3"
                  :key="permissionIdx"
                  type="text"
                  :icon="permission.icon"
                  @click="tableAction(permission.operation, slotProps)"
                >{{ permission.buttonText }}</el-button>
              </template>
            </div>
            <el-dropdown-menu slot="dropdown" v-if="pageSetting.tableAction.length > 3">
              <el-dropdown-item v-for="(permission, permissionIdx) in pageSetting.tableAction" :key="permission.operation">
                <el-button
                  v-if="permissionIdx > 2"
                  type="text"
                  :icon="permission.icon"
                  @click="tableAction(permission.operation, slotProps)"
                >{{ permission.buttonText }}</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
        <template #username="slotProps">
          <div style="color: red">{{ slotProps.scope.row.username }}</div>
        </template>
      </flm-table>
    </div>
    <!-- 批量操作 -->
    <el-dropdown
      class="page-batch"
      ref="pageBatch"
      placement="top-start"
      @command="batchActionClick"
    >
      <el-button type="primary" plain size="medium">
        批量操作<i class="el-icon-arrow-up el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in pageSetting.batchAction"
          :key="item.operation"
          :command="item.operation"
        >{{ item.buttonText }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 分页器 -->
    <flm-pagination
      class="page-pagination"
      :config="pageSetting.pagination"
      @paginationSizeChange="paginationSizeChange"
      @paginationCurrentChange="paginationCurrentChange"
    />
    <!-- 新增弹窗 -->
    <flm-dialog
      :dialogSetting="pageSetting.dialogAdd.dialogSetting"
      :formSetting="pageSetting.dialogAdd.formSetting"
      @dialogAction="dialogAddAction"
    />
    <!-- 编辑弹窗 -->
    <flm-dialog
      :dialogSetting="pageSetting.dialogEdit.dialogSetting"
      :formSetting="pageSetting.dialogEdit.formSetting"
      @dialogAction="dialogEditAction"
    />
    <!-- 查看弹窗 -->
    <flm-dialog
      :dialogSetting="pageSetting.dialogRead.dialogSetting"
      :formSetting="pageSetting.dialogRead.formSetting"
      @dialogAction="dialogEditAction"
    />
  </div>
</template>

<script>
import { pageSearch, singleAdd, singleDelete, singleUpdate, batchDelete } from '@/api/system.js'
// import { flmForm, flmButton, flmTable, flmDialog, flmPagination } from '../index.js'
import flmTable from '../flmTable/flmTable.vue'  // 表格
import flmForm from '../flmFormYJ/flmForm.vue'  // 表单
import flmButton from '../flmButton/flmButton.vue'  // 按钮
import flmPagination from '../flmPagination/flmPagination.vue'  // 分页
import flmDialog from '../flmDialog/flmDialog.vue'  // 对话框

import { callPost } from '@/api/system'
import { nextTick } from 'process'
export default {
  name: 'flmPage',
  components: {
    flmForm,
    flmButton,
    flmTable,
    flmDialog,
    flmPagination
  },
  data() {
    return {
      // 页面设置及数据
      pageSetting: {
        table: {
          data: [],
          config: {
            height: "800",
            maxHeight: "",
            stripe: true,
            border: null,
            size: null,
            fit: true,
            showHeader: true,
            highlightCurrentRow: null,
            currentRowKey: null,
            rowClassName: null,
            rowStyle: null,
            cellClassName: null,
            cellStyle: null,
            headerRowClassName: null,
            headerRowStyle: null,
            headerCellClassName: null,
            headerCellStyle: null,
            rowKey: null,
            emptyText: null,
            defaultExpandAll: null,
            expandRowKeys: null,
            defaultSort: {},  // 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序
            tooltipEffect: null,
            showSummary: null,
            sumText: null,
            summaryMethod: null,
            spanMethod: null,
            selectOnIndeterminate: null,
            indent: null,
            lazy: null,
            load: null,
            treeProps: { hasChildren: "hasChildren", children: "children" }
          },
          customConfig: {
            isSlot: false,
            children: []
          }
        },
        tableAction: [],
        dialogAdd: {
          dialogSetting: {
            config: {
              title: "新增用户111",
              width: "50%",
              fullscreen: false,
              top: "15vh",
              modal: true,
              modalAppendToBody: true,
              appendToBody: false,
              lockScroll: true,
              customClass: "",
              closeOnClickModal: true,
              closeOnPressEscape: true,
              showClose: true,
              beforeClose: null,
              center: false,
              destroyOnClose: false
            },
            customConfig: {}
          },
          formSetting: {
            config: {
              rules: {},
              inline: false,
              labelPosition: "right",
              labelWidth: null,
              labelSuffix: "",
              hideRequiredAsterisk: false,
              showMessage: true,
              inlineMessage: false,
              statusIcon: false,
              validateOnRuleChange: true,
              size: null,
              disabled: false
            },
            customConfig: {
              items: [],
              buttons: []
            }
          }
        },
        dialogEdit: {
          dialogSetting: {
            config: {
              title: "编辑用户",
              width: "50%",
              fullscreen: false,
              top: "15vh",
              modal: true,
              modalAppendToBody: true,
              appendToBody: false,
              lockScroll: true,
              customClass: "",
              closeOnClickModal: true,
              closeOnPressEscape: true,
              showClose: true,
              beforeClose: null,
              center: false,
              destroyOnClose: false
            },
            customConfig: {}
          },
          formSetting: {
            config: {
              rules: {},
              inline: false,
              labelPosition: "right",
              labelWidth: null,
              labelSuffix: "",
              hideRequiredAsterisk: false,
              showMessage: true,
              inlineMessage: false,
              statusIcon: false,
              validateOnRuleChange: true,
              size: null,
              disabled: false
            },
            customConfig: {
              items: [],
              buttons: []
            }
          }
        },
        dialogRead: {
          dialogSetting: {
            config: {
              title: "用户详情",
              width: "50%",
              fullscreen: false,
              top: "15vh",
              modal: true,
              modalAppendToBody: true,
              appendToBody: false,
              lockScroll: true,
              customClass: "",
              closeOnClickModal: true,
              closeOnPressEscape: true,
              showClose: true,
              beforeClose: null,
              center: false,
              destroyOnClose: false
            },
            customConfig: {}
          },
          formSetting: {
            config: {
              rules: {},
              inline: false,
              labelPosition: "right",
              labelWidth: null,
              labelSuffix: "",
              hideRequiredAsterisk: false,
              showMessage: true,
              inlineMessage: false,
              statusIcon: false,
              validateOnRuleChange: true,
              size: null,
              disabled: false
            },
            customConfig: {
              items: [],
              buttons: []
            }
          }
        },
        query: {
          config: {
            rules: {},
            inline: true,
            labelPosition: "right",
            labelWidth: null,
            labelSuffix: "",
            hideRequiredAsterisk: false,
            showMessage: true,
            inlineMessage: false,
            statusIcon: false,
            validateOnRuleChange: true,
            size: null,
            disabled: false
          },
          customConfig: {
            items: [],
            buttons: []
          }
        },
        action: [],
        batchAction: [],
        pagination: {
          small: false,
          background: false,
          pageSize: 10,
          total: null,
          pageCount: null,
          pagerCount: 7,
          currentPage: 1,
          layout: "prev, pager, next, jumper, ->, total",
          pageSizes: [10, 20, 30, 40, 50, 100],
          popperClass: null,
          prevText: null,
          nextText: null,
          disabled: false,
          hideOnSinglePage: null
        }
      },
      selectedRow: [],  // 选中行
      pageAction: null, // 页面操作（新增/编辑）类型，可选值['add','edit']
    }
  },
  computed: {
    // 请求表名（过滤下划线）
    requestTableName() {
      return this.$route.meta ? this.$route.meta.table_name.replace(/_/g, '') : ''
    },
    // 主体高度
    mainHeight() {
      nextTick(() => {
        let pageHeight = this.$refs.flmPage.$el.offsetHeight,
          headerHeight = this.$refs.queryForm.$el.offsetHeight,
          footerHeight = this.$refs.pageBatch.$el.offsetHeight,
          paddingSpace = 40
        console.log(pageHeight, headerHeight, footerHeight, paddingSpace)
        return `calc(100% - 120px)`
      })
    },
  },
  created() {
    this.getPageSetting()
  },
  methods: {
    /** @数据获取 */
    // 获取页面数据
    getPageData(queryData = {}) {
      const { currentPage, pageSize } = this.pageSetting.pagination
      pageSearch({
        tableName: this.requestTableName,
        data: {
          page_no: currentPage,
          page_size: pageSize,
          conditions: queryData
        }
      })
        .then(({ items, total_results }) => {
          this.pageSetting.table.data = items
          this.pageSetting.pagination.total = total_results
        })
    },
    // 获取页面配置
    getPageSetting() {
      // callPost({ tableName:'FlamePageConfig', data:{ menu_flame_id: this.$route.query.menuId }}, 'getuserpageconfigbymenuid')
      callPost({ tableName:'FlamePageConfig', data:{ menu_flame_id: this.$route.meta ? this.$route.meta.flame_id : '' }}, 'getuserpageconfigbymenuid')
        .then(({ item }) =>{
          let { query, dialogAdd, dialogEdit, dialogRead, table, action, tableAction, batchAction, pagination } = item
          // 动态高度（待优化）
          // table.config.height = this.mainHeight
          // table.config.maxHeight = this.mainHeight
          // console.log('高度', table.config.height, table.config.maxHeight)
          // 当有表格操作权限，插入操作列
          if (tableAction.length) table.customConfig.children.push({
            config: {
              align: "left",
              className: null,
              columnKey: null,
              filterMethod: null,
              filterMultiple: null,
              filterPlacement: null,
              filteredValue: null,
              filters: null,
              fixed: null,
              formatter: null,
              headerAlign: null,
              index: null,
              label: "操作",
              labelClassName: null,
              minWidth: null,
              prop: "tableAction",
              renderHeader: null,
              reserveSelection: false,
              resizable: true,
              selectable: null,
              showOverflowTooltip: false,
              sortBy: null,
              sortMethod: null,
              sortOrders: null,
              sortable: false,
              type: null,
              width: null,
            },
            customConfig: { isSlot: true }
          })
          this.pageSetting = {
            query,
            dialogAdd,
            dialogEdit,
            dialogRead,
            table,
            tableAction,
            action,
            batchAction,
            pagination,
          }
          this.getPageData()
          this.nextTick(() => this.$refs.pageTable.refs.flmTable.doLayout())
        })
    },

    /** @搜索查询 */
    // 查询操作
    queryAction({ action, value }) {
      const queryAction = { formSubmit: 'pageQuery', formReset: 'queryReset' }
      if (Object.keys(queryAction).includes(action)) {
        this[queryAction[action]](value)
      } else {
        this.$emit(action, value)
      }
    },
    // 搜索
    pageQuery(queryData) {
      this.pageSetting.pagination.currentPage = 1
      this.getPageData(queryData)
    },
    // 重置搜索栏
    queryReset() {
      Object
        .keys(this.pageSetting.query.data)
        .forEach(key => this.pageSetting.query.data[key] = null)
      this.pageQuery()
    },

    /** @操作栏 */
    // 操作栏点击
    actionClick(operation) {
      const actionList = ['pageAdd']
      if (actionList.includes(operation)) this[operation]()
      else this.$emit(operation)
    },
    // 打开新增弹窗
    pageAdd() {
      this.pageSetting.dialogAdd.dialogSetting.config.visible = true
    },

    /** @表格操作 */
    // 表格操作
    tableAction(operation, event) {
      const defaultFunc = ['tableRead', 'tableEdit', 'tableDelete']
      if (defaultFunc.includes(operation)) this[operation](event)
      else this.$emit(operation, event)
    },
    // 打开查看弹窗
    tableRead({ scope }) {
      this.pageSetting.dialogRead.formSetting.data = scope.row
      this.pageSetting.dialogRead.dialogSetting.config.visible = true
    },
    // 打开修改弹窗
    tableEdit({ scope }) {
      console.log('表格修改', scope.row)
      this.pageSetting.dialogEdit.formSetting.data = scope.row
      this.pageSetting.dialogEdit.dialogSetting.config.visible = true
    },
    // 表格删除
    tableDelete({ scope }) {
      this.$confirm(`此操作将永久删除该数据, 是否继续?`, `提示`, {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
        .then(() => {
          singleDelete({
            tableName: this.requestTableName,
            data:{ key: scope.row.flame_id }
          })
            .then(() => {
              this.$message.success('删除成功')
              this.getPageData()
            })
        })
        .catch(() => this.$message.info('取消删除'))
    },


    /** @批量操作 */
    // 点击批量处理方法
    batchActionClick(event) {
      if (this.selectedRow.length) {
        this[event](this.selectedRow)
        console.log(`批量处理方法：${event}`, this.selectedRow)
      } else {
        this.$message.warning('未选择任何数据')
      }
    },
    // 批量删除
    pageBatchDelete(event) {
      batchDelete({
        tableName: this.requestTableName,
        data: {
          data: { flame_id: event.map(({ flame_id }) => flame_id) }
        }
      })
        .then(() => {
          this.$message.success('批量删除成功')
          this.pageQuery()
        })
    },

    /** @分页操作 */
    // 分页容量修改
    paginationSizeChange(event) {
      this.pageSetting.pagination.pageSize = event
      this.getPageData()
    },
    // 分页页码修改
    paginationCurrentChange(event) {
      this.pageSetting.pagination.currentPage = event
      this.getPageData()
    },

    /** @新增弹窗 */
    dialogAddAction({ action, value }) {
      const addAction = { formSubmit: 'addItem', formCancel: 'addCancel', formReset: 'addReset' }
      if (Object.keys(addAction).includes(action)) {
        this[addAction[action]](value)
      } else {
        this.$emit(action, value)
      }
    },
    // 新增一项
    addItem(addData) {
      console.log('新增数据', addData)
      singleAdd({
        tableName: this.requestTableName,
        data: addData
      })
        .then(res => {
          console.log('新增成功', res)
          this.paginationCurrentChange(1)
          this.addCancel()
        })

    },
    // 取消新增
    addCancel() {
      this.pageSetting.dialogAdd.dialogSetting.config.visible = false
    },

    /** @编辑弹窗 */
    dialogEditAction({ action, value }) {
      const editAction = { formSubmit: 'pageEdit', formCancel: 'editCancel', formReset: 'editReset' }
      if (Object.keys(editAction).includes(action)) {
        this[editAction[action]](value)
      } else {
        this.$emit(action, value)
      }
    },
    // 编辑一项
    pageEdit({ flame_id: key, ...data }) {
      singleUpdate({
        tableName: this.requestTableName,
        data: { key, data }
      })
        .then(() => this.editCancel())
    },
    // 取消新增
    editCancel() {
      this.pageSetting.dialogEdit.dialogSetting.config.visible = false
    },

    /** @表格默认操作 */
    select() {},
    selectAll() {},
    selectionChange(event) {
      this.selectedRow = event
    },
    cellMouseEnter() {},
    cellMouseLeave() {},
    cellClick() {},
    cellDblclick() {},
    rowClick() {},
    rowContextmenu() {},
    rowDblclick() {},
    headerClick() {},
    headerContextmenu() {},
    sortChange() {},
    filterChange() {},
    currentChange() {},
    headerDragend() {},
    expandChange() {},
  }
}
</script>

<style lang="scss">
.page-query .el-form-item {
  margin-bottom: 0;
}
</style>

<style lang="scss" scoped>
.flm-page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px calc(100% - 120px) 60px;
  width: 100%;
  height: 100%;
  background-color: #FFF;
  border-radius: 2px;
  .page-query,
  .page-action,
  .page-table,
  .page-batch,
  .page-pagination {
    padding: 12px;
  }
  .page-query,
  .page-action,
  .page-batch,
  .page-pagination {
    display: flex;
    align-items: center;
  }
  .page-query {
    grid-column-start: span 10;
  }
  .page-action {
    grid-column-start: span 2;
  }
  .page-table {
    grid-column-start: span 12;
  }
  .page-batch,
  .page-pagination {
    grid-column-start: span 6;
  }
  .page-action,
  .page-pagination {
    justify-content: flex-end;
  }
}
</style>
