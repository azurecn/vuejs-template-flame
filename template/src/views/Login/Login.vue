<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left">
      <div class="title-container">
        <h3 class="title">{{ title }}</h3>
      </div>
      <el-tabs :stretch="true" v-model="tabPane.active" @tab-click="handleTabPaneClicked">
        <el-tab-pane :name="tabPane.list[0]">
          <span slot="label">用户密码登录</span>
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="ic_user--default"/>
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
              @keyup.enter.native="mobileFocus"
            />
          </el-form-item>
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="ic_password--default"/>
            </span>
            <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="checkCodeFocus"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon :icon-class="passwordType === 'password' ? 'ic_eye--close' : 'ic_eye--open'"/>
            </span>
          </el-form-item>
          <!-- 图片验证码 -->
<!--          <div class="verification-item">-->
<!--            <el-form-item prop="checkCode">-->
<!--              <span class="svg-container">-->
<!--                <svg-icon icon-class="ic_letter"/>-->
<!--              </span>-->
<!--              <el-input-->
<!--                  ref="checkCode"-->
<!--                  v-model="loginForm.checkCode"-->
<!--                  placeholder="验证码"-->
<!--                  name="checkCode"-->
<!--                  tabindex="3"-->
<!--                  auto-complete="off"-->
<!--                  @keyup.enter.native="handleLogin"-->
<!--              />-->
<!--            </el-form-item>-->
<!--            <div class="code-img">-->
<!--              <img v-if="requestCodeSuccess" :src="randCodeImage"-->
<!--                   @click="handleChangeCheckCode"/>-->
<!--              <img v-else src="../../assets/check_code.png" @click="handleChangeCheckCode"/>-->
<!--            </div>-->
<!--          </div>-->
        </el-tab-pane>
        <el-tab-pane :name="tabPane.list[1]">
          <span slot="label">手机号码登录</span>
          <el-form-item prop="mobile">
            <span class="svg-container">
              <svg-icon icon-class="ic_mobile"/>
            </span>
            <el-input
                ref="mobile"
                v-model="loginForm.mobile"
                placeholder="手机号码"
                name="mobile"
                type="text"
                tabindex="1"
                auto-complete="on"
                @keyup.enter.native="codeFocus"
            />
          </el-form-item>
          <div class="verification-item">
            <el-form-item prop="code">
              <span class="svg-container">
                <svg-icon icon-class="ic_letter"/>
              </span>
              <el-input
                  ref="code"
                  v-model="loginForm.code"
                  placeholder="验证码"
                  name="verificationCode"
                  tabindex="2"
                  auto-complete="on"
                  :minlength="codeLength"
                  :maxlength="codeLength"
                  @keyup.enter.native="handleLogin"
              />
            </el-form-item>
            <el-button :loading="count !== 0" type="primary" @click.native.prevent="handleSendVerificationCode">
              <span v-show="count">{{ count }}s后可重新</span>获取验证码
            </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>

<!--      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"-->
<!--                 @click.native.prevent="userQuickLogin('loginForm')">登录-->
<!--      </el-button>-->
      <!--   接口返回错误无状态返回，无法获取loading状态，故取消按钮loading属性，不在按钮显示请求状态   -->
      <el-button type="primary" style="width:100%;margin-bottom:30px;"
                 @click.native.prevent="userQuickLogin('loginForm')">登录
      </el-button>

      <div class="tips">
        <third-login ref="thirdLogin"></third-login>
      </div>
    </el-form>

<!--    <verification-slide-picture ref="slidePicture" @verificationPassed="puzzlePassed" @popupClose="HidPuzzle"></verification-slide-picture>-->
  </div>
</template>

<script>
import ThirdLogin from './components/loginThird'
import VerificationSlidePicture from './components/verificationSlidePicture'
import { VERIFICATION_CODE_RESEND_DELAY_TIME, VERIFICATION_CODE_LENGTH } from '@/utils/constantDefined'
import { isMobile, validUsername } from '@/utils/validate'
import pick from 'lodash.pick'

// demo 引入
// import axios from 'axios'
// import { setToken, getToken } from '../../utils/auth'
// import { login, allSearch } from '../../api/model/user.js'

export default {
  name: 'Login',
  components: {
    ThirdLogin,
    VerificationSlidePicture
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 8) {
        callback(new Error('密码长度小于8位'))
      } else {
        callback()
      }
    }
    const validateMobile = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error('手机号码不正确！'))
      } else {
        callback()
      }
    }
    return {
      title: process.env.VUE_APP_PLATFORM_NAME_CN_FULL,
      activeTabPane: 'username',
      tabPane: {
        list: ['username', 'mobile'],   // handleLogin逻辑有引用，顺序不能更换
        active: 'username',
      },
      loginForm: {
        username: 'flame',
        password: 'flame',
        checkCode: '',
        mobile: '',
        code: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }],
        // checkCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
        // mobile: [{ required: true, trigger: 'blur', validator: validateMobile }],
        // code: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
      },
      // loading: false,
      passwordType: 'password',
      redirect: undefined,

      // 验证码参数
      requestCodeSuccess: false,
      // randCodeImage: '', // 图片验证码

      // 短信参数
      count: 0,
      codeLength: VERIFICATION_CODE_LENGTH,

      // 图形验证弹框
      isPopoverShow: false,
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  created () {
  },
  mounted () {
    // 图片验证码加载
    // this.handleChangeCheckCode()

    // 用户名获取焦点
    this.$refs.username.focus()
  },
  methods: {
    mobileFocus() {
      this.$refs.password.focus()
    },
    checkCodeFocus() {
      this.$refs.checkCode.focus()
    },
    codeFocus() {
      this.$refs.code.focus()
    },
    userQuickLogin(form) {
      // 用户名、密码登录
      if (this.tabPane.active === this.tabPane.list[0]) {
        // validateField 部分字段回调多次问题未解决，暂时不使用次方法验证
        // this.$refs[form].validateField(['username', 'password'], valid => {
        //   if (!valid) {
        //     console.log(1111)
        //   } else {
        //     return false;
        //   }
        // })

        let params = pick(this.loginForm, 'username', 'password', 'checkCode')
        let data = {
          code: params.username,
          password: params.password
        }
        // this.loading = true
        this.$store.dispatch('user/login', data).then(()=>{
          // vuex 存下全部列
          this.$router.push({ path: '/home' })
        })

        // login({
        //   data,
        //   tableName: 'flameuser'
        // }).then(res => {
        //   const { token } = res
        //   this.$store.commit('user/SET_TOKEN', token)
        //   let tableName = 'flametableinfoitem',
        //       data = {
        //         ref_level: 0,
        //         order_by: "flame_id",
        //         conditions: {
        //           table_name: "sys_flame_user"
        //         }
        //       }
        //   allSearch({ tableName, data })
        //   .then(({ items }) => {
        //     this.$store.commit('system/SET_FLAME_TABLE_INFO_ITEM', items)
        //     // vuex 存下全部列
        //     this.$router.push({ path: '/SystemUser' })
        //   })
        // })

      }else {
        // 手机号登录
        // this.loading = true
        const params = pick(this.loginForm, 'mobile', 'code')
        // const res = await this.$store.dispatch('user/loginByMobile', params)
        // if (res.success) {
        //   this.$router.push({ path: this.redirect || '/' })
        // }
        // this.loading = false

        //  demo
        // this.$router.push({ path: this.redirect || '/' })
        this.$store.commit('user/SET_TOKEN', '123')
        let tableName = 'flametableinfoitem',
            data = {
              ref_level: 0,
              order_by: "flame_id",
              conditions: {
                table_name: "sys_flame_user"
              }
            }
        allSearch({ tableName, data })
        .then(({ items }) => {
          this.$store.commit('system/SET_FLAME_TABLE_INFO_ITEM', items)
          // vuex 存下全部列
          this.$router.push({ path: '/SystemUser' })
        })
      }
    },

    handleTabPaneClicked (tab, event) {
      switch (tab.index) {
        case '0':
          // 用户名获取焦点
          this.$nextTick(() => {
            this.$refs.username.focus()
          })
          break
        case '1':
          // 手机号获取焦点
          this.$nextTick(() => {
            this.$refs.mobile.focus()
          })
          break
      }
    },

    // // 拼图验证
    // handleShowPuzzle() {
    //   // this.isPopoverShow = true
    //   this.$refs.slidePicture.isPopoverShow = true
    // },
    // HidPuzzle() {
    //   // this.isPopoverShow = false
    //   this.$refs.slidePicture.isPopoverShow = false
    // },
    // puzzlePassed() {
    //   // this.isPopoverShow = false
    //   this.sendLoginRequest()
    // },

    // async sendLoginRequest() {
    //   if (this.tabPane.active === this.tabPane.list[0]) {
    //     // this.loading = true
    //     let params = pick(this.loginForm, 'username', 'password', 'checkCode')
    //     const res = await this.$store.dispatch('user/login', params)
    //     if (res.success) {
    //       this.$router.push({ path: this.redirect || '/' })
    //     }
    //     // this.loading = false
    //
    //     // //  demo
    //     // setToken('123')
    //     // this.$router.push({ path: this.redirect || '/' })
    //   }else {
    //     // this.loading = true
    //     const params = pick(this.loginForm, 'mobile', 'code')
    //     const res = await this.$store.dispatch('user/loginByMobile', params)
    //     if (res.success) {
    //       this.$router.push({ path: this.redirect || '/' })
    //     }
    //     // this.loading = false
    //   }
    // },
    // async handleLogin () {
    //   if (this.tabPane.active === this.tabPane.list[0]) {
    //     let validCount = 0
    //     // this.$refs.loginForm.validateField(['username', 'password', 'checkCode'], valid => {
    //     //   if(!valid) validCount++
    //     //   if (validCount >= 3) {
    //     //     this.handleShowPuzzle()
    //     //   } else {
    //     //     // console.log('username pane error submit!!')
    //     //     return false
    //     //   }
    //     // })
    //   } else {
    //     let validCount = 0
    //     // this.$refs.loginForm.validateField(['mobile', 'code'], valid => {
    //     //   if(!valid) validCount++
    //     //   if (validCount >= 2) {
    //     //     this.handleShowPuzzle()
    //     //   } else {
    //     //     // console.log('mobile pane error submit!!')
    //     //     return false
    //     //   }
    //     // })
    //   }
    // },

    // 图片验证码加载
    // handleChangeCheckCode () {
    //   let currentDateTime = new Date().getTime()
    //   axios.get(`https://p.yareiot.com/yare-gourd/passport/randomImage/${currentDateTime}`).then(res => {
    //     if (res.data.success) {
    //       this.randCodeImage = res.data.result
    //       this.requestCodeSuccess = true
    //     } else {
    //       this.$message.error(res.data.message)
    //       this.requestCodeSuccess = false
    //     }
    //   }).catch(() => {
    //     this.requestCodeSuccess = false
    //   })
    // },
    timeGo () {
      const TIME_COUNT = VERIFICATION_CODE_RESEND_DELAY_TIME
      if (!this.timer) {
        this.count = TIME_COUNT
        // this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            // this.show = true
            clearInterval(this.timer)
            this.timer = null
            this.isCodeSend = false
          }
        }, 1000)
      }
    },
    async handleSendVerificationCode () {
      this.timeGo()
      let res = await loginAsync.sendVerificationCode(this.loginForm)
    },
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },

  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  //background: url(../../assets/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;

  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}


// 20210619
.verification-item {
  display: flex;
  justify-content: space-between;

  .el-form-item {
    flex: 1 1 auto;
  }

  .el-button {
    flex: 1 1 auto;
    margin-bottom: 22px;
    margin-left: 15px;
  }

  .code-img {
    flex: 0 0 120px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 22px;
    margin-left: 15px;

    img {
      height: 54px;
    }
  }
}

.el-tabs__item:not(.is-active) span {
  color: #fff;
}


</style>
