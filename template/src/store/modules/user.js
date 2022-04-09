// import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import defaultAvatar from '@/assets/logo.png'
import Cookies from 'js-cookie'
import { allSearch, login } from '../../api/model/user'
import store from '../index'
// import { callPost } from '@/api/system.js'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: Cookies.get('username') ? Cookies.get('username').toString() : '',
    role: Cookies.get('userRole') ? Cookies.get('userRole').toString() : '',
    avatar: Cookies.get('userAvatar') ? Cookies.get('userAvatar').toString() : defaultAvatar,
    permissionList: [],
    menuList: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  },
  SET_NAME: (state, name) => {
    state.name = name
    Cookies.set('username', name)
  },
  SET_ROLE: (state, role) => {
    state.role = role
    Cookies.set('userRole', role)
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
    Cookies.set('userAvatar', avatar)
  },
  SET_PERMISSION_LIST: (state, list) => {
    state.permissionList = list
  },
  SET_MENU_LIST: (state, list) => {
    state.menuList = list
  },
}

const actions = {
  // user login
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      login({
        data,
        tableName: 'flameuser'
      }).then(res => {
        const { token } = res
        commit('SET_TOKEN', token)
        commit('SET_NAME', res.username || '')
        commit('SET_ROLE', res.role || 'guest')
        commit('SET_AVATAR', res.avatar || '')

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
          store.commit('system/SET_FLAME_TABLE_INFO_ITEM', items)
          resolve()
        }).catch(error => {
          reject(error)
        })
      }).catch(error => {
        reject(error)
      })

      // // demo
      // commit('SET_TOKEN', '123')
      // commit('SET_NAME', '张三')
      // commit('SET_ROLE', 'admin')
      // commit('SET_AVATAR', defaultAvatar)
      // setToken('123')
      // resolve()
    })
  },

  // // get user info
  // getInfo({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     getInfo(state.token).then(response => {
  //       const { data } = response
  //
  //       if (!data) {
  //         return reject('Verification failed, please Login again.')
  //       }
  //
  //       const { name, avatar } = data
  //
  //       commit('SET_NAME', name)
  //       commit('SET_AVATAR', avatar)
  //       resolve(data)
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },
  //
  // user logout
  logout({
    commit,
    // state
  }) {
    return new Promise((
      resolve,
      // reject
    ) => {
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
      removeToken() // must remove  token  first
      resetRouter()
      commit('RESET_STATE')
      commit('permission/SET_ROUTES', [], {root: true})
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

