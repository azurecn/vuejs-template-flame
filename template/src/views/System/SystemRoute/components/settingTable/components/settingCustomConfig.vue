<template>
  <div class="setting-custom-config">
    <el-divider content-position="left">自定义配置</el-divider>
    <div class="config-main">
      <div class="column-tree">
        <el-tree
          ref="columnTree"
          :data="customConfigForm.children"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          @node-click="changeColunmDetail"
        >
          <div class="custom-tree-node" slot-scope="{ node, data }">
            <div>{{ node.label || '未设置' }}</div>
            <div class="node-action">
              <el-button type="text" class="icon" icon="el-icon-top" @click="moveChild(node, data, true)"></el-button>
              <el-button type="text" class="icon" icon="el-icon-bottom" @click="moveChild(node, data)"></el-button>
              <el-button type="text" class="icon" icon="el-icon-plus" @click="addchild(node, data)"></el-button>
              <el-button type="text" class="icon" icon="el-icon-delete" @click="deleteColunm(node, data)"></el-button>
            </div>
          </div>
        </el-tree>
        <div class="tree-action">
          <el-button
            class="column-add"
            size="mini"
            @click="addColumn"
          >增加列</el-button>
          <el-button
            class="column-add"
            size="mini"
            @click="previewColumn"
          >保存表格列</el-button>
        </div>
      </div>
      <el-form
        class="setting-form"
        ref="form"
        :model="columnDetail"
        label-width="150px"
        label-suffix=":"
        :disabled="!currentId"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="type" prop="type">
              <el-select v-model="columnDetail.type" placeholder="请选择列类型">
                <el-option label="默认" :value="null"></el-option>
                <el-option label="可选" value="selection"></el-option>
                <el-option label="序号" value="index"></el-option>
                <el-option label="可展开" value="expand"></el-option>
              </el-select>
              <flmTooltip content="对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="fixed" prop="fixed">
              <el-select v-model="columnDetail.fixed" placeholder="请选择固定方向">
                <el-option label="不固定" :value="null"></el-option>
                <el-option label="左侧固定" value="left"></el-option>
                <el-option label="右侧固定" value="right"></el-option>
              </el-select>
              <flmTooltip content="列是否固定在左侧或者右侧" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="prop" prop="prop">
              <el-select v-model="columnDetail.prop" placeholder="请选择字段名" @change="changeProp">
                <el-option
                  v-for="propOption in propOptions"
                  :key="propOption.value"
                  :label="`${propOption.value} ${propOption.label}`"
                  :value="propOption.value"
                ></el-option>
              </el-select>
              <flmTooltip content="对应列内容的字段名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="label" prop="label">
              <el-input v-model="columnDetail.label"></el-input>
              <flmTooltip content="显示的标题" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="width" prop="width">
              <el-input type="number" v-model="columnDetail.width"></el-input>
              <flmTooltip content="对应列的宽度" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="min-width" prop="minWidth">
              <el-input type="number" v-model="columnDetail.minWidth"></el-input>
              <flmTooltip content="对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="align" prop="align">
              <el-select v-model="columnDetail.align" placeholder="请选择对齐方式">
                <el-option label="左对齐" value="left"></el-option>
                <el-option label="居中" value="center"></el-option>
                <el-option label="右对齐" value="right"></el-option>
              </el-select>
              <flmTooltip content="对齐方式" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="header-align" prop="headerAlign">
              <el-select v-model="columnDetail.headerAlign" placeholder="请选择表头对齐方式">
                <el-option label="默认" :value="null"></el-option>
                <el-option label="左对齐" value="left"></el-option>
                <el-option label="居中" value="center"></el-option>
                <el-option label="右对齐" value="right"></el-option>
              </el-select>
              <flmTooltip content="表头对齐方式，若不设置该项，则使用表格的对齐方式" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-button type="text" @click="showColumnDetail = true">列高级配置</el-button>
          <el-button type="text" @click="saveColumnSetting">保存列配置</el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        title="列高级配置"
        :visible.sync="showColumnDetail"
        width="1100px"
        :before-close="closeColumnDetail"
      >
        <el-form
          class="setting-form"
          ref="form"
          :model="columnDetail"
          label-width="200px"
          label-suffix=":"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="is-slot" prop="isSlot">
                <el-switch v-model="columnDetail.isSlot"></el-switch>
                <flmTooltip content="是否使用插槽模式" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="resizable" prop="resizable">
                <el-switch v-model="columnDetail.resizable"></el-switch>
                <flmTooltip content="对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="show-overflow-tooltip" prop="showOverflowTooltip">
                <el-switch v-model="columnDetail.showOverflowTooltip"></el-switch>
                <flmTooltip content="当内容过长被隐藏时显示 tooltip" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="reserve-selection" prop="reserveSelection">
                <el-switch v-model="columnDetail.reserveSelection"></el-switch>
                <flmTooltip content="仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="column-key" prop="columnKey">
                <el-input v-model="columnDetail.columnKey"></el-input>
                <flmTooltip content="column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="sortable" prop="sortable">
                <el-select v-model="columnDetail.sortable" placeholder="请选择排序方式">
                  <el-option label="不排序" :value="false"></el-option>
                  <el-option label="排序" :value="true"></el-option>
                  <el-option label="远程排序" value="custom"></el-option>
                </el-select>
                <flmTooltip content="对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="class-name" prop="className">
                <el-input v-model="columnDetail.className"></el-input>
                <flmTooltip content="列的 className" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="label-class-name" prop="labelClassName">
                <el-input v-model="columnDetail.labelClassName"></el-input>
                <flmTooltip content="当前列标题的 className" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="filter-placement" prop="filterPlacement">
                <el-select v-model="columnDetail.filterPlacement" placeholder="请选择过滤弹窗定位">
                  <el-option label="上边" value="top"></el-option>
                  <el-option label="上左" value="top-start"></el-option>
                  <el-option label="上右" value="top-end"></el-option>
                  <el-option label="下边" value="bottom"></el-option>
                  <el-option label="下左" value="bottom-start"></el-option>
                  <el-option label="下右" value="bottom-end"></el-option>
                  <el-option label="左边" value="left"></el-option>
                  <el-option label="左上" value="left-start"></el-option>
                  <el-option label="左下" value="left-end"></el-option>
                  <el-option label="右边" value="right"></el-option>
                  <el-option label="右上" value="right-start"></el-option>
                  <el-option label="右下" value="right-end"></el-option>
                </el-select>
                <flmTooltip content="过滤弹出框的定位" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="filter-multiple" prop="filterMultiple">
                <el-switch v-model="columnDetail.filterMultiple"></el-switch>
                <flmTooltip content="数据过滤的选项是否多选" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" style="text-align: center;">
          <el-button @click="showColumnDetail = false">取 消</el-button>
          <el-button type="primary" @click="showColumnDetail = false">保 存</el-button>
        </div>
      </el-dialog>
    </div>
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
import { mapGetters } from 'vuex'
export default {
  name: 'settingCustomConfig',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch
  },
  model: {
    prop: 'tabelCustomConfig',
    event: 'change'
  },
  props: {
    tabelCustomConfig: {
      type: Object,
      default() {
        return {
          children: []
        }
      }
    },   
  },
  data() {
    return {
      // 自定义配置数据
      currentId: null,
      currentNode: {},
      showColumnDetail: false,  // 显示高级配置
      columnDetail: {},         // 列配置
      backupColumnDetail: {},   // 列配置份（比对修改）
      // 新增模板
      columnModel: {
        type: null,
        // index: null,  // 暂时隐藏
        columnKey: null,
        label: null,
        prop: null,
        width: null,
        minWidth: null,
        fixed: null,
        // renderHeader: null,
        sortable: false,
        // sortMethod: null,  // func
        // sortBy: null,  // String/Array/func
        // sortOrders: ['ascending', 'descending', null],  // Array
        resizable: true,
        // formatter: null,  // func
        showOverflowTooltip: false,
        align: 'left',
        headerAlign: null,
        className: null,
        labelClassName: null,
        // selectable: null,  // func
        reserveSelection: false,
        // filters: null,  // Array
        filterPlacement: null,
        filterMultiple: null,
        // filterMethod: null,
        // filteredValue: null,  // Array
        isSlot: false,
        children: [],
        subTableName: ''
      },
      customConfigForm: {
        children: []
      },
      propOptions: [],
    }
  },
  computed: {
    fullPrefix() {
      return (prefix) => {
        if (prefix) {
          let propList = prefix.split('.')
          propList[propList.length - 1] = `ref_${propList[propList.length - 1]}` 
          return `${propList.join('.')}.`
        } else {
          return ''
        }
      }
    }
  },
  watch: {
    'tabelCustomConfig.children'() {
      const duplicate = (list) => {
        return list.map(({ config, customConfig }) => ({
          ...config,
          ...customConfig,
          children: customConfig.children.length ? duplicate(customConfig.children) : []
        }))
      }
      this.customConfigForm.children = duplicate(this.tabelCustomConfig.children)
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
          conditions: { table_name: tableName || localStorage.getItem('settingTableName') }  // 表名要活的
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
    // 预览列配置（转义）
    previewColumn() {
      const duplicate = (list) => {
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
            children: children.length ? duplicate(children) : []
          },
        }))
      }
      this.$emit('change', { children: duplicate(this.customConfigForm.children) })
    },
    // 增加列
    addColumn() {
      this.customConfigForm.children.push(_.cloneDeep({
        ...this.columnModel,
        id: this.customConfigForm.children.length + 1
      }))
    },
    // 移动列
    moveChild(node, data, direction) {
      console.log('移动', node)
      const parent = node.parent
      const children = parent.data.children || parent.data,
        currentIndex = children.findIndex(({ id }) => id === data.id)
      if (direction && currentIndex === 0) {
        this.$message.warning('已经是第一个了')
      } else if (!direction && currentIndex === children.length - 1) {
        this.$message.warning('已经是最后一个了')
      } else {
        const saveData = children[direction ? currentIndex - 1 : currentIndex + 1],
          treeMethod = direction ? 'insertBefore' : 'insertAfter'
        this.$refs.columnTree.remove(data)
        this.$refs.columnTree[treeMethod](data, saveData)
      }
    },
    // 增加子列
    addchild({ id, data }) {
      data.children.push(_.cloneDeep({
        ...this.columnModel,
        id: `${id}-${data.children.length + 1}`
      }))
    },
    // 删除列
    deleteColunm({ parent, childNodes }, data) {
      this.$confirm(`此操作将删除该列${childNodes.length ? '及子列' : ''}, 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          const children = parent.data.children || parent.data,
            index = children.findIndex(({ id }) => id === data.id)
          children.splice(index, 1)
          this.$message.success('删除成功!')
        })
        .catch(() => this.$message.info('已取消删除'))
    },
    // 关闭列详情
    closeColumnDetail() {
      this.showColumnDetail = false
    },
    // 修改当前列
    changeColunmDetail(event, node) {
      console.log('change', event, node)
      const changeData = () => {
        this.columnDetail = _.cloneDeep(event)
        this.backupColumnDetail = _.cloneDeep(event)
        this.currentNode = node
        this.currentId = event.id
        const { subTableName, prop } = node.parent.data
        if (node.level === 1 || subTableName) this.getPropOptions(subTableName, this.fullPrefix(prop))
        else this.propOptions = []
      }
      if (JSON.stringify(this.columnDetail) !== JSON.stringify(this.backupColumnDetail)) {
        this.$confirm(`配置未保存, 是否继续切换?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => changeData())
      } else {
        changeData()
      }
    },
    // 修改字段
    changeProp(event) {
      const _changeProp = (clearChildren) => {
        clearChildren && (this.currentNode.childNodes = [])
        const currentProp = this.propOptions.find(({ value }) => value === event)
        this.columnDetail.label = currentProp.label
        this.columnDetail.subTableName = currentProp.subTableName
      }
      if (this.currentNode.childNodes.length) {
        this.$confirm(`此操作将删除所有子列, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => _changeProp(true))
      } else {
        _changeProp()
      }
    },
    // 保存列配置
    saveColumnSetting() {
      const duplicate = ({ item, list, callback }) => {
        list.forEach(listItem => {
          if (item.id === listItem.id) {
            callback(listItem)
          } else if (listItem.children.length) {
            duplicate({ item, list: listItem.children, callback })
          }
        })
      }
      duplicate({
        item: this.columnDetail,
        list: this.customConfigForm.children,
        callback: (currentItem) => {
          Object
            .entries(this.columnDetail)
            .forEach(([key, value]) => currentItem[key] = value)
          this.backupColumnDetail = _.cloneDeep(this.columnDetail)
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../routerSetting.scss';
.config-main {
  display: flex;
}
.column-tree {
  width: 300px;
  overflow-x: auto;
}
.el-tree-node__content {
  height: 40px;
}
.custom-tree-node {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* font-size: 14px; */
  padding-right: 8px;
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