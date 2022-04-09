<template>
  <el-tooltip class="tooltip" effect="dark" :content="content" placement="top">
    <i class="el-icon el-icon-warning-outline"></i>
  </el-tooltip>
</template>

<script>
export default {
  name: 'flmTooltip',
  props: {
    content: String
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  margin-left: 10px;
}
.el-icon {
  font-size: 20px;
}
</style>