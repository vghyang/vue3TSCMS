<template>
  <div class="el-test" v-bind="obj">
    <input type="text" v-model="propsRe.name" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed, PropType } from 'vue'

const props = defineProps({
  propsTest: Object as PropType<any>
})
const propsRe = computed({
  get: () => ({ ...props.propsTest }),
  set: (newValue) => {
    console.log(newValue)
  }
})
watch(
  propsRe,
  (newvalue) => {
    console.log(newvalue)
  },
  { deep: true }
)

const obj = {
  class: {
    active: true
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
