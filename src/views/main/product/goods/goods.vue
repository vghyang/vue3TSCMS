<template>
  <div class="goods">
    <Serach
      :serachConfigForm="serachConfigForm"
      @searchClickEmit="outHandelSearch($event)"
      @resetClickEmit="outHandelReset"
    ></Serach>
    <TableContent :contentConfigTable="contentConfigTable" ref="refContent">
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
        />
      </template>

      <template #status="scope">
        <el-button :type="changeType(scope.row)"
          >{{ scope.row.status === 1 ? '启用' : '禁用' }}
        </el-button>
      </template>
    </TableContent>
  </div>
</template>

<script lang="ts" setup>
import Serach from '@/components/serach/Serach.vue'
import { serachConfigForm } from './config/search.config'
import TableContent from '@/components/page-content/src/TableContent.vue'
import { contentConfigTable } from './config/content.config'
import usePageBtnSearch from '@/hooks/usePageBtnSearch'
const changeType = (rowData: any) => {
  if (rowData.status === 1) {
    return 'success '
  } else {
    return 'warning'
  }
}
const results = usePageBtnSearch()
const refContent = results[0]
const outHandelSearch = results[1]
const outHandelReset = results[2]
</script>

<style scoped></style>
