<template>
  <div class="setting-batch-action">
    <div class="item" v-for="(item, batchIndex) in tableActionSetting" :key="batchIndex">
      <el-form
        ref="form"
        :model="item"
        label-width="100px"
        label-suffix=":"
        inline
      >
        <el-form-item label="operation" prop="operation">
          <flmInput v-model="item.operation" />
          <flmTooltip content="按钮操作" />
        </el-form-item>
        <el-form-item label="buttonText" prop="buttonText">
          <flmInput v-model="item.buttonText" />
          <flmTooltip content="按钮文字" />
        </el-form-item>
        <el-form-item>
          <el-button-group>
            <el-button :disabled="batchIndex === 0" @click="moveAction(batchIndex, true)">上移</el-button>
            <el-button :disabled="batchIndex === tableActionSetting.length - 1" @click="moveAction(batchIndex)">下移</el-button>
            <el-button @click="deleteAction(batchIndex)">删除</el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="button-add-item">
      <el-button @click="addOperation">添加操作按钮</el-button>
    </div>
  </div>
</template>

<script>
import { flmInput, flmTooltip } from "@/components"
export default {
  name: 'settingAction',
  components: { flmInput, flmTooltip },
  data() {
    return {
      tableActionSetting: [],  // 批量操作权限列表
    }
  },
  methods: {
    // 移动批量操作
    moveAction(index, direction) {
      let item = this.tableActionSetting[index],         // 需要移动的元素
        targetIndex = direction ? index - 1 : index + 1  // 目标下标
      this.tableActionSetting.splice(index, 1)
      this.tableActionSetting.splice(targetIndex, 0, item)
    },
    // 删除批量操作
    deleteAction(index) {
      this.$confirm
      this.$confirm('此操作将删除该配置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableActionSetting.splice(index, 1)
          this.$message.success('删除成功!')
        })
        .catch(() => this.$message.info('已取消删除'))
    },
    // 增加权限
    addOperation() {
      this.tableActionSetting.push({ buttonText: '', operation: '' })
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-batch-action {
  display: flex;
  flex-direction: column;
  align-items: center;

  .item {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 1px solid #eee;
  }

  .button-add-item {
    padding: 16px;
  }
  //缩短input，后置tips
  .el-input {
    width: 203px;
  }
}
</style>
