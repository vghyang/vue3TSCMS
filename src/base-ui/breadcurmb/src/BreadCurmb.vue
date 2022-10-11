<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in dataBread" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IDataBread } from '../'
const porps = defineProps({
  dataBread: {
    type: Array as PropType<IDataBread[]>,
    default: () => []
  }
})
</script>

<style scoped></style>
