<template>
<!-- 20211108 删除 :index="config.index" 属性，避免报错 -->
<!-- 值为空时候 Invalid prop: type check failed for prop "index". Expected Number, Function, got String with value "". -->
<!-- 值为index时 Invalid prop: type check failed for prop "index". Expected Number, Function, got String with value "index".-->
  <el-table-column
    :type="config.type"
    :column-key="config.columnKey"
    :label="config.label"
    :prop="config.prop"
    :width="config.width"
    :min-width="config.minWidth"
    :fixed="config.fixed"
    :render-header="config.renderHeader"
    :sortable="config.sortable"
    :sort-method="config.sortMethod"
    :sort-by="config.sortBy"
    :sort-orders="config.sortOrders"
    :resizable="config.resizable"
    :formatter="config.formatter"
    :show-overflow-tooltip="config.showOverflowTooltip"
    :align="config.align"
    :header-align="config.headerAlign"
    :class-name="config.className"
    :label-class-name="config.labelClassName"
    :selectable="config.selectable"
    :reserve-selection="config.reserveSelection"
    :filters="config.filters"
    :filter-placement="config.filterPlacement"
    :filter-multiple="config.filterMultiple"
    :filter-method="config.filterMethod"
    :filtered-value="config.filteredValue"
  >
    <!-- 插槽列 -->
    <template v-if="customConfig.isSlot" #default="scope">
      <slot :name="config.prop" :data="scope"></slot>
    </template>
    <!-- 多级表头嵌套 -->
    <template v-if="customConfig.children && customConfig.children.length > 0">
      <flm-column
        v-for="column in customConfig.children"
        :key="column.config.prop"
        :config="column.config"
        :customConfig="column.customConfig"
      >
        <!-- 插槽列 -->
        <template v-if="column.customConfig.isSlot" #[column.config.prop]="scope">
          <slot :name="column.config.prop" :data="scope.data"></slot>
        </template>
        <!-- 子插槽 -->
        <template v-for="slotItem in slotList(column.customConfig.children)" #[slotItem.config.prop]="scope">
          插槽名称{{slotItem.config.prop}}
          <slot :name="slotItem.config.prop" :scope="scope.data"></slot>
        </template>
      </flm-column>
    </template>
  </el-table-column>
</template>

<script>
import flmColumn from './flmColumn.vue'
export default {
  name: 'flmColumn',
  components: { flmColumn },
  props: {
    // 默认配置
    config: {
      type: Object,
      default: function() {
        return {
          type,
          index,
          columnKey,
          label,
          prop,
          width,
          minWidth,
          fixed,
          renderHeader,
          sortable: false,
          sortMethod,
          sortBy,
          sortOrders,
          resizable: true,
          formatter,
          showOverflowTooltip: false,
          align: 'left',
          headerAlign,
          className,
          labelClassName,
          selectable,
          reserveSelection: false,
          filters,
          filterPlacement,
          filterMultiple,
          filterMethod,
          filteredValue
        }
      }
    },
    // 自定义配置
    customConfig: {
      type: Object,
      default() {
        return {
          isSlot: false,  // 是否是插槽
          children: [],   // 子列（多级表头）
        }
      }
    }
  },
  computed: {
    // 插槽列表
    slotList() {
      return function(column) {
        if (column && column.length)
          return column.filter(item => item.customConfig.isSlot)
      }
    }
  }
}
</script>

<style>

</style>
