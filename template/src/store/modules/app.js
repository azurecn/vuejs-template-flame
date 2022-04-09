import Cookies from 'js-cookie'
import defaultSettings from '@/settings'
const { tagsView, breadcrumb } = defaultSettings

const state = {
  device: 'desktop',
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  isTagsViewShow: Cookies.get('isTagsViewShow') ? Cookies.get('isTagsViewShow').toString() === 'true' : (tagsView || true),
  isBreadcrumbShow: Cookies.get('isBreadcrumbShow') ? Cookies.get('isBreadcrumbShow').toString() === 'true' : (breadcrumb || true)
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_TAGSVIEW_SHOW_STATUS_SHOW: (state, isTagsViewShow) => {
    state.isTagsViewShow = isTagsViewShow
    Cookies.set('isTagsViewShow', isTagsViewShow)
  },
  TOGGLE_BREADCRUMB_SHOW_STATUS_SHOW: (state, breadcrumb) => {
    state.isBreadcrumbShow = breadcrumb
    Cookies.set('isBreadcrumbShow', breadcrumb)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
