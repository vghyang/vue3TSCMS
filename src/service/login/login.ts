import hyRequest from '../index'
import { IAccount, IDataType } from './type'

enum LoginApi {
  LOGIN = '/login',
  USERINFO = '/users/',
  MENU = '/role'
}
export function accountLoginAxios(account: IAccount): Promise<IDataType> {
  return hyRequest.post<IDataType>({
    url: LoginApi.LOGIN,
    data: account
  })
}

export function accountUserInfoAxios(id: number): Promise<IDataType> {
  return hyRequest.get<IDataType>({
    url: LoginApi.USERINFO + id,
    showLoading: false
  })
}

export function accountMenusAxios(id: number): Promise<IDataType> {
  return hyRequest.get<IDataType>({
    url: `${LoginApi.MENU}/${id}/menu`,
    showLoading: false
  })
}
