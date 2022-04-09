<template>
  <el-pagination
    :small="config.small"
    :background="config.background"
    :page-size="config.pageSize"
    :total="config.total"
    :page-count="config.pageCount"
    :pager-count="config.pagerCount"
    :current-page="config.currentPage"
    :layout="config.layout"
    :page-sizes="config.pageSizes"
    :popper-class="config.popperClass"
    :prev-text="config.prevText"
    :next-text="config.nextText"
    :disabled="config.disabled"
    :hide-on-single-page="config.hideOnSinglePage"
    @size-change="paginationSizeChange"
    @current-change="paginationCurrentChange"
  ></el-pagination>
</template>

<script>
export default {
  name: 'flmPagination',
  props: {
    config: {
      type: Object,
      default() {
        return {
          small: false,
          background: false,
          pageSize: 10,
          total: null,
          pageCount: null,
          pagerCount: 7,
          currentPage: 1,
          layout: 'prev, pager, next, jumper, ->, total',
          pageSizes: [10, 20, 50, 100],
          popperClass: null,
          prevText: null,
          nextText: null,
          disabled: false,
          hideOnSinglePage: null,
        }
      }
    }
  },
  methods: {
    paginationSizeChange(event) {
      this.$emit('paginationSizeChange', event)
    },
    paginationCurrentChange(event) {
      this.$emit('paginationCurrentChange', event)
    },
  }
}
</script>

<style>

</style>
