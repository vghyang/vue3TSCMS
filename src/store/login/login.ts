import { Module } from 'vuex'
import { IloginState } from './type'
import { IRootState } from '../type'
import { accountLoginAxios, accountUserInfoAxios, accountMenusAxios } from '@/service/login/login'
import type { IAccount } from '@/service/login/type'
import type { IDataType } from '@/service/login/type'
import localCache from '@/utils/localCache'
import mapRoutersToMenu from '@/utils/map-router'
import router from '@/router'
import { getAllPermission } from '@/utils/map-router'
const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenu: '',
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userinfo) {
      state.userInfo = userinfo
    },
    changeMenu(state, menu) {
      state.userMenu = menu

      //获取要添加的路由
      const routes = mapRoutersToMenu(menu)
      //遍历动态添加
      routes.forEach((route) => {
        router.addRoute('main', route)
      })

      //获取所有的权限按钮
      const allPermissionBtn = getAllPermission(menu)
      state.permissions = allPermissionBtn
    }
  },
  actions: {
    async accountLoginActive({ commit }, payload: IAccount) {
      //实现登录逻辑
      const accountRes: IDataType = await accountLoginAxios(payload)
      const { id, token } = accountRes.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      //用户信息
      const userinfo = await accountUserInfoAxios(id)
      commit('changeUserInfo', userinfo.data)
      localCache.setCache('userInfo', userinfo.data)
      // 用户菜单
      const menus = await accountMenusAxios(userinfo.data.role.id)
      commit('changeMenu', menus.data)
      localCache.setCache('menu', menus.data)
      //跳到首页
      router.push('/main')
    },
    //刷新后加载cache
    loadCache(context) {
      const token = localCache.getCache('token')
      if (token) context.commit('changeToken', token)
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) context.commit('changeUserInfo', userInfo)
      const menu = localCache.getCache('menu')
      if (token) context.commit('changeMenu', menu)
    }
  }
}
export default loginModule
