'use strict'
import { isURL } from './validate.js'
import Layout from '@/components/layout'

/**
 * 获取Url参数
 * @method getUrlParams
 */
export const getUrlParams = function() {
  const vars = []
  let hash = ''
  const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
  for (let i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=')
    vars.push(hash[0])
    vars[hash[0]] = hash[1]
  }
  return vars
}

/**
 * 生成根路由
 * @method generateIndexRouter
 */
export function generateIndexRouter(data) {
  let indexRouter = [
    {
      path: '/',
      name: 'index',
      component: Layout,
      meta: {},
      children: [
        ...generateChildRouters(data),
      ]
    },
    {
      "path": "*", "redirect": "/404", "hidden": true
    }
  ]
  return indexRouter;
}

function getChildRouterComponent(item) {
  // 路由页面对应关系配置
  const components = {
    '/SystemRoute': 'System/SystemRoute/SystemRoute',
    '/system-role': 'System/SystemRole/SystemRole',
    '/system-user': 'System/SystemUser/SystemUser',
    '/test-page': 'System/SystemRoute/SystemRoute',
    '/system-config': 'SystemData/SystemData/SystemDataDictionary'
  }
  let path = null
  Object.entries(components).forEach(([ key, value ]) => {
    if(key === item.router) {
      path = value
    }
  });
  return path
}

// 生成嵌套路由（子路由）
function  generateChildRouters (data) {
  const routers = [];
  for (let item of data) {
    // 处理外链
    // eslint-disable-next-line
    let URL = (item.url|| '').replace(/{{([^}}]+)?}}/g, (s1, s2) => eval(s2)) // URL支持{{ window.xxx }}占位符变量
    if (isURL(URL)) {
      item.url = URL;
    }
    // 处理component路径
    let component = getChildRouterComponent(item)
    // let componentPath = resolve => require([`@/views/${component}.vue`], resolve)
    // 组装单个菜单
    let menu =  {
      path: item.router || '/',
      name: item.router && item.router.replace(/\//g, '') || '',
      redirect:item.redirect,
      // component: componentPath, 部分component没有路径
      component: component ? () => import(/* webpackChunkName: "page" */ `@/views/${component}.vue`) : null,
      //component: resolve => require(['@/' + component+'.vue'], resolve),
      hidden:item.hidden || false,
      meta: {
        title:item.menu_name || '',
        icon: item.icon_image || ' ',
        url:item.url || '',
        // permissionList:item.permissionList || [],
        keepAlive:item.keepAlive || false,
        internalOrExternal:item.internalOrExternal || '',
        componentName:item.componentName || '',
        // 左侧菜单menu需要使用 item.router=>path, item.icon_image=>icon; item.menu_name => title
        flame_id: item.flame_id,
        menu_code: item.menu_code,
        p_id: item.p_id,
        router_type: item.router_type,
        table_name: item.table_name
      }
    }
    if(item.alwaysShow){
      menu.alwaysShow = true;
      menu.redirect = menu.path;
    }
    if (item.children && item.children.length > 0) {
      menu.children = [...generateChildRouters( item.children)];
    }
    //--update-begin----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
    //判断是否生成路由
    if(item.route && item.route === '0'){
      //console.log(' 不生成路由 item.route：  '+item.route);
      //console.log(' 不生成路由 item.path：  '+item.path);
    }else{
      routers.push(menu);
    }
    //--update-end----author:scott---date:20190320------for:根据后台菜单配置，判断是否路由菜单字段，动态选择是否生成路由（为了支持参数URL菜单）------
  }
  // console.log(`generateChildRouters routers`, routers)
  return routers
}
