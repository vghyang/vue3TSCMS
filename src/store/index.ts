import { StoreType } from './type'
import { createStore, Store, useStore as useStoreVue } from 'vuex'
import loginModule from './login/login'
import stystemModule from './main/stystem/stystem'
import { getUserInfoAxios } from '@/service/main/stystem/stystem'
const store = createStore({
  state() {
    return {
      roleList: [],
      departmentList: []
    }
  },
  modules: {
    loginModule,
    stystemModule
  },
  mutations: {
    changeRoleList(state, roleListData) {
      state.roleList = roleListData
    },
    changedepartmentList(state, departmentListData) {
      state.departmentList = departmentListData
    }
  },
  actions: {
    async getSeletActions(content) {
      const roleList = await getUserInfoAxios('/role/list', {
        offset: 0,
        size: 10000
      })

      const { list: roleListData } = roleList.data
      content.commit('changeRoleList', roleListData)
      const departmentList = await getUserInfoAxios('/department/list', {
        offset: 0,
        size: 10000
      })
      const { list: departmentListData } = departmentList.data
      content.commit('changedepartmentList', departmentListData)
    }
  }
})

// 初始化vuex的基本值
export function initState() {
  store.dispatch('loginModule/loadCache')
  store.dispatch('getSeletActions')
}

//自定义store类型
export function useStore(): Store<StoreType> {
  return useStoreVue<StoreType>()
}
export default store
