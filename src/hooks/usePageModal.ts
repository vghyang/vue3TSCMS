import PageModal from '@/components/modal/PageModal.vue'
import { ref } from 'vue'
type callbackFn = (parmas: string) => void
function usePageModal(callbackVisble: callbackFn, callbackInvisible: callbackFn, field: string) {
  //新建和编辑按钮
  const modalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref()
  const handelOutNewClick = () => {
    if (modalRef.value) {
      modalRef.value.changeVisible(true)
    }
    defaultInfo.value = {}

    callbackVisble && callbackVisble(field)
  }
  const handelOutEditClick = (valueData: any) => {
    defaultInfo.value = { ...valueData }

    if (modalRef.value) {
      modalRef.value.changeVisible(true)
    }
    callbackInvisible && callbackInvisible(field)
  }
  return { handelOutNewClick, handelOutEditClick, modalRef, defaultInfo }
}
export default usePageModal
