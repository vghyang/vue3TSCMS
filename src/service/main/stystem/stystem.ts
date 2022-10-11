import hyRequest from '@/service'
import { IDataType } from '@/service/login/type'
export function getUserInfoAxios(url: string, queryInfo: any) {
  return hyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

export function deleteDateAxios(url: string) {
  return hyRequest.deletE<IDataType>({
    url
  })
}
