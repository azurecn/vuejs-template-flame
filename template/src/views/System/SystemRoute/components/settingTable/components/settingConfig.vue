<template>
  <div>
    <el-divider content-position="left">默认配置</el-divider>
    <el-form
      class="setting-form"
      ref="form"
      :model="tableConfig"
      label-width="150px"
      label-suffix=":"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="size" prop="size">
            <el-select v-model="tableConfig.size" placeholder="请选择表格尺寸">
              <el-option label="默认" value=""></el-option>
              <el-option label="中型" value="medium"></el-option>
              <el-option label="小型" value="small"></el-option>
              <el-option label="迷你" value="mini"></el-option>
            </el-select>
            <flmTooltip content="Table 的尺寸" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="height" prop="height">
            <el-input v-model="tableConfig.height"></el-input>
            <flmTooltip content="Table 的高度，默认为自动高度。" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="max-height" prop="maxHeight">
            <el-input v-model="tableConfig.maxHeight"></el-input>
            <flmTooltip content="Table 的最大高度" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="stripe" prop="stripe">
            <el-switch v-model="tableConfig.stripe"></el-switch>
            <flmTooltip content="是否为斑马纹 table" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="border" prop="border">
            <el-switch v-model="tableConfig.border"></el-switch>
            <flmTooltip content="是否带有纵向边框" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="fit" prop="fit">
            <el-switch v-model="tableConfig.fit"></el-switch>
            <flmTooltip content="列的宽度是否自撑开" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="show-header" prop="showHeader">
            <el-switch v-model="tableConfig.showHeader"></el-switch>
            <flmTooltip content="是否显示表头" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button @click="showConfigDetail = true" type="text">表格高级配置</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="表格高级配置"
      :visible.sync="showConfigDetail"
      width="1100px"
      :before-close="closeConfigDetail"
    >
      <el-form
        class="setting-form"
        ref="form"
        :model="tableConfig"
        label-width="200px"
        label-suffix=":"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="current-row-key" prop="currentRowKey">
              <el-input v-model="tableConfig.currentRowKey"></el-input>
              <flmTooltip content="当前行的 key，只写属性" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="row-key" prop="rowKey">
              <el-input v-model="tableConfig.rowKey"></el-input>
              <flmTooltip content="行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="row-class-name" prop="rowClassName">
              <el-input v-model="tableConfig.rowClassName"></el-input>
              <flmTooltip content="行的 className" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="cell-class-name" prop="cellClassName">
              <el-input v-model="tableConfig.cellClassName"></el-input>
              <flmTooltip content="单元格的 className" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="header-row-class-name" prop="headerRowClassName">
              <el-input v-model="tableConfig.headerRowClassName"></el-input>
              <flmTooltip content="表头行的 className" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="header-cell-class-name" prop="headerCellClassName">
              <el-input v-model="tableConfig.headerCellClassName"></el-input>
              <flmTooltip content="表头单元格的 className" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="empty-text" prop="emptyText">
              <el-input v-model="tableConfig.emptyText"></el-input>
              <flmTooltip content="空数据时显示的文本内容" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="sum-text" prop="sumText">
              <el-input v-model="tableConfig.sumText"></el-input>
              <flmTooltip content="合计行第一列的文本" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="highlight-current-row" prop="highlightCurrentRow">
              <el-switch v-model="tableConfig.highlightCurrentRow"></el-switch>
              <flmTooltip content="是否要高亮当前行" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="default-expand-all" prop="defaultExpandAll">
              <el-switch v-model="tableConfig.defaultExpandAll"></el-switch>
              <flmTooltip content="是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="show-summary" prop="showSummary">
              <el-switch v-model="tableConfig.showSummary"></el-switch>
              <flmTooltip content="是否在表尾显示合计行" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="select-on-indeterminate" prop="selectOnIndeterminate">
              <el-switch v-model="tableConfig.selectOnIndeterminate"></el-switch>
              <flmTooltip content="在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <!-- <el-col :span="12">
            <el-form-item label="default-sort" prop="defaultSort">
              <el-select v-model="tableConfig.defaultSort" placeholder="请选择排序方式">
                <el-option label="升序" value="ascending"></el-option>
                <el-option label="降序" value="descending"></el-option>
              </el-select>
              <flmTooltip content="默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序" />
            </el-form-item>
          </el-col> -->
          <el-col :span="12">
            <el-form-item label="tooltip-effect" prop="tooltipEffect">
              <el-select v-model="tableConfig.tooltipEffect" placeholder="请选择提示风格">
                <el-option label="暗黑" value="dark"></el-option>
                <el-option label="亮白" value="light"></el-option>
              </el-select>
              <flmTooltip content="tooltip effect 属性" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="indent" prop="indent">
              <el-input type="number" v-model="tableConfig.indent"></el-input>
              <flmTooltip content="展示树形数据时，树节点的缩进" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="lazy" prop="lazy">
              <el-switch v-model="tableConfig.lazy"></el-switch>
              <flmTooltip content="是否懒加载子节点数据" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" style="text-align: center;">
        <el-button @click="showConfigDetail = false">取 消</el-button>
        <el-button type="primary" @click="showConfigDetail = false">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  flmTooltip,
  flmInput,
  flmSelect,
  flmSwitch
} from "@/components"
export default {
  name: 'settingConfig',
  components: {
    flmTooltip,
    flmInput,
    flmSelect,
    flmSwitch
  },
  model: {
    prop: 'tableConfig',
    event: 'change'
  },
  props: {
    tableConfig: {
      type: Object,
      default() {
        return {
          height: null,
          maxHeight: null,
          stripe: false,
          border: false,
          size: '',
          fit: true,
          showHeader: true,
          highlightCurrentRow: false,
          currentRowKey: null,
          rowClassName: null,
          // rowStyle: null,  // obj
          cellClassName: null,
          // cellStyle: null,  // obj
          headerRowClassName: null,
          // headerRowStyle: null,
          headerCellClassName: null,
          // headerCellStyle: null,
          rowKey: null,
          emptyText: null,
          defaultExpandAll: false,
          // expandRowKeys: null, // array
          defaultSort: {},  // obj
          tooltipEffect: null,
          showSummary: false,
          sumText: '合计',
          // summaryMethod: null, func
          // spanMethod: null, func
          selectOnIndeterminate: true,
          indent: 16,
          lazy: null,
          // load: null,
          // treeProps: { hasChildren: 'hasChildren', children: 'children' },
        }
      }
    }
  },
  data() {
    return {
      showConfigDetail: false,
    }
  },
  methods: {
    closeConfigDetail() {
      this.showConfigDetail = false
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../routerSetting.scss';
</style>