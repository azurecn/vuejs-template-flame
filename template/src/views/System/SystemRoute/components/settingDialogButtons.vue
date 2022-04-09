<template>
  <div class="setting-dialog-buttons">
    <div
      class="operation"
      v-for="[index, { showDetail, config, customConfig }] in buttonsData.entries()"
      :key="index"
    >
      <flm-form
        :key="`additionalForm${index}`"
        :data="customConfig.data"
        :config="customConfig.config"
        :customConfig="customConfig.customConfig"
      >
        <template #buttons>
          <el-button-group>
            <el-button
              @click="buttonsData[index].showDetail = !buttonsData[index].showDetail"
            >{{ showDetail ? '隐藏' : '显示' }}详细配置</el-button>
            <el-button :disabled="index === 0" @click="moveAction(index, true)">上移</el-button>
            <el-button :disabled="index === buttonsData.length - 1" @click="moveAction(index)">下移</el-button>
            <el-button @click="deletAction(index)">删除</el-button>
          </el-button-group>
        </template>
      </flm-form>
      <flm-form
        v-show="showDetail"
        :key="`defaultForm${index}`"
        :data="config.data"
        :config="config.config"
        :customConfig="config.customConfig"
      />
    </div>
    <el-button @click="addOperation">添加权限</el-button>
  </div>
</template>

<script>
import { flmForm } from "@/components"
import { BUTTONS_SETTING } from "./settingInfo.js"
export default {
  name: 'settingDialogButtons',
  components: { flmForm },
  props: {
    buttonsData: null
  },
  model: {
    prop: 'buttonsData',
    event: 'change'
  },
  methods: {
    // 移动操作
    moveAction(index, direction) {
      let item = this.buttonsData[index],         // 需要移动的元素
        tarageIndex = direction ? index - 1 : index + 1  // 目标下标
      this.buttonsData.splice(index, 1)
      this.buttonsData.splice(tarageIndex, 0, item)
    },
    // 删除操作
    deletAction(index) {
      this.$confirm
      this.$confirm('此操作将删除该配置, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.buttonsData.splice(index, 1)
          this.$message.success('删除成功!')
        })
        .catch(() => this.$message.info('已取消删除'))
    },
    // 增加权限
    addOperation({
      config = {
        size: 'mini',
        type: null,
        plain: null,
        round: null,
        circle: null,
        loading: null,
        disabled: null,
        icon: null,
        autofocus: null,
        nativeType: null,
      },
      customConfig = {
        buttonText: null,  // 按钮文字
        operation: null,  // 按钮操作
      }
    }) {
      this.buttonsData.push(JSON.parse(JSON.stringify(BUTTONS_SETTING)))
      this.buttonsData[this.buttonsData.length - 1].config.data = config
      this.buttonsData[this.buttonsData.length - 1].customConfig.data = customConfig
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-dialog-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
