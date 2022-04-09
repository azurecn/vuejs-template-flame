const state = {
  flameTableInfoItem: []
}

const getters = {
  getFlameTableInfoItem: state => (tableName) => {
    // 过滤
    let list = state.flameTableInfoItem.filter(item => item.table_name === tableName && item.is_display)
    // 排序
    list.sort((item, nextItem) => {
      if (item.field_color_der < nextItem.field_color_der) return -1
      return 1
    })
    return list
  }
}

const mutations = {
  SET_FLAME_TABLE_INFO_ITEM: (state, infoItem) => {
    state.flameTableInfoItem = infoItem
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}