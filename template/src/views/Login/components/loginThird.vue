<template>
  <div>
    <div class="user-login-other">
      <span>其他登录方式</span>
      <a @click="onThirdLogin('github')" title="github">
        <svg-icon class="item-icon" icon-class="ic_login-github"></svg-icon>
      </a>
      <a @click="onThirdLogin('wechat')" title="微信">
        <svg-icon icon-class="ic_login-wechat"></svg-icon>
      </a>
      <a @click="onThirdLogin('dingTalk')" title="钉钉">
        <svg-icon icon-class="ic_login-dingTalk"></svg-icon>
      </a>
      <a @click="onThirdLogin('qq')" title="QQ">
        <svg-icon icon-class="ic_login-qq"></svg-icon>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.user-login-other {
  text-align: left;
  margin-top: 24px;
  line-height: 22px;

  svg {
    font-size: 30px;
    color: rgba(0, 0, 0, .2);
    margin-left: 16px;
    vertical-align: middle;
    cursor: pointer;
    transition: color .3s;

    &  :hover {
      color: #1890ff;
    }
  }
}
</style>
