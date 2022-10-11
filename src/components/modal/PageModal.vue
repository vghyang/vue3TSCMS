<template>
  <div class="modal">
    <el-dialog v-model="centerDialogVisible" title="新建用户" width="30%" center>
      <HyForm v-bind="modalConfigForm" v-model="formData"></HyForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, watch } from 'vue'
import HyForm from '@/base-ui/form'
import { IForm } from '@/base-ui/form/types'
const props = defineProps({
  modalConfigForm: {
    type: Object as PropType<IForm>,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  }
})
const centerDialogVisible = ref(false)

function changeVisible(isVisible: boolean) {
  centerDialogVisible.value = isVisible
}

//数据双向的绑定
const formData = ref({})
//监听defaultInfo的改变并初始化formdata
watch(
  () => props.defaultInfo,
  () => {
    formData.value = props.defaultInfo
  }
)

defineExpose({
  changeVisible
})
</script>

<style scoped></style>
