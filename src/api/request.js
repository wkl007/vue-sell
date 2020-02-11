import axios from 'axios'

const service = axios.create({
  baseURL: 'https://vue-sell-1256738511.cos.ap-chengdu.myqcloud.com/', // api的base_url
  timeout: 5000, // request timeout
})

// http 请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// http 响应拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 1) {
    return res.data
  }
}, error => {
  return Promise.reject(error)
})

export default service
