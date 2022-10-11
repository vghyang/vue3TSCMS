import { Module } from 'vuex'
import { IStystemState } from './type'
import { IRootState } from '@/store/type'
import { getUserInfoAxios, deleteDateAxios } from '@/service/main/stystem/stystem'
const stystemModule: Module<IStystemState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      filterQuery: {},
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: []
    }
  },
  getters: {
    getDataList(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },
    getDataCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    //请求数据表搜索过滤的参数
    getFilterPageQuery(state, payload) {
      console.log(payload)

      state.filterQuery = payload
    },
    //用户管理
    changeDataUsers(state, dataList: any[]) {
      state.usersList = dataList
    },
    changeDataUsersCount(state, dataCount: number) {
      state.usersCount = dataCount
    },
    //角色管理
    changeDataRole(state, dataList: any[]) {
      state.roleList = dataList
    },
    changeDataRoleCount(state, dataCount: number) {
      state.roleCount = dataCount
    },
    //商品管理
    changeDataGoods(state, dataList: any[]) {
      state.goodsList = dataList
    },
    changeDataGoodsCount(state, dataCount: number) {
      state.goodsCount = dataCount
    },
    //菜单管理
    changeDataMenu(state, dataList: any[]) {
      state.menuList = dataList
    }
  },
  actions: {
    //获取用户数据表
    async getPageListActions({ commit }, payload: any) {
      //动态拿到pagename
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      const dataList = await getUserInfoAxios(pageUrl, payload.queryInfo)
      //获取搜索的参数存到Vuex
      commit('getFilterPageQuery', payload.queryInfo)
      console.log(payload.queryInfo)

      const { list, totalCount } = dataList.data
      //判断pageName是否有值，进行范围缩小
      if (pageName) {
        const finalName =
          (pageName as string).slice(0, 1).toUpperCase() + (pageName as string).substring(1)
        commit(`changeData${finalName}`, list)

        if (totalCount) {
          commit(`changeData${finalName}Count`, totalCount)
        }
      }
    },

    //2.删除某个数据
    async deletePageDateAction(content, payload: any) {
      const pageName = payload.pageName
      const id = payload.id
      const pageUrl = `${pageName}/${id}`
      await deleteDateAxios(pageUrl)

      const queryInfo = content.state.filterQuery

      //重新请求数据
      content.dispatch('getPageListActions', {
        pageName,
        queryInfo
      })
    }
  }
}
export default stystemModule
