<template>
  <div>
    <HyForm v-bind="serachConfigForm" v-model="inputValue">
      <template #title>
        <h2>高级检索</h2>
      </template>
      <template #footer>
        <el-button @click="handelResetClick">重置</el-button>
        <el-button type="primary" @click="handelSearchClick">搜索</el-button>
      </template>
    </HyForm>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue'
import HyForm from '@/base-ui/form'
import { IForm } from '@/base-ui/form/types'
const props = defineProps({
  serachConfigForm: {
    type: Object as PropType<IForm>,
    required: true
  }
})
const emits = defineEmits(['searchClickEmit', 'resetClickEmit'])
//双向绑定的数据改为动态处理
const dynamicValue: any = {}
const listForms = computed(() => props.serachConfigForm.itemForm)
for (const itemForm of listForms.value) {
  dynamicValue[itemForm.field] = undefined
}
let inputValue = ref(dynamicValue)

//重置按钮
const handelResetClick = () => {
  inputValue.value = dynamicValue
  emits('resetClickEmit', dynamicValue)
}
//搜索按钮
const handelSearchClick = () => {
  emits('searchClickEmit', inputValue.value)
}
</script>

<style scoped></style>
