<template>
  <div :class="{'has-logo':showLogo}">
    <!--    <logo v-if="showLogo" :collapse="isCollapse" />-->
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        router
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.flame_id"
          :item="route"
          :base-path="route.router" />
<!--        <sidebar-item-->
<!--            v-for="(route, $idx) in routes"-->
<!--            :key="route.meta && route.meta.flame_id || $idx"-->
<!--            :item="route"-->
<!--            :base-path="route.path" />-->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { callPost } from '@/api/system.js'
// import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/ui/variables.scss'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    SidebarItem,
    // Logo,
    Hamburger },
  data() {
    return {
      routes: []
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    // routes() {
    //   return this.$router.options.routes
    // },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  created() {
    this.getRoutes()
    // generateIndexRouter生成路由时，permissionList包裹了一层，目录菜单这里选择内层开始显示。
    // this.routes = this.$store.getters.permissionList[0].children

    // this.routes = this.$store.getters.permissionList
    // console.log(`this.$router`, this.$router)
  },
  methods: {
    // 获取路由列表
    getRoutes() {
      // 优先store中读取menuList，没有时请求接口获取
      if(this.$store.getters.menuList) {
        this.routes = this.$store.getters.menuList
      }else {
        callPost({ tableName: 'sysflamemenu' }, 'GetMainMenu')
        .then(({ item }) => {
          this.routes = item.root_node
          // console.log('菜单', item.root_node)
          // this.routes = this.$store.getters.permissionList
        })
      }
    },
    // handleSelect(key, keyPath) {
    //   console.log(`key`, key)
    //   console.log(`keyPath`, keyPath)
    //   console.log(keyPath[keyPath.length - 1])
    //   this.$nextTick(()=>{
    //     this.$router.push({
    //       path: keyPath[keyPath.length - 1]
    //     })
    //   })
    // },

    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
