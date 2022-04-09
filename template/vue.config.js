const path = require('path')
const defaultSettings = require('./src/settings.js')
const ESLintPlugin = require('eslint-webpack-plugin');

const resolve = dir => path.join(__dirname, dir)

const name = defaultSettings.title ||
  process.env.VUE_APP_PLATFORM_NAME_EN_ABBREVIATION || '' // page title

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

const isProduction = process.env.NODE_ENV !== 'development'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/flame-dashboard' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,          // 保存时语法检查
  productionSourceMap: false, // Source Map
  devServer: {
    // 代理配置
    proxy: require('./proxy.config'),
    // 热更新
    hot: true,
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    //关闭 webpack 的性能提示
    performance: {
      hints: false,
    },
    plugins: [new ESLintPlugin({})],
  },
  chainWebpack (config) {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module.rule('icons').
      test(/\.svg$/).
      include.
      add(resolve('src/icons')).
      end().
      use('svg-sprite-loader').
      loader('svg-sprite-loader').
      options({
        symbolId: 'icon-[name]',
      }).
      end()

    config.when(isProduction,
      config => {
        config.plugin('ScriptExtHtmlWebpackPlugin').
          after('html').
          use('script-ext-html-webpack-plugin', [
            {
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/,
            }]).
          end()
        config.optimization.splitChunks({
          chunks: 'all', // 代码块类型 必须三选一： "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
          minSize: 0, // 最小尺寸，默认0
          minChunks: 1, // 最小 chunk ，默认1
          maxAsyncRequests: 1, // 最大异步请求数， 默认1
          maxInitialRequests: 1, // 最大初始化请求书，默认1
          name: () => {}, // 名称，此选项可接收 function
          cacheGroups: { // 缓存组会继承splitChunks的配置，但是test、priorty和reuseExistingChunk只能用于配置缓存组。
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial', // only package third parties that are initially dependent
            },
            elementUI: {
              name: 'chunk-elementUI', // split elementUI into a single package
              priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
              test: /[\\/]node_modules[\\/]_?element-ui(.*)/, // in order to adapt to cnpm
            },
            commons: {
              name: 'chunk-commons',
              test: resolve('src/components'), // can customize your rules
              minChunks: 3, //  minimum common number
              priority: 5,
              reuseExistingChunk: true,
            },
          },
        })
        // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
        config.optimization.runtimeChunk('single')
      },
    )
  },

  css: {
    loaderOptions: {
      sass: {
        // prependData: `@import "@/ui/theme.scss";`,
      },
    },
  },
}
