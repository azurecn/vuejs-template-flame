<template>
  <div class="navbar">
    <header-hamburger v-if="device==='mobile'" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

<!--    <breadcrumb class="breadcrumb-container" />-->
    <div class="title-wrap">
      <img  v-if="device!=='mobile'" :src="logoSrc" alt="">
      <span>{{ title }}</span>
    </div>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/60/h/60'" class="user-avatar">
          <span style="margin-left: 10px">{{ name }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <router-link to="/app/setup">
            <el-dropdown-item>
              设置
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://www.baidu.com">
            <el-dropdown-item>百度</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderHamburger from '@/components/HeaderHamburger'
import LOGO from '@/assets/logo.png'

export default {
  components: {
    HeaderHamburger
  },
  data() {
    return {
      title: process.env.VUE_APP_PLATFORM_NAME_CN,
      logoSrc: LOGO
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ]),
    device() {
      return this.$store.state.app.device
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/Login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/ui/variables.scss";
.navbar {
  //// *** 20210703 解决容器div滚动后hearder不固定的bug ***
  //position: fixed;
  //top: 0;
  //right: 0;
  //left: 0;
  //z-index: 800;
  ////height: 50px;
  //// *** 20210703 解决容器div滚动后hearder不固定的bug end ***

  height: $navBarHeight;
  overflow: hidden;
  position: relative;
  background: $themeRed;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: flex;
  align-items: center;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  //.breadcrumb-container {
  //  float: left;
  //}

  .title-wrap {
    padding-left: 10px;
    display: flex;
    align-items: center;
    img {
      height: 40px;
      margin-right: 10px;
    }
  }

  .right-menu {
    position: absolute;
    right: 20px;
    height: 100%;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          margin-left: 10px;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
