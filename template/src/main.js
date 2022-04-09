import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// 部分引入elementUI
import 'element-ui/lib/theme-chalk/index.css'
import element from '@/ui/element/index'
Vue.use(element)

// 全局样式
import '@/ui/index.scss'

import App from './App'
import store from './store'
import router from './router'

// svgIcon
import '@/icons'
// 全局路由守卫
import '@/permission'

Vue.config.productionTip = false

// 打印当前版本（注释为selint忽略，不要删）
/* eslint-disable */
console.log(
  `%c flame-dashboard %c ${process.env.VUE_APP_VERSION} `,
  'color: white; background: #6B4890; padding: 2px 0; border-radius: 10px 0 0 10px',
  'color: white; background: #383038; padding: 2px 0; border-radius: 0 10px 10px 0'
)
/* eslint-disable */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})