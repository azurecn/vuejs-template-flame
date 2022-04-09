import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
// import { getUrlParams } from './utils/utils'
import { callPost } from '@/api/system.js'
import { generateIndexRouter } from '@/utils/utils.js'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/Login'] // no redirect whitelist
// demo
// const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // 预留直接从url传token方式，用于兼容其他系统嵌入当前系统页面时场景。
  // const par = getUrlParams()
  // const token = par['token']
  // token && setToken(token)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/Login') {
      // if is logged in, redirect to the home page
      next()
      NProgress.done()
    } else {
      // 用户路由列表为空时，获取路由列表
      if (store.getters.addRoutes.length === 0) {
        // 获取角色路由
        callPost({ tableName: 'sysflamemenu' }, 'GetMainMenu')
        .then(({ item }) => {
          // 根据用户生成左侧菜单
          store.commit('user/SET_MENU_LIST', item.root_node)
          // 根据roles权限生成可访问的路由表
          // 生成用户路由
          let constRoutes = [];
          constRoutes = generateIndexRouter(item.child_node);
          store.commit('user/SET_PERMISSION_LIST', constRoutes)

          store.dispatch('permission/UpdateAppRouter',  { constRoutes }).then(() => {
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRoutes)
            const redirect = decodeURIComponent(from.query.redirect || to.path)
            if (to.path === redirect) {
              // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
              next({ ...to, replace: true })
            } else {
              // 跳转到目的路由
              next({ path: redirect })
            }
          })
        }).catch(() => {
          Message.error('登录失败！')
          store.dispatch('user/logout').then(() => {
            next({ path: '/Login', query: { redirect: to.fullPath } })
          })
        })
      }else {
        next()
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/Login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
