<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isCollapse ? '60px' : '200px'" class="aside">
        <NavMenu :isCollapse="isCollapse"></NavMenu>
      </el-aside>
      <el-container calss="page">
        <el-header class="page-header" height="48px">
          <NavHeader @changeFold="handelIsFold"></NavHeader>
        </el-header>
        <el-main class="page-container">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <test :propsTest="propsTest"></test>
  </div>
</template>

<script setup lang="ts">
import { NavMenu } from '@/components/nav-menu'
import { NavHeader } from '@/components/nav-header'
import { ref } from 'vue'
import test from './test.vue'
let isCollapse = ref(false)
const handelIsFold = (value: boolean) => {
  isCollapse.value = value
}
const propsTest = ref({ name: 'hy', age: 18 })
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .main-container {
    height: 100%;
    .aside {
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #001529;
      transition: width 0.3s ease-in;
    }
  }
}
.page-header {
  display: flex;
  color: #333;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.page-container {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
  .page-info {
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
