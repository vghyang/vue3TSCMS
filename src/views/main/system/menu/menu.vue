<template>
  <div class="menu">
    <Serach
      :serachConfigForm="serachConfigForm"
      @searchClickEmit="outHandelSearch($event)"
      @resetClickEmit="outHandelReset"
    ></Serach>
    <TableContent :contentConfigTable="contentConfigTable" ref="refContent"> </TableContent>
  </div>
</template>

<script setup lang="ts">
import { serachConfigForm } from './config/search.config'
import Serach from '@/components/serach/Serach.vue'
import { contentConfigTable } from './config/content.config'
import TableContent from '@/components/page-content/src/TableContent.vue'
import usePageBtnSearch from '@/hooks/usePageBtnSearch'
const results = usePageBtnSearch()
const refContent = results[0]
const outHandelSearch = results[1]
const outHandelReset = results[2]
</script>

<style scoped></style>
