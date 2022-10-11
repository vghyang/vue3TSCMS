import { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HyInterceptors<T = AxiosResponse> {
  requstInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}
interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  myInterceptors?: HyInterceptors<T>
  showLoading?: boolean
}

export { HyRequestConfig, HyInterceptors }
