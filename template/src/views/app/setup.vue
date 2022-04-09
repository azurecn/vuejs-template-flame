<template>
  <div class="page-container">
    <div class="table-item">
      <div class="title">设置</div>
      <div class="content">
        <div v-for="setup in setupOptions" :key="setup.action" class="content-item">
          <div class="item-label">{{ setup.label }}：</div>
          <div class="item-value">
            <el-switch
              v-if="setup.type === 'switch'"
              v-model="setup.value"
              :active-text="setup.params.active || '开'"
              :inactive-text="setup.params.inactive"
              :change="handleAction(setup)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppSetup',
  data() {
    return {
      setupOptions: [
        {
          label: '路由标签显示设置',
          value: '',
          type: 'switch',
          params: {
            active: '',
            inactive: ''
          },
          action: 'handleFunction1'
        },
        {
          label: '面包屑显示设置',
          value: '',
          type: 'switch',
          params: {
            active: '',
            inactive: ''
          },
          action: 'handleFunction2'
        }
      ]
    }
  },
  computed: {
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.setupOptions[0].value = this.$store.getters.isTagsViewShow
      this.setupOptions[1].value = this.$store.getters.isBreadcrumbShow
    },
    // handleAction(btnObj) {
    //   console.log(btnObj)
    //   const action = [...this.actionList()].filter(([key, value]) => (key.test(`${btnObj.action}`)))
    //   action.forEach(([key, value]) => value.call(this))
    // },
    // actionList() {
    //   return new Map([
    //     [/^handleFunction1$/, this.toggleTagsViewShowStatus],
    //     [/^handleFunction2$/, this.toggleBreadCrumbShowStatus]
    //   ])
    // },
    handleAction(setup) {
      switch (setup.action) {
        case 'handleFunction1':
          this.toggleTagsViewShowStatus(setup.value)
          break
        case 'handleFunction2':
          this.toggleBreadCrumbShowStatus(setup.value)
          break
      }
    },
    toggleTagsViewShowStatus(val) {
      this.$store.commit('app/TOGGLE_TAGSVIEW_SHOW_STATUS_SHOW', val)
    },
    toggleBreadCrumbShowStatus(val) {
      this.$store.commit('app/TOGGLE_BREADCRUMB_SHOW_STATUS_SHOW', val)
    }
  }
}
</script>

<style lang="scss" scoped>

.page-container {
  line-height: 1.5;
  .table-item {

  }
  .title {
    height: 40px;
  }
  .content {

  }
  .content-item {
    height: 40px;
    display: flex;
    .item-label {
      flex: 0 0 160px;
    }
    .item-value {

    }
  }
}
</style>
