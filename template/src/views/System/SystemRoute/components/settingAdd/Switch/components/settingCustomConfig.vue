<template>
  <div class="setting-custom-config">
    <el-divider content-position="left">自定义配置</el-divider>
    <div class="config-main">
      <div class="column-tree">
        <el-tree
          :data="tabelCustomConfig.columns"
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
        </div>
      </div>
      <el-form
        class="config-form"
        ref="form"
        :model="columnDetail"
        label-width="200px"
        label-suffix=":"
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
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="fixed" prop="fixed">
              <el-select v-model="columnDetail.fixed" placeholder="请选择固定方向">
                <el-option label="不固定" :value="null"></el-option>
                <el-option label="左侧固定" value="left"></el-option>
                <el-option label="右侧固定" value="right"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="prop" prop="prop">
              <el-select v-model="columnDetail.prop" placeholder="请选择字段名">
                <el-option label="用户名" value="userId"></el-option>
                <el-option label="地址" value="address"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="label" prop="label">
              <el-input v-model="columnDetail.label"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="width" prop="width">
              <el-input type="number" v-model="columnDetail.width"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="min-width" prop="minWidth">
              <el-input type="number" v-model="columnDetail.minWidth"></el-input>
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
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="header-align" prop="headerAlign">
              <el-select v-model="columnDetail.headerAlign" placeholder="请选择表头对齐方式">
                <el-option label="左对齐" value="left"></el-option>
                <el-option label="居中" value="center"></el-option>
                <el-option label="右对齐" value="right"></el-option>
              </el-select>
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
          class="config-form"
          ref="form"
          :model="columnDetail"
          label-width="200px"
          label-suffix=":"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="is-slot" prop="isSlot">
                <el-switch v-model="columnDetail.isSlot"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="resizable" prop="resizable">
                <el-switch v-model="columnDetail.resizable"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="show-overflow-tooltip" prop="showOverflowTooltip">
                <el-switch v-model="columnDetail.showOverflowTooltip"></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="reserve-selection" prop="reserveSelection">
                <el-switch v-model="columnDetail.reserveSelection"></el-switch>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="column-key" prop="columnKey">
                <el-input v-model="columnDetail.columnKey"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="sortable" prop="sortable">
                <el-select v-model="columnDetail.sortable" placeholder="请选择排序方式">
                  <el-option label="不排序" :value="false"></el-option>
                  <el-option label="排序" :value="true"></el-option>
                  <el-option label="远程排序" value="custom"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="class-name" prop="className">
                <el-input v-model="columnDetail.className"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="label-class-name" prop="labelClassName">
                <el-input v-model="columnDetail.labelClassName"></el-input>
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
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="filter-multiple" prop="filterMultiple">
                <el-switch v-model="columnDetail.filterMultiple"></el-switch>
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
export default {
  name: 'settingCustomConfig',
  data() {
    return {
      // 自定义配置数据
      tabelCustomConfig: {
        columns: [
          { id: 1, label: '第1行' },
          { id: 2, label: '第2行' },
          { id: 3, label: '第3行' },
        ]
      },    
      currentId: null,
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
        children: []
      }
    }
  },
  methods: {
    // 增加列
    addColumn() {
      this.tabelCustomConfig.columns.push(_.cloneDeep({
        ...this.columnModel,
        id: this.tabelCustomConfig.columns.length + 1
      }))
    },
    // 移动列
    moveChild(node, data, direction) {
      console.log('移动', node)
      const { parent } = node
      const children = parent.data.children || parent.data,
        currentIndex = children.findIndex(({ id }) => id === data.id)
      if (direction && currentIndex === 0) {
        this.$message.warning('已经是第一个了')
      } else if (!direction && currentIndex === children.length - 1) {
        this.$message.warning('已经是最后一个了')
      } else {
        // children.splice(currentIndex, 1)
        const targetIndex = direction ? currentIndex - 1 : currentIndex + 1
        children.splice(currentIndex, 1)
        children.splice(targetIndex, 0, data)
        console.log('要修改的', targetIndex, children)
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
    changeColunmDetail(event) {
      const changeData = () => {
        this.columnDetail = _.cloneDeep(event)
        this.backupColumnDetail = _.cloneDeep(event)
        this.currentId = event.id
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
    // 保存列配置
    saveColumnSetting() {
      function duplicate({ item, list, callback }) {
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
        list: this.tabelCustomConfig.columns,
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

<style>
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