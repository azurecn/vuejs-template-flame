import flmRequests from '@/utils/flmRequests'

export default ({
    serverName,
    url =  '/',                                                   // 路由
    timeout = 60 * 1000,                                          // 超时时长
    header = {'Content-Type': 'application/json;charset=utf-8'},  // 请求头
    method = 'POST',                                              // 请求方式
    data = {},                                                    // 请求数据
    showLoading = true,                                           // 显示加载提示
  }) => {
    return new Promise((resolve, reject) => {
      flmRequests({
        serverName,
        url,
        timeout,
        header,
        method,
        data,
        showLoading
      })
      .then(res => {
        resolve(res)
      })
      .catch(() => {
        reject()
      })
    })
}
