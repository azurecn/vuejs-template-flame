## flame脚手架
#### 版本号：1.0.0
---
## Vue相关
1. 脚手架（vue-cli）
    * 安装 vue-cli 3.0.4
    ```
    yarn global add @vue/cli@3.0.4
    ```
    * 如果安装错误，请尝试卸载旧版本
    ```
    //卸载3.0之前的版本
    npm uninstall -g vue-cli
    yarn global remove vue-cli

    //卸载3.0之后的版本（可以统一使用此指令卸载）
    npm uninstall -g @vue/cli
    yarn global remove @vue/cli
    ```

2. 路由（vue-router）
    * 安装 vue-router
    ```
    vue add router
    ```

3. vuex
    * 安装 vuex
    ```
    yarn add vuex
    ```

4. scss
    * 注：`node-sass@ 和 scss-loader@node-sass@4.14.1 为兼容版本，请勿随意变更版本`
    ```
    // 安装 node-sass@4.14.1
    yarn add node-sass@4.14.1

    // 安装 scss-loader
    yarn add sass-loader@7.x
    ```
---
## 常用依赖
1. 网络请求（axios）
    ```
    yarn add axios
    ```
    * 文档(http://www.axios-js.com/)
    * 添加 `vue.config.js` 和 `proxy.config.js` 文件

2. 时间处理JS库（dayjs）
    ```
    yarn add dayjs
    ```
    * 文档(https://dayjs.fenxianglu.cn/)

3. JS工具库（loadsh）
    ```
    yarn add loadsh
    ```
    * 文档(https://www.lodashjs.com/)

4. 数字格式化JS库（numeral）
    ```
    yarn add numeral
    ```
    * 文档(http://numeraljs.com/)

5. md文档组件（mavon-editor）
    ```
    yarn add mavon-editor
    ```
    * 文档(https://www.npmjs.com/package/mavon-editor)
---
## 饿了吗组件库
1. 组件库（element-ui）
    ```
    yarn add element-ui
    ```
    * 文档(https://element.eleme.cn/#/zh-CN)
2. 按需引入插件（babel-plugin-component）
    ```
    yarn add babel-plugin-component
    ```
3. 修改 `babel.config.js` 文件，官方教程(https://element.eleme.cn/#/zh-CN/component/quickstart)
    ```
    module.exports = {
        presets: ["@vue/app"],
        plugins: [
            [
                "component",
                {
                    libraryName: "element-ui",
                    styleLibraryName: "theme-chalk"
                }
            ]
        ]
    }
    ```
4. 创建ui文件夹，添加按需引入文件 `element.js` 和主题样式文件 `element-variables.scss`
5. `main.js` 引入文件
    ```
    import "./ui/element/element";
    import './ui/element/element-variables.scss'
    ```
---
## 全局配置
1. 添加全局变量配置文件
    | 文件名 | 作用范围 |
    | -- | -- |
    | .env | 全局默认配置文件，不论什么环境都会加载合并 |
    | .env.development | 开发环境下的配置文件 |
    | .env.production | 生产环境下的配置文件 |
    * 关于文件名：`必须以如上方式命名，不要乱起名，也无需专门手动控制加载哪个文件`
    * 当多个文件配置内容重复时，会根据当前运行环境优先级使用对应文件配置

2. 全局SCSS配置
    * 安装 `sass-resources-loader` 预加载插件
    * ui 文件夹下添加全局 scss 文件 `theme.scss`
    * `vue.config.js` 中添加配置，注：sass-loader 版本高于 8.0 时 `data` 需要改为 `prependData`
    ```
    module.exports = {
        css: {
            loaderOptions: {
                sass: {
                    data: `@import "@/ui/theme.scss";`,
                },
            },
        },
    }
    ```
---
## 发布文件
1. 添加发布相关文件
    * 发布需要修改文件如下，注：`nginx/default.conf 配置项目路由和 vue.config.js 生产环境项目路由需保持一致，否则转发错误项目发布失败`。
    ```
    // build.sh
    IMAGE_NAME=[镜像名称]:[版本号]

    // nginx/default.conf
    location /[项目路由] {
        proxy_pass http://localhost:80/;
    }

    // vue.config.js
    publicPath: process.env.NODE_ENV === 'production' ? [生产环境项目路由] : '/',
    ```
