<template>
  <el-container class="system-route">
    <routeModel @changeRoute="changeRoute" />
    <routeSetting
      :routeName="routeName"
      :routeId="routeId"
      :routeTableName="settingTableName"
    />
  </el-container>
</template>

<script>
import routeModel from './components/routeModel.vue'
import routeSetting from './components/routeSetting.vue'
export default {
  name: 'SystemRoute',
  components: { routeModel, routeSetting },
  data() {
    return {
      routeId: '',
      routeName: '',
      settingTableName: ''
    }
  },
  methods: {
    changeRoute({ menu_name, flame_id, table_name }) {
      this.routeName = menu_name
      this.routeId = flame_id
      this.settingTableName = table_name
    }
  }
}
</script>

<style lang="scss" scoped>
.system-route {
  height: 100%;
  background-color: #FFF;
}
</style>