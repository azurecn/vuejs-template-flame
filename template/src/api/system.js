import api from './api.js'
import { getToken } from '../utils/auth'

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

// 自定义查询
export const customizeSearch = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.customizesearch&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('customizeSearch fail'))
  })
}

// 根据主键获取单条数据-SingleSearch
export const singleSearch = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singlesearch&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('singleSearch fail'))
  })
}

// 单条增加接口-SingleAdd
export const singleAdd = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singleadd&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('singleAdd fail'))
  })
}

// 批量增加接口-BatchAdd
export const batchAdd = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.BatchAdd&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('batchAdd fail'))
  })
}

// 根据主键删除数据-SingleDelete
export const singleDelete = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singledelete&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('singleDelete fail'))
  })
}

// 根据条件删除-BatchDelete
export const batchDelete = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.batchdelete&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('batchDelete fail'))
  })
}

// 根据主键单条更新-SingleUpdate
export const singleUpdate = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singleupdate&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('singleUpdate fail'))
  })
}

// 根据条件批量更新-BatchUpdate
export const batchUpdate = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.batchupdate&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('batchUpdate fail'))
  })
}

// 通过实体模型批量更新-BatchUpdateInstance
export const batchUpdateInstance = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.batchupdateinstance&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('batchUpdateInstance fail'))
  })
}

// !!!报表分页查询-queryPage
export const queryPage = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.querypage&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('queryPage fail'))
  })
}

// !!!Union单条增加接口-SingleAdd
export const unionSingleAdd = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singleadd&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('unionSingleAdd fail'))
  })
}

// !!!Union-根据主键删除数据-SingleDelete
export const unionSingleDelete = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singledelete&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('unionSingleDelete fail'))
  })
}

// !!!Union根据主键获取单条数据-SingleSearch
export const unionSingleSearch = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singlesearch&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('unionSingleSearch fail'))
  })
}

// !!!Union根据条件删除-BatchDelete
export const unionBatchDelete = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.batchdelete&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('unionBatchDelete fail'))
  })
}

// !!!Union根据主键单条更新-SingleUpdate
export const unionSingleUpdate = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.singleupdate&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('unionSingleUpdate fail'))
  })
}

// !!!自定义接口operationactionfunc
export const operationActionfunc = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.operationactionfunc&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('operationActionfunc fail'))
  })
}

// 得到markdown格工的文件
export const getOperationGroupByroleid = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
			serverName: '/project-service',
      // token到时候全局取
      url: `/rest?method=${tableName}.getoperationgroupbyroleid&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('getOperationGroupByroleid fail'))
  })
}

// 导出Export_table
export const exportFile = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.exportfile&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('exportFile fail'))
  })
}

// !!!导出Export_proc
export const exportExcelproc = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.exportexcelproc&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('exportExcelproc fail'))
  })
}

// !!!导入数据
export const importFile = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.importfile&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('importFile fail'))
  })
}

// 临时测试
export const autoCreateMenu = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.autocreatemenu&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('autoCreateMenu fail'))
  })
}

// !!!dict
export const Dict = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.Dict&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('Dict fail'))
  })
}

// 初始化模型
export const initFrame = ({ tableName, data }) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.initframe&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('initFrame fail'))
  })
}

// 
export const callPost = ({ tableName, data }, method) => {
  return new Promise((resolve, reject) => {
    api({
      // token到时候全局取
      url: `/rest?method=${process.env.VUE_APP_PROJECT_NAME}.${tableName}.${method}&token=${getToken()}`,
      data,
    })
      .then(res => resolve(res))
      .catch(() => reject('initFrame fail'))
  })
}
