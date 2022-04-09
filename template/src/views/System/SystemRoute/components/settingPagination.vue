<template>
  <flm-form
    class="form"
    ref="queryForm"
    v-model="paginationSetting.data"
    :config="paginationSetting.config"
    :customConfig="paginationSetting.customConfig"
  />
</template>

<script>
import { flmForm } from "@/components"
import { PAGINATION_SETTING } from './settingInfo'
export default {
  name: 'settingPagination',
  components: { flmForm },
  data() {
    return {
      // 分页配置
      paginationSetting: PAGINATION_SETTING
    }
  },
  computed: {
    formatData: {
      get() {
        // 这三项数据类型是数字，需要单独处理
        let { total, pageCount, pagerCount } = this.paginationSetting.data
        return {
          ...this.paginationSetting.data,
          total: parseInt(total),
          pageCount: parseInt(pageCount),
          pagerCount: parseInt(pagerCount),
        }
      },
      set(value) {
        this.paginationSetting.data = value
      }
    }
  }
}
</script>

<style>

</style>
