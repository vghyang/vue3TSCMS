<template>
  <div class="hy-form">
    <div class="title">
      <slot name="title"> </slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in itemForm" :key="index">
          <el-col v-bind="reactiveLayout">
            <el-form-item :label="item.label" :style="itemStyle" v-if="!item.isHidden">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handelModelValue($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handelModelValue($event, item.field)"
                >
                  <el-option
                    v-for="itemSlect in item.selectOptions"
                    :key="itemSlect.value"
                    :value="itemSlect.value"
                    :label="itemSlect.title"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.dataOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handelModelValue($event, item.field)"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IFormItem } from '../types'
const props = defineProps({
  itemForm: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({
      padding: '5px 15px'
    })
  },
  reactiveLayout: {
    type: Object,
    default: () => ({
      xs: 24,
      sm: 24,
      md: 12,
      lg: {
        span: 8
      },
      xl: 6
    })
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})
const emits = defineEmits(['update:modelValue'])
// const dataForm = computed({
//   get() {
//     return props.modelValue
//   },
//   set(newValue) {
//     emit('updata:modelValue', newValue)
//   }
// })

//数据传输方法（有错）
// const dataForm = computed(() => ({ ...props.modelValue }))
// watch(
//   () => dataForm.value,
//   (newValue) => {
//     emits('update:modelValue', newValue)
//   },
//   { deep: true }
// )
// console.log(props)

//第二种方法数据传输方法
const handelModelValue = (value: any, field: string) => {
  emits('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style scoped lang="less">
.hy-form {
  padding: 22px 0 0 0;
}
.title {
  color: skyblue;
}
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
}
</style>
