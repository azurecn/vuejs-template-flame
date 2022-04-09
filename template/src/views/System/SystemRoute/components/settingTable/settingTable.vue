<template>
  <div class="table-page">
    <table-model />
    <table-setting v-model="tableSetting" />
  </div>
</template>

<script>
import tableModel from "./components/tableModel"
import tableSetting from "./components/tableSetting"

export default {
  name: 'Table',
  components: {
    tableModel,
    tableSetting,
  },
  data() {
    return {
      tableSetting: {
        data: [],
        config: {
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
          // defaultSort: {},  // obj
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
        },
        customConfig: {
          children: []
        }
      }
    }
  }
}
</script>

<style scoped>
.tabel-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>