import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import system from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      // 新增指定vuex-persistedstate保持范围的定义，加入tagsView会报错
      reducer(val){
        return {
          // 需持久化state中的值
          user: val.user
        }
      }
    })
  ],
  modules: {
    app,
    settings,
    user,
    tagsView,
    permission,
    system
  },
  getters
})
