<template>
  <el-drawer
      class="components-drawer"
      size="50%"
      :title="title"
      :visible.sync="isShow"
      :direction="direction"
      :before-close="handleClose">
    <div class="drawer-content">
      <flm-form
        ref="drawerForm"
        v-model="formData.data"
        :config="formData.config"
        :customConfig="formData.customConfig"
      ></flm-form>
    </div>
    <div class="drawer-footer">
      <el-button type="primary" @click="handleSubmit">提交</el-button>
      <el-button @click="handleCloseDrawer">取消</el-button>
    </div>
  </el-drawer>
</template>

<script>
import { flmForm } from '@/components'
export default {
  name: 'flmDrawer',
  components: {
    flmForm
  },
  props: {
    dataSource: {
      type: Object,
      default: function () {
        return {
          data: {},
          config: {},
          customConfig: {}
        }
      }
    }
  },
  computed: {
    formData: {
      get() {
        return this.dataSource
      },
      set(value) {
        // this.dataSource = value
      }
    }
  },
  data() {
    return {
      title: '操作',
      isShow: false,
      direction: 'rtl',
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
    handleCloseDrawer() {
      this.isShow = false
    },
    handleSubmit() {
      this.$emit('actionSubmit', this.formData)
      this.handleCloseDrawer()
    },
  }
}
</script>

<style lang="scss">
.components-drawer {
  .drawer-content {
    padding: 15px;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    border-top: 1px solid #eee;
  }
  .el-drawer__header {
    margin-bottom: 12px;
  }
  .drawer-footer {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button + button {
      margin-right: 20px;
    }
  }
}

</style>
