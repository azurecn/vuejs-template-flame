import requests from './requests'
import {
  Message,
  Loading
} from 'element-ui';

export default ({
  serverName = process.env.VUE_APP_SERVICE_NAME,                // 服务名
  url =  '/',                                                   // 路由
  timeout = 1000 * 60,                                          // 超时时长
  header = {'Content-Type': 'application/json;charset=utf-8'},  // 请求头
  method = 'POST',                                              // 请求方式
  data = {},                                                    // 请求数据
  showLoading = true,                                           // 显示加载提示
}) => {
  let loading = showLoading ? Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, .7)'
  }) : null
  return new Promise((resolve, reject) => {
    requests({
      url: serverName + url,
      timeout,
      header,
      method,
      data,
    })
      .then((res) => {
        if (showLoading) loading.close()
        if (res.data.return_code === 0) {
          resolve(res.data.data);
        } else {
          Message.warning(res.data.return_msg)
        }
      })
      .catch(() => {
        if (showLoading) loading.close()
        Message.warning('网络超时，请稍后再试')
        reject()
      });
  })
}
