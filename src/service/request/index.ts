import axios, { AxiosInstance } from 'axios'
import type { HyRequestConfig, HyInterceptors } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

class HyRequest {
  instance: AxiosInstance //添加axios实列
  interceptors?: HyInterceptors //添加实列拦截器函数
  isLoading: boolean
  constructor(config: HyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.myInterceptors
    //默认情况添加loading
    this.isLoading = config.showLoading ?? true
    //添加对应的实列的拦截器函数到对应实列中
    this.instance.interceptors.request.use(
      this.interceptors?.requstInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //给所有的实列的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('默认请求拦截器成功')
        if (this.isLoading) {
          ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0,.5)',
            text: '玩命加载中...'
          })
        }

        return config
      },
      (err) => {
        console.log('默认请求拦截器失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('默认响应拦截器请求成功')
        //响应后关闭loding
        ElLoading.service().close()
        return res.data
      },
      (err) => {
        console.log('默认响应拦截器请求失败')
        //响应后关闭loding
        ElLoading.service().close()
        return err
      }
    )
  }

  requests<T>(config: HyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单独请求的数据处理
      if (config.myInterceptors?.requstInterceptor) {
        config = config.myInterceptors.requstInterceptor(config)
      }
      //单独的请求控制该次的请求loading
      if (config.showLoading === false) {
        this.isLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.myInterceptors?.responseInterceptor) {
            res = config.myInterceptors.responseInterceptor(res)
          }
          //loading的开关回复默认值
          this.isLoading = true
          resolve(res)
        })
        .catch((err) => {
          this.isLoading = true
          reject(err)
        })
    })
  }
  get<T>(config: HyRequestConfig<T>) {
    return this.requests<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HyRequestConfig<T>) {
    return this.requests<T>({ ...config, method: 'post' })
  }
  deletE<T>(config: HyRequestConfig<T>) {
    return this.requests<T>({ ...config, method: 'DELETE' })
  }
}

export default HyRequest
