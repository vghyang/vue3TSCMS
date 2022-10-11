<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :icon="UserFilled" :size="30" />
        {{ 'hy' }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="CircleClose">退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, CircleClose } from '@element-plus/icons-vue'
import { useStore } from '@/store'
const store = useStore()
//let name = store.state.loginModule.userInfo.name
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  .el-avatar {
    margin: 0 10px;
  }
}
</style>
