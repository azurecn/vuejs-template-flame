## 项目结构
```js
  flame-cli
  ├── // 文档
  ├── README.md                           // 项目说明
  ├── flame-cli.md                        // 脚手架搭建流程说明
  ├── test-example.md                     // 依赖测试示例
  |
  ├── // 配置
  ├── package.json                        // 依赖包
  ├── vue.config.js                       // vue配置
  ├── babel.config.js                     // 编译配置
  ├── proxy.config.js                     // 转发配置
  |
  ├── // 主要代码
  ├── public
  ├── src
  │   ├── App.vue
  │   ├── assets                          // 静态资源
  │   ├── components                      // 公共组件
  │   ├── main.js
  │   ├── router.js                       // 路由配置
  │   ├── ui                              // 公共样式
  │   │   ├── element
  │   │   │   ├── element-variables.scss  // ele主题样式
  │   │   │   └── element.js              // ele组件按需引入
  │   │   └── theme.scss                  // 自定义主题
  │   ├── utils                           // 公共方法
  │   └── views                           // 页面
  │       ├── About.vue
  │       └── Home.vue
  |
  ├── // 发布配置
  ├── build.sh                            // 打包命令
  ├── Dockerfile                          // docker设置
  ├── default.conf
  ├── nginx                               // 打包文件转发
  │   ├── app.conf
  │   └── default.conf
```
---
## views分级
  1. views下文件夹代表模块，以大写开头的名词命名，只能有一个单词（good：User Order）（bad: UserInfo）
  2. 模块下文件、文件夹代表页面，以大驼峰命名，以模块名开头（good：UserDetail UserInfo）（bad: User）。多个页面需要为每个页面新建文件夹，单一页面可不新建
  3. 页面如果需要拆分组件，需要在同级新建 `components` 文件夹，组件以小驼峰命名，以页面名开头（good: detailHeader detailInfo）（bad: UserDetailHeader ）
  4. components下文件夹代表组件名称，以小驼峰命名
  * src 结构示例
  ```js
    views                           // 文件
    ├── User                        // User模块
    |   └── UserInfo
    |       ├── UserInfo.vue        // UserInfo页面
    |       └── components          // UserInfo的组件
    |           ├── infoHeader.vue
    |           ├── infoMain.vue
    |           └── infoFooter.vue
    ├── Order
    |   └── OrderInfo.vue
    ├── Login.vue
    └── Home.vue
    components                      // 公共组件
    └── search
        └── search.vue
  ```
---
## vue 文件书写顺序
```js
  export default {
    name: 'PageName',
    components: {},
    props: {},
    data() {
      return {}
    },
    watch: {},
    computed: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    beforeRouteEnter() {},
    beforeRouteUpdate() {},
    beforeRouteLeave() {},
    directives: {},
    filter: {},
    methods: {},
  }
```


#### 缺陷及优化

* 前端
  - [x] `form-item`配置页面配置的字段名需要改为动态表名获取
  - [ ] `flm-page`插槽需要暴露至页面层
  - [ ] 配置层增加各组件配置校验
  - [ ] 集成`json`编辑器，增加复杂数据类型数据
  - [ ] 集成`code`编辑器，增加表单规则配置
  - [ ] `flm-table`表格无法动态高度的问题
  - [ ] `flm-table`表格超出宽度没有显示滚动条的问题
  - [ ] `flm-table`操作栏多个图标默认下拉菜单改为点击“更多”按钮后显示（蔡文姬）
  - [x] `flm-form`集成选择器、开关控件
  - [ ] `flm-form`集成其他控件
  - [x] 路由配置表单逻辑调整
  - [ ] 代码js、组件抽离，发布至npm
  - [ ] 平台与框架拆分发布至生产
  - [x] vuex改为仅缓存必要数据
  - [x] 路由请求两次的问题
  - [x] 路由参数改为隐式传参
  - [ ] tabs
  - [ ] pageSetting结构调整为vuex整体控制

---

* 后端
  - [ ] 菜单删除后接口依旧能获取
  - [ ] 配置后端存储层次不足
    * 例：权限控制中没有`flame_id`作为唯一标识，导致前端生成选项`value`值非唯一
  
  - [ ] 增加管理员账号，包含角色管理、用户管理页面及全部功能，该账号功能无法修改





1. 【前端】[配置（flame-setting）](https://uat.cn-major.cn/flame-frame-web#/login)；新建复制[框架（flame-dashboard）](https://uat.cn-major.cn/flame-dashboard#/login)项目
   * 期望使用`vue init`指令生成框架项目。[参考](https://github.com/vuejs-templates/webpack)
2. 【后端】通知后端新建应用
3. 【前端 - 配置】配置菜单
4. 【前端 - 配置】配置菜单对应页面（5个模块）
5. 【前端 - 框架】新增相应页面文件（新增相应方法及插槽）
6. 正常开发
