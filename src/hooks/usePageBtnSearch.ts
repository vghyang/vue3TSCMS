import { ref } from 'vue'
import TableContent from '@/components/page-content/src/TableContent.vue'
function usePageBtnSearch(): [any, any, any] {
  //处理搜索和重置按钮
  const refContent = ref<InstanceType<typeof TableContent>>()
  const outHandelSearch = (valueData: any) => {
    refContent.value?.getPageData(valueData)
  }
  const outHandelReset = (valueData: any) => {
    refContent.value?.getPageData(valueData)
  }
  return [refContent, outHandelReset, outHandelSearch]
}
export default usePageBtnSearch
