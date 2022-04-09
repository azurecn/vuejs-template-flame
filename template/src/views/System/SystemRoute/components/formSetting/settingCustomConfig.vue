<template>
  <div>
    <el-divider content-position="left">表单-自定义配置</el-divider>
    <el-collapse v-model="activeNames">
      <el-collapse-item title="1. 表单项配置" name="items">
        <formItems v-model="formCustomConfig.items" />
      </el-collapse-item>
      <el-collapse-item title="2. 表单按钮配置" name="buttons">
        <formButtons v-model="formCustomConfig.buttons" />
      </el-collapse-item>
    </el-collapse>
    
  </div>
</template>

<script>
import formItems from "./formItems.vue"
import formButtons from "./formButtons.vue"
export default {
  name: 'settingConfig',
  components: { formItems, formButtons },
  model: {
    prop: 'formCustomConfig',
    event: 'change'
  },
  props: {
    formCustomConfig: {
      type: Object,
      default() {
        return {
          items: [],
          butttons: [],
        }
      }
    }
  },
  data() {
    return {
      activeNames: ['items'],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../routerSetting.scss';
</style>