<template>
  <div>
    <flm-page
      tableName="sys_flame_user"
      @setRouterAccess="openRouterAccess"
      @setPageAccess="openPageAccess"
    >
    </flm-page>
    <el-dialog
      title="菜单设置"
      :visible.sync="showRouterAccess"
      width="30%"
      :before-close="closeRouterAccess">
      <el-tree
        ref="routerTree"
        :data="routes"
        :props="{ children: 'children', label: 'menu_name' }"
        node-key="flame_id"
        :expand-on-click-node="false"
        show-checkbox
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeRouterAccess">取 消</el-button>
        <el-button type="primary" @click="submitRouterAccess">保存菜单权限</el-button>
      </span>
    </el-dialog>
     <el-dialog
      title="查看权限"
      :visible.sync="showPageAccess"
      width="30%"
      :before-close="closePageAccess"
    >
      <el-form
        class="config-form"
        label-width="6em"
        label-suffix=":"
      >
        <el-form-item label="用户菜单">
          <el-cascader
            v-model="currentRoleRoute"
            :options="roleRoutes"
            :show-all-levels="false"
            :props="{
              expandTrigger: 'hover',
              checkStrictly: true,
              value: 'flame_id',
              label: 'menu_name'
            }"
            @change="changeRoleRoute"
          ></el-cascader>
        </el-form-item>
        <template v-if="currentRoleRoute">
          <el-form-item label="操作权限">
            <p>操作栏</p>
            <el-checkbox-group v-show="pageSetting.actionOptions.length" v-model="roleAccess.action" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.actionOptions"
                :label="item.customConfig.operation"
                :key="item.customConfig.opration"
              >{{ item.customConfig.buttonText }}</el-checkbox-button>
            </el-checkbox-group>
            <p>表格操作</p>
            <el-checkbox-group v-show="pageSetting.tableActionOptions.length" v-model="roleAccess.tableAction" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.tableActionOptions"
                :label="item.operation"
                :key="item.operation"
              >{{ item.buttonText }}</el-checkbox-button>
            </el-checkbox-group>
            <p>批量操作</p>
            <el-checkbox-group v-show="pageSetting.batchActionOptions.length" v-model="roleAccess.batchAction" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.batchActionOptions"
                :label="item.operation"
                :key="item.operation"
              >{{ item.buttonText }}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="查看权限">
            <el-tree
              ref="roleReadAccess"
              :data="pageSetting.tableTree"
              node-key="id"
              show-checkbox
            ></el-tree>
          </el-form-item>
          <el-form-item label="表单权限">
            <p>查询字段</p>
            <el-checkbox-group v-show="pageSetting.queryFormItems.length" v-model="roleAccess.queryFormItems" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.queryFormItems"
                :label="item.value"
                :key="item.value"
              >{{ item.label }}</el-checkbox-button>
            </el-checkbox-group>
            <p>新增字段</p>
            <el-checkbox-group v-show="pageSetting.addFormItems.length" v-model="roleAccess.addFormItems" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.addFormItems"
                :label="item.value"
                :key="item.value"
              >{{ item.label }}</el-checkbox-button>
            </el-checkbox-group>
            <p>编辑字段</p>
            <el-checkbox-group v-show="pageSetting.editFormItems.length" v-model="roleAccess.editFormItems" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.editFormItems"
                :label="item.value"
                :key="item.value"
              >{{ item.label }}</el-checkbox-button>
            </el-checkbox-group>
            <p>查看字段</p>
            <el-checkbox-group v-show="pageSetting.readFormItems.length" v-model="roleAccess.readFormItems" size="mini">
              <el-checkbox-button
                v-for="item in pageSetting.readFormItems"
                :label="item.value"
                :key="item.value"
              >{{ item.label }}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </template>
      </el-form>
      <template slot="footer">
        <el-button @click="closePageAccess">取 消</el-button>
        <el-button type="primary" @click="submitPageAccess">确 定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import _ from 'lodash'
import { flmPage } from '@/components'
import { callPost } from '@/api/system.js'
import { nextTick } from 'process'
export default {
  name: 'SystemRole',
  components: { flmPage },
  data() {
    return {
      userId: null,
      menuId: null,
      /** @菜单权限 */
      showRouterAccess: false,
      routes: [],
      /** @查看操作权限 */
      showPageAccess: false,
      currentRoleRoute: null,
      roleRoutes: [],
      roleReadAccess: [],
      roleAccess: {
        table: [],        // 查看权限
        action: [],       // 操作栏
        tableAction: [],  // 表格操作
        batchAction: [],  // 批量操作
        queryFormItems: [],      // 查询项
        addFormItems: [],        // 新增项
        editFormItems: [],       // 修改项
        readFormItems: [],       // 查看项
      },
      pageSetting: {
        tableTree: [],        // 查看权限
        actionOptions: [],       // 操作栏
        tableActionOptions: [],  // 表格操作
        batchActionOptions: [],  // 批量操作
        queryFormItems: [],      // 查询项
        addFormItems: [],        // 新增项
        editFormItems: [],       // 修改项
        readFormItems: [],       // 查看项
      },
      pageSettingBackup: {},
    }
  },
  methods: {
    /** @菜单权限 */
    // 打开菜单权限
    openRouterAccess({ scope }) {
      this.userId = scope.row.flame_id
      callPost({ tableName: 'sysflamemenu', data: { user_id: scope.row.flame_id }}, 'GetUserMenuTree')
        .then(({ item }) => {
          const { select_flame_id_list, tree_node } = item
          this.routes = tree_node
          nextTick(() => this.$refs.routerTree.setCheckedKeys(select_flame_id_list))
          this.showRouterAccess = true
        })
    },
    // 关闭菜单权限
    closeRouterAccess() {
      this.showRouterAccess = false
    },
    // 保存菜单权限
    submitRouterAccess() {
      const submitData = {
        tableName: 'SysFlameUserShipMenu',
        data: {
          user_id: this.userId,
          menus: this.$refs.routerTree
            .getCheckedNodes(false, true)
            .map(({ flame_id }) => flame_id)
        }
      }
      callPost(submitData, 'AddAllMenu')
        .then(() => {
          this.closeRouterAccess()
          this.$message.success('保存成功')
        })
    },
    /** @页面权限 */
    // 设置查看操作权限
    openPageAccess({ scope }) {
      this.userId = scope.row.flame_id
      callPost({ tableName: 'sysflamemenu', data: { user_id: scope.row.flame_id }}, 'GetUserCheckMenuTree')
        .then(({ item }) => {
          this.roleRoutes = item.root_node
          this.showPageAccess = true
        })
    },
    // 关闭查看操作权限
    closePageAccess() {
      this.currentRoleRoute = null
      this.showPageAccess = false
    },
    // 树结构转配置
    treeToChildren(list) {
      return list.map(({
        isSlot,
        children,
        subTableName,
        ...config
      }) => ({
        config,
        customConfig: {
          isSlot,
          subTableName,
          children: children.length ? this.treeToChildren(children) : []
        },
      }))
    },
    // 配置转树结构
    childrenToTree(list) {
      return list.map(({ config, customConfig }) => ({
        ...config,
        ...customConfig,
        children: customConfig.children.length ? this.childrenToTree(customConfig.children) : []
      }))
    },
    // 修改用户路由
    changeRoleRoute(event) {
      this.menuId = event[event.length - 1]
      const submitData = {
        tableName: 'flamepageconfig',
        data: { menu_flame_id: this.menuId, user_flame_id: this.userId }
      }
      callPost(submitData, 'GetPageConfigByUserAndMenuid')
        .then(({ item }) => {
          const { page_config_item: pageSetting, role_config_item: roleSetting } = item,
            {
              table: roleTable,
              action: actionValue,
              tableAction: tableActionValue,
              batchAction: batchActionValue,
              query: roleQuery,
              dialogAdd: roleDialogAdd,
              dialogEdit: roleDialogEdit,
              dialogRead: roleDialogRead,
            } = roleSetting,
            {
              table: pageTable,
              action: actionOptions,
              tableAction: tableActionOptions,
              batchAction: batchActionOptions,
              query: pageQuery,
              dialogAdd: pageDialogAdd,
              dialogEdit: pageDialogEdit,
              dialogRead: pageDialogRead,
            } = pageSetting
          this.pageSettingBackup = pageSetting
          this.pageSetting = {
            actionOptions,
            tableActionOptions,
            batchActionOptions,
            tableTree: this.childrenToTree(pageTable.customConfig.children),
            queryFormItems: pageQuery.customConfig.items.map(({ config }) => ({ label: config.label || config.prop, value: config.prop })),
            addFormItems: pageDialogAdd.formSetting.customConfig.items.map(({ config }) => ({ label: config.label || config.prop, value: config.prop })),
            editFormItems: pageDialogEdit.formSetting.customConfig.items.map(({ config }) => ({ label: config.label || config.prop, value: config.prop })),
            readFormItems: pageDialogRead.formSetting.customConfig.items.map(({ config }) => ({ label: config.label || config.prop, value: config.prop })),
          }
          this.roleAccess = {
            action: actionValue.map(({ customConfig }) => customConfig.operation),
            tableAction: tableActionValue.map(({ operation }) => operation),
            batchAction: batchActionValue.map(({ operation }) => operation),
            queryFormItems: roleQuery.customConfig.items.map(({ config }) => config.prop),
            addFormItems: roleDialogAdd.formSetting.customConfig.items.map(({ config }) => config.prop),
            editFormItems: roleDialogEdit.formSetting.customConfig.items.map(({ config }) => config.prop),
            readFormItems: roleDialogRead.formSetting.customConfig.items.map(({ config }) => config.prop),
          }
          nextTick(() => this.$refs.roleReadAccess.setCheckedNodes(this.childrenToTree(roleTable?.customConfig?.children ?? [])))
        })
    },
    // 获取勾选树（包含半勾）
    getCheckTree(checkedList, tree) {
      tree = tree.filter(({ id }) => checkedList.includes(id))
      tree.forEach(item => item.children?.length && (item.children = this.getCheckTree(checkedList, item.children)))
      return tree
    },
    // 提交查看权限
    submitPageAccess() {
      const checkedKey = this.$refs.roleReadAccess.getCheckedNodes(false, true).map(({ id }) => id),
        checkedTree = this.getCheckTree(checkedKey, _.cloneDeep(this.pageSetting.tableTree)),
        checkedChildren = this.treeToChildren(checkedTree)
      this.pageSettingBackup.table.customConfig.children = checkedChildren
      this.pageSettingBackup.action = this.pageSettingBackup.action.filter(item => this.roleAccess.action.includes(item.customConfig.operation))
      this.pageSettingBackup.tableAction = this.pageSettingBackup.tableAction.filter(item => this.roleAccess.tableAction.includes(item.operation))
      this.pageSettingBackup.batchAction = this.pageSettingBackup.batchAction.filter(item => this.roleAccess.batchAction.includes(item.operation))
      this.pageSettingBackup.query.customConfig.items = this.pageSettingBackup.query.customConfig.items
        .filter(item => this.roleAccess.queryFormItems.includes(item.config.prop))
      this.pageSettingBackup.dialogAdd.formSetting.customConfig.items = this.pageSettingBackup.dialogAdd.formSetting.customConfig.items
        .filter(item => this.roleAccess.addFormItems.includes(item.config.prop))
      this.pageSettingBackup.dialogEdit.formSetting.customConfig.items = this.pageSettingBackup.dialogEdit.formSetting.customConfig.items
        .filter(item => this.roleAccess.editFormItems.includes(item.config.prop))
      this.pageSettingBackup.dialogRead.formSetting.customConfig.items = this.pageSettingBackup.dialogRead.formSetting.customConfig.items
        .filter(item => this.roleAccess.readFormItems.includes(item.config.prop))
      const submitData = {
        tableName: 'flamepageconfig',
        data: {
          menu_flame_id: this.menuId,
          user_flame_id: this.userId,
          data: this.pageSettingBackup
        }
      }
      callPost(submitData, 'AddUserPageConfig')
        .then(() => this.showPageAccess = false)
    },
  }
}
</script>
