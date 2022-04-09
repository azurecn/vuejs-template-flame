<template>
  <div class="table-model">
    <el-divider content-position="left">表格模型（未完成）</el-divider>
    <div class="model-main">
      <!-- <flm-table
        :data="pageData.table.data"
        :config="pageSetting.table.config"
        :customConfig="pageSetting.table.customConfig"
      ></flm-table> -->
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column label="配送信息">
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column label="地址">
            <el-table-column
              prop="test.province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="test.city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="test.address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="test.zip"
              label="邮编"
              width="120">
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { flmTable } from '@/components'
export default {
  name: 'tableModel',
  components: { flmTable },
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        test: {
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.model-main {
  padding: 0 200px;
}
</style>