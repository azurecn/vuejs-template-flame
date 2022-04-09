import api from '../api'
import { getToken } from '../../utils/auth'

// 获取用户列表
export const login = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      serverName: '/project-service',
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.login&app_id=${process.env.VUE_APP_APP_ID}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('login fail'))
  })
}

// 全部查询
export const allSearch = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.allsearch&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('allSearch fail'))
  })
}

// 分页查询
export const pageSearch = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.pagesearch&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('pageSearch fail'))
  })
}
