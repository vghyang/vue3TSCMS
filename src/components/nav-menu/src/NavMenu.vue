<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~assets/img/logo.svg" alt="" />
      <span v-show="!isCollapse">导航中心</span>
    </div>
    <el-menu
      background-color="#001529"
      text-color="#b7bdc3"
      :default-active="currentIndex"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
    >
      <template v-for="(menu, index) in menuList" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-sub-menu :index="menu.id + ''" class="el-sub">
            <template #title>
              <el-icon>
                <component :is="mapIcon[index]"></component>
              </el-icon>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="item in menu.children" :key="item.id">
              <el-menu-item :index="item.id + ''" class="el-item" @click="handelToRouter(item)">
                <template #title>{{ item.name }}</template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="menu.type === 2">
          <el-menu-item>
            <template #title>{{ menu.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { mapRouterToMenu } from '@/utils/map-router'
//store
const store = useStore()
const menuList = computed(() => store.state.loginModule.userMenu)
//router
const router = useRouter()
const route = useRoute()
//porps
const porps = defineProps({
  isCollapse: Boolean
})

//icon
const mapIcon = (menuList.value as any[]).map((item) => {
  return item.icon.substr(8)
})

//data

let currentPath = route.path
const menu = mapRouterToMenu(menuList.value, currentPath)
const currentIndex = ref(menu.id + '')

//event handel
const handelToRouter = (itemMenu: any) => {
  router.push(itemMenu.url)
}
</script>

<style scoped lang="less">
.el-menu {
  border-right: 0;
}
.logo {
  height: 28px;
  display: flex;
  justify-content: flex-start;
  padding: 10px 10px;
  align-items: center;
  color: #fff;
  img {
    object-fit: cover;
    height: 100%;
    margin: 0 10px;
  }
  span {
    white-space: nowrap;
  }
}

.el-sub {
  background-color: #001529;
  .el-item {
    background-color: #0c2132;
  }
}
.el-item:hover {
  background-color: #0a60bd;
}
</style>
