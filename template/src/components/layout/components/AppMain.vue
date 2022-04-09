<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
<!--      <router-view :key="key" />-->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    },
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/ui/variables.scss";
.app-main {
  /*50 = navbar  */
  //min-height: calc(100vh - 50px -50px);
  width: 100%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #ddd;
  border-radius: 2px;
  background-color: $mainBg;

  // *** 20210703 解决容器div滚动后hearder不固定的bug ***
  height: calc(100vh - 50px - 34px - 50px); // -header -tag -bread
  overflow-y: scroll;
  // *** 20210703 解决容器div滚动后hearder不固定的bug end ***
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
