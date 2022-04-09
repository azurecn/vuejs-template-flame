/**
 * 代理配置
 * @description
 * 具体配置项参考：https://cli.vuejs.org/zh/config/#devserver-proxy
 */

module.exports = {
  // 普通的接口代理
  // proxy all requests starting with /api to jsonplaceholder
  "/openapi-service": {
    target: process.env.VUE_APP_DOMAIN_NAME, //代理接口
    changeOrigin: true,
    onProxyReq: function(proxyReq, req, res) {
      //实在不知道代理后的路径，可以在这里打印出出来看看
      // console.log("req", req);
      console.log("res", res);
      console.log("原路径：" + req.originalUrl, "代理路径：" + req.path);
      console.log("proxyReq。host", proxyReq.host);
    }
  },
  "/project-service": {
    target: process.env.VUE_APP_DOMAIN_NAME, //代理接口
    changeOrigin: true,
    onProxyReq: function(proxyReq, req, res) {
      //实在不知道代理后的路径，可以在这里打印出出来看看
      // console.log("req", req);
      console.log("res", res);
      console.log("原路径：" + req.originalUrl, "代理路径：" + req.path);
      console.log("proxyReq。host", proxyReq.host);
    }
  },
};
