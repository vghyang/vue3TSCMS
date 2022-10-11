<template>
  <div class="role">
    <Serach :serachConfigForm="serachConfigForm"></Serach>
    <TableContent :contentConfigTable="contentConfigTable"></TableContent>
  </div>
</template>

<script lang="ts" setup>
import Serach from '@/components/serach/Serach.vue'
import { serachConfigForm } from './config/search.config'
import TableContent from '@/components/page-content/src/TableContent.vue'
import { contentConfigTable } from './config/content.config'
</script>

<style scoped></style>
