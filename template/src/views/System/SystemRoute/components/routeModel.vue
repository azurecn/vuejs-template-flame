<template>
  <el-aside class="route-model">
    <el-container>
      <el-header class="model-title" style="height: 40px">
        <div>模拟导航</div>
        <el-button type="text" @click="openRouterDetail(false)">新增路由</el-button>
      </el-header>
      <el-main class="model-main">
        <el-tree
          :data="routes"
          node-key="flame_id"
          :default-expanded-keys="['0']"
          :expand-on-click-node="false"
        >
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ data.menu_name }}</span>
            <span v-if="data.flame_id !== '0'">
              <el-button
                v-if="data.router_type === 'pageRoute'"
                type="text"
                size="small"
                @click="settingRoute(data, node)"
              >配置</el-button>
              <el-button
                type="text"
                size="small"
                @click="openRouterDetail(true, data)"
              >修改</el-button>
              <el-button
                type="text"
                size="small"
                @click="deleteRouter(data.flame_id, node)"
              >删除</el-button>
            </span>
          </span>
        </el-tree>
      </el-main>
    </el-container>
    <el-dialog
      :visible.sync="showRouterDetail"
      title="路由配置"
      width="600px"
      :before-close="closeRouterDetail"
    >
      <el-form
        class="setting-form"
        ref="routerForm"
        :model="routerDetail"
        :rules="routerRules"
        label-width="150px"
        label-suffix=":"
      >
        <el-form-item label="路由类型" prop="router_type">
          <flmSelect
            v-model="routerDetail.router_type"
            :config="{ value: 'config_code', label: 'config_name' }"
            :customConfig="{ options: routerTypes }"
          />
        </el-form-item>
        <el-form-item label="父级节点" prop="p_id">
          <el-cascader
            v-model="routerDetail.p_id"
            :options="routes"
            :props="{
              expandTrigger: 'hover',
              checkStrictly: true,
              label: 'menu_name',
              value: 'flame_id'
            }"
            :show-all-levels="false"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="路由名称" prop="menu_name">
          <flmInput v-model="routerDetail.menu_name" />
        </el-form-item>
        <el-form-item label="路由图标" prop="icon_image">
          <iconSelect v-model="routerDetail.icon_image" />
        </el-form-item>
        <el-form-item
          v-show="routerDetail.router_type === 'pageRoute'"
          label="关联表名"
          prop="table_name"
          :required="routerDetail.router_type === 'pageRoute'"
        >
          <flmSelect v-model="routerDetail.table_name" :config="{ filterable: true }" :customConfig="{ options: tabelNameList }" />
        </el-form-item>
        <el-form-item
          v-show="routerDetail.router_type !== 'noPage'"
          :label="routerDetail.router_type === 'link' ? '外链地址' : '路由路径'"
          prop="router"
          :required="routerDetail.router_type !== 'noPage'"
        >
          <flmInput v-model="routerDetail.router" />
        </el-form-item>
        <el-form-item>
          <el-button @click="closeRouterDetail">取 消</el-button>
          <el-button @click="submitRouterDetail">保 存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-aside>
</template>

<script>
import _ from 'loadsh'
import {
  flmTooltip,
  flmInput,
  flmSelect,
  flmSwitch,
  iconSelect
} from "@/components"
import { singleDelete, singleUpdate, allSearch, callPost } from '@/api/system.js'
export default {
  name: 'routeModel',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch,
    iconSelect
  },
  data() {
    return {
      // 路由
      showRouterDetail: false,   // 显示路由详情
      routes: [],
      isEdit: true,              // 弹窗操作 T-新增 F-修改
      // 路由详情
      routerDetail: {
        menu_name: '',           // 标题
        icon_image: '',          // 图标
        p_id: '',                // 父节点
        router_type: 'noPage',   // 路由类型
        router: '',              // 路由
        table_name: '',          // 表名
      },
      // 路由规则
      routerRules: {
        menu_name: [{ required: true, message: '请输入路由标题' }],
        p_id: [{ required: true, message: '请选择父节点' }],
        router_type: [{ required: true, message: '请选择路由类型' }],
        router: [{
          validator: (rule, value, callback) => {
            const linkRule = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-\(\)]*[\w@?^=%&/~+#-\(\)])?$/,
              pathRule = /^(\/{1})[a-z]+(-{1}[a-z]+)*/
            if (this.routerDetail.router_type === 'noPage') {
              return callback()
            } else {
              console.log(this.routerDetail.router_type, value)
              if (!value) {
                return callback(new Error('路由不能为空'))
              } else if (this.routerDetail.router_type === 'link' && !linkRule.test(value)) {
                return callback(new Error('请输入正确的链接格式'))
              } else if (this.routerDetail.router_type === 'pageRoute' && !pathRule.test(value)) {
                return callback(new Error('路径需以 / 开头，以小写字母组成，可使用 - 分隔'))
              } else {
                return callback()
              }
            }
          }
        }],
        table_name: [{
          validator: (rule, value, callback) => {
            return this.routerDetail.router_type === 'pageRoute' && !value
              ? callback(new Error('请选择关联表名'))
              : callback()
          }
        }]
      },
      routerTypes: [],  // 路由类型
      tabelNameList: [],  // 表名
    }
  },
  computed: {
    // 父节点列表
    parentsId() {
      const findId = (id, list, idList, callback) => {
        list.forEach(({ flame_id, children }) => {
          if (flame_id == id)
            callback([...idList, flame_id])
          else if (children && children.length) 
            findId(id, children, [...idList, flame_id], callback)
        })
      }
      return (pid) => {
        let returnList = []
        findId(pid, this.routes, [], list => returnList = list)
        return returnList
      }
    }
  },
  created() {
    this.getRouteTypes()
    this.getRouterData()
    this.getTableName()
  },
  methods: {
    // 获取路由数据
    getRouterData() {
      callPost({ tableName: 'sysflamemenu' }, 'getallTree')
        .then(({ items }) => {
          this.routes = [{
            flame_id: '0',
            menu_name: '根路由',
            children: items
          }]
        })
    },
    // 获取路由类型
    getRouteTypes() {
      allSearch({
        tableName: 'sysflameconfig',
        data: {
          ref_level: 0,
          order_by: 'flame_id',
          fields: 'config_name, config_code, flame_id',
          conditions: { config_group_code: 'router_type' }
        }
      })
        .then(({ items }) => this.routerTypes = items.map(({ config_name: label, config_code: value }) => ({ value, label })))
    },
    getTableName() {
      allSearch({
        tableName: 'flametableinfo',
        data: { fields: 'table_description, table_name' }
      })
        .then(({ items }) => {
          this.tabelNameList = items
            .map(({ table_description: label, table_name: value }) => ({ label: `${label} - ${value}`, value }))
      })
    },
    // 配置路由
    settingRoute(event) {
      this.$confirm(`切换路由前请确保配置以保存避免数据丢失`, `提示`, {
        confirmButtonText: `继续`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
        .then(() => {
          localStorage.setItem('settingTableName', event.table_name)  // 缓存
          this.$emit('changeRoute', event)
        })
    },
    // 打开路由详情
    openRouterDetail(isEdit, data) {
      this.isEdit = isEdit
      isEdit && (this.routerDetail = { ...data, p_id: this.parentsId(data.p_id) })
      this.showRouterDetail = true
    },
    // 打开路由详情
    closeRouterDetail() {
      this.routerDetail = {
        menu_name: '',     // 标题
        icon_image: '',    // 图标
        p_id: '',          // 父节点
        router_type: '',   // 路由类型
        router: '',        // 路由
        table_name: '',    // 表名
      }
      this.$refs.routerForm.resetFields()
      this.showRouterDetail = false
    },
    // 提交路由配置
    submitRouterDetail() {
      this.$refs['routerForm'].validate(valid => {
        const { flame_id, p_id, ...params } = this.routerDetail,
          pid = p_id[p_id.length - 1],
          data = this.isEdit
            ? { key: flame_id, data: { ...params, p_id: pid } }
            : { ...params, p_id: pid }
        if (valid) {
          if (this.isEdit) {
            singleUpdate({ tableName: 'sysflamemenu', data })
              .then(() => {
                this.getRouterData()
                this.closeRouterDetail()
              })
          } else {
            callPost({ tableName: 'sysflamemenu', data }, 'addMenu')
              .then(() => {
                this.getRouterData()
                this.closeRouterDetail()
              })
          }
        }
      })
    },
    // 删除路由
    deleteRouter(id, node) {
      this.$confirm(`此操作将删除该路由${node.childNodes.length ? '及子路由' : ''}, 是否继续?`, `提示`, {
        confirmButtonText: `确定`,
        cancelButtonText: `取消`,
        type: 'warning'
      })
        .then(() => {
          singleDelete({
            tableName: 'sysflamemenu',
            data: { key: id }
          })
            .then(() => this.getRouterData())
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import './routerSetting.scss';
.route-model {
  border-right: 1px solid #EFEFEF;
}
.model-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #EFEFEF;
  font-size: 18px;
  text-align: center;
}
.model-main {
  height: 100%;
  padding: 0 10px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.setting-form {
  width: 500px;
}
</style>