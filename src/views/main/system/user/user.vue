<template>
  <div class="user">
    <div class="serach">
      <Serach
        :serachConfigForm="serachConfigForm"
        @searchClickEmit="outHandelSearch($event)"
        @resetClickEmit="outHandelReset"
      ></Serach>
    </div>
    <div class="content">
      <TableContent
        :contentConfigTable="contentConfigTable"
        ref="refContent"
        @newClick="handelOutNewClick"
        @editClick="handelOutEditClick"
      >
        <template #enable="scope">
          <el-button :type="scope.row.enable === 1 ? 'success' : 'warning '"
            >{{ scope.row.enable === 1 ? '启用' : '禁用' }}
          </el-button>
        </template>
      </TableContent>
      <button @click="testClick">大按钮</button>
    </div>

    <PageModal
      :modalConfigForm="modalConfigRef"
      ref="modalRef"
      :defaultInfo="defaultInfo"
    ></PageModal>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, computed, reactive } from 'vue'
import { serachConfigForm } from './config/search.config'
import Serach from '@/components/serach/Serach.vue'
import { contentConfigTable } from './config/content.config'
import TableContent from '@/components/page-content/src/TableContent.vue'
import { modalConfigForm } from './config/modal.config'
import PageModal from '@/components/modal/PageModal.vue'

import usePageBtnSearch from '@/hooks/usePageBtnSearch'
import usePageModal from '@/hooks/usePageModal'

import { useStore } from '@/store'
//高级检索按钮功能
const results = usePageBtnSearch()
const refContent = results[0]
const outHandelSearch = results[1]
const outHandelReset = results[2]

//控制某个表单的显示和隐藏
const modalConfigRef = ref(modalConfigForm)

function controlInvisible(params: string) {
  const findItem = modalConfigRef.value.itemForm.find((item) => {
    return item.field === params
  })

  findItem!.isHidden = true
}
function controlvisible(params: string) {
  const findItem = modalConfigRef.value.itemForm.find((item) => {
    return item.field === params
  })
  findItem!.isHidden = false
}

//新建和编辑按钮功能
const { handelOutNewClick, handelOutEditClick, modalRef, defaultInfo } = usePageModal(
  controlvisible,
  controlInvisible,
  'password'
)

//部门和角色的select表单的处理
const store = useStore()

watchEffect(() => {
  // const itemForm = computed(() => {
  //   return props.modalConfigForm.itemForm
  // })

  function handelSelectOptions(storeDate: any, field: string) {
    const findFrom = modalConfigForm.itemForm.find((item) => {
      return item.field === field
    })
    const valueSelect = (store.state as any)[storeDate].map((item: any) => {
      return { title: item.name, value: item.id }
    })
    if (findFrom) {
      findFrom.selectOptions = valueSelect
    }
  }
  handelSelectOptions('roleList', 'role')
  handelSelectOptions('departmentList', 'department')
  console.log('watchfff')
})

//通过测试发现 watchEffect它没有深层次的监听，只能自动收集ref对象的依赖

// watchEffect(() => {
//   store.state.roleList
//   function test() {
//     const len = Object.keys(testRef.value).length
//     console.log(len)
//   }
//   test()
//   console.log('watch111改变')
// })
const testRef = ref<any>({ haha: 'haha', age: 19 })
const testClick = () => {
  testRef.value = { a: 1, b: 2, c: 3 }
}
</script>

<style scoped lang="less"></style>
