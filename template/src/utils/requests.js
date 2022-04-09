import axios from "axios"

let requests = (requestData) => {
  return new Promise((resolve, reject) => {
    axios({
      // `url` 是用于请求的服务器 URL
      url: requestData.url || '/',

      // `method` 是创建请求时使用的方法
      method: requestData.method || 'get', // default

      // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
      // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
      baseURL: requestData.baseURL || null,

      // `headers` 是即将被发送的自定义请求头
      headers: requestData.headers || {'X-Requested-With': 'XMLHttpRequest'},

      // `data` 是作为请求主体被发送的数据
      // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
      // 在没有设置 `transformRequest` 时，必须是以下类型之一：
      // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
      // - 浏览器专属：FormData, File, Blob
      // - Node 专属： Stream
      data: requestData.data || {},

      // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
      // 如果请求话费了超过 `timeout` 的时间，请求将被中断
      timeout: requestData.timeout || 60 * 1000,

    })
      .then((res) => {
        resolve(res);
      })
      .catch(() => {
        reject(false);
      });
  })
}

export default requests
