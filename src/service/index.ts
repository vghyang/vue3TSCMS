import localCache from '@/utils/localCache'
import { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios'
import HyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  myInterceptors: {
    requstInterceptor(config: AxiosRequestConfig) {
      //添加token到请求头
      const token = localCache.getCache('token')
      if (token) {
        const hear = config.headers as AxiosRequestHeaders
        hear['Authorization'] = `Bearer ${token}` //Beare不加空格还会报错
        console.log(hear)
        console.log('token加入')
      }
      console.log('拦截成公')
      return config
    },
    responseInterceptor(res: AxiosResponse) {
      console.log('响应拦截成功')
      return res
    }
  }
})
export default hyRequest
