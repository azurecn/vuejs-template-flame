<template>
  <div v-if="!item.hidden">
    <!--  仅有一个节点时的渲染  -->
    <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <!-- <app-link :to="resolvePath(onlyOneChild.router)"> -->
<!--        <el-menu-item-->
<!--          :index="resolvePath(onlyOneChild.router)"-->
<!--          :route="{-->
<!--            path: onlyOneChild.router,-->
<!--            query: { menuId: onlyOneChild.flame_id, tableName: onlyOneChild.table_name }-->
<!--          }"-->
<!--          :class="{'submenu-title-noDropdown':!isNest}"-->
<!--        >-->
      <el-menu-item
          :index="resolvePath(onlyOneChild.router)"
          :route="{
            path: onlyOneChild.router,
          }"
          :class="{'submenu-title-noDropdown':!isNest}"
      >
          <item :icon="onlyOneChild.icon_image || (item && item.icon_image)" :title="onlyOneChild.menu_name" />
        </el-menu-item>
      <!-- </app-link> -->
    </template>

    <template v-else>
      <template v-if="sidebar.opened && item && item.meta && item.meta.level && item.meta.level === 2">
        <el-popover placement="right" trigger="click">
          <div slot="default" class="popover-content">
            <sidebar-item
              v-for="child in item.children"
              :key="child.router"
              :is-nest="true"
              :item="child"
              :base-path="resolvePath(child.router)"
              class="nest-menu"
            />
          </div>
          <div slot="reference" class="el-menu-item">
            {{ item.menu_name }}
          </div>
          <!-- <div slot="reference">{{ item.menu_name }}</div>-->
        </el-popover>
      </template>
      <!-- 其他情况渲染-->
      <el-submenu v-else ref="subMenu" :index="resolvePath(item.router)" popper-append-to-body>
        <template slot="title">
          <item :icon="item.icon_image || ''" :title="item.menu_name" />
        </template>
        <sidebar-item
          v-for="child in item.children"
          :key="child.flame_id"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.router)"
          class="nest-menu"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import FixiOSBug from './FixiOSBug'
import { mapGetters } from 'vuex'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  mixins: [FixiOSBug],
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    this.onlyOneChild = null
    return {}
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    // 仅有一个child，且child不hidden时候：显示child（隐藏当前）
    hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        // 有child但是child隐藏时，不显示child
        if (item.hidden) {
          return false
        } else {
          // 仅有一个child且不隐藏时候，显示child
          this.onlyOneChild = item
          return true
        }
      })
      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    // 目录item的level大于3时：弹出方式显示

    // 返回路径
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style lang="scss">
  .el-popper {
    .el-submenu__title {
      padding-left: 0;
      min-width: 160px;
    }
  }
</style>
