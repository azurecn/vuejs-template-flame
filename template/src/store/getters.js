const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  permissionList: state => state.user.permissionList,
  menuList: state => state.user.menuList,

  addRoutes: state => state.permission.addRoutes,

  isTagsViewShow: state => state.app.isTagsViewShow,
  isBreadcrumbShow: state => state.app.isBreadcrumbShow,
}
export default getters
