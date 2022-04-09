<template>
  <!--  20211108 table的height属性增加空处理，为空时赋值'auto'，避免组件反复赋值后最后一次赋值为空引起的报错 -->
  <!--  20211108 table的maxHeight属性增加空处理，为空时赋值'auto'，避免组件反复赋值后最后一次赋值为空引起的报错 -->
  <el-table
    ref="flmTable"
    style="width: 800px"
    :data="data"
    :height="config.height || 'auto'"
    :max-height="config.maxHeight || 'auto'"
    :stripe="config.stripe"
    :border="config.border"
    :size="config.size"
    :fit="config.fit"
    :show-header="config.showHeader"
    :highlight-current-row="config.highlightCurrentRow"
    :current-row-key="config.currentRowKey"
    :row-class-name="config.rowClassName"
    :row-style="config.rowStyle"
    :cell-class-name="config.cellClassName"
    :cell-style="config.cellStyle"
    :header-row-class-name="config.headerRowClassName"
    :header-row-style="config.headerRowStyle"
    :header-cell-class-name="config.headerCellClassName"
    :header-cell-style="config.headerCellStyle"
    :row-key="config.rowKey"
    :empty-text="config.emptyText"
    :default-expand-all="config.defaultExpandAll"
    :expandRowKeys="config.expandRowKeys"
    :default-sort="config.defaultSort"
    :tooltipEffect="config.tooltipEffect"
    :showSummary="config.showSummary"
    :sumText="config.sumText"
    :summaryMethod="config.summaryMethod"
    :spanMethod="config.spanMethod"
    :selectOnIndeterminate="config.selectOnIndeterminate"
    :indent="config.indent"
    :lazy="config.lazy"
    :load="config.load"
    :treeProps="config.treeProps"
    @select="select"
    @select-all="selectAll"
    @selection-change="selectionChange"
    @cell-mouse-enter="cellMouseEnter"
    @cell-mouse-leave="cellMouseLeave"
    @cell-click="cellClick"
    @cell-dblclick="cellDblclick"
    @row-click="rowClick"
    @row-contextmenu="rowContextmenu"
    @row-dblclick="rowDblclick"
    @header-click="headerClick"
    @header-contextmenu="headerContextmenu"
    @sort-change="sortChange"
    @filter-change="filterChange"
    @current-change="currentChange"
    @header-dragend="headerDragend"
    @expand-change="expandChange"
  >
    <flm-column
      v-for="(column, index) in customConfig.children"
      :key="column.config.prop ? column.config.prop : index"
      :config="column.config"
      :customConfig="column.customConfig"
    >
      <!-- 插槽列 -->
      <template v-if="column.customConfig.isSlot" #[column.config.prop]="scope">
        <slot :name="column.config.prop" :scope="scope.data"></slot>
      </template>
      <!-- 子插槽 -->
      <template v-for="slotItem in slotList(column.children)" #[slotItem.config.prop]="scope">
        <slot :name="slotItem.config.prop" :scope="scope.data"></slot>
      </template>
    </flm-column>
  </el-table>
</template>

<script>
import flmColumn from './flmColumn.vue'
export default {
  name: 'flmTable',
  components: {flmColumn},
  props: {
    // 数据
    data: {
      type: Array,
      required: true,
      default: []
    },
    // 表格配置
    config: {
      type: Object,
      default: function() {
        return {
          height: 'auto',
          maxHeight: 'auto',
          stripe: false,
          border: false,
          size: 'medium',
          fit: true,
          showHeader: true,
          highlightCurrentRow: false,
          currentRowKey: 0,
          rowClassName: null,
          rowStyle: null,
          cellClassName: null,
          cellStyle: null,
          headerRowClassName: null,
          headerRowStyle: null,
          headerCellClassName: null,
          headerCellStyle: null,
          rowKey: '',
          emptyText: '暂无数据',
          defaultExpandAll: false,
          expandRowKeys: null,
          tooltipEffect: '',
          showSummary: false,
          sumText: '合计',
          summaryMethod: null,
          spanMethod: null,
          selectOnIndeterminate: null,
          indent: 16,
          lazy: false,
          load: undefined,
          treeProps: {},
        }
      }
    },
    // 自定义配置
    customConfig: {
      type: Object,
      default() {
        return {
          isSlot: false,
          children: [],  // 列
        }
      }
    },
  },
  computed: {
    // 插槽列表
    slotList() {
      return function(event) {
        if (event && event.length) {
          return event.filter(item => item.customConfig.isSlot)
        }
      }
    }
  },
  methods: {
    select() {},
    selectAll() {},
    selectionChange(event) {
      this.$emit('selectionChange', event)
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
