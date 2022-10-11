<template>
  <div class="nav-header">
    <div class="back">
      <el-icon size="30px" @click="handelFole">
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <BreadCurmb :dataBread="dataBread"></BreadCurmb>
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserInfo from './cpns/UserInfo.vue'
import { ref, computed, reactive } from 'vue'
import BreadCurmb from '@/base-ui/breadcurmb'
import { mapRouterToBreadcurmbs } from '@/utils/map-router'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
const emits = defineEmits(['changeFold'])
//处理折叠点击
let isFold = ref(false)
const handelFole = () => {
  isFold.value = !isFold.value
  emits('changeFold', isFold.value)
}

//获取面包屑的数据
const store = useStore()
const route = useRoute()

const dataBread = computed(() => {
  const menus = store.state.loginModule.userMenu
  const currentPath = route.path
  return mapRouterToBreadcurmbs(menus, currentPath)
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
