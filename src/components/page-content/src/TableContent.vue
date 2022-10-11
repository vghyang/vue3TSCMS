<template>
  <div>
    <TableList
      v-bind="contentConfigTable"
      :dataList="dataList"
      :dataCount="dataCount"
      v-model:page="pageQueryInfo"
    >
      <!-- 公共都有的插槽 -->
      <!-- header插槽 -->
      <template #headerHandel>
        <el-button v-if="isCreate" :icon="Plus" type="primary" @click="handelNewClick"
          >新建用户</el-button
        >
      </template>
      <!-- 表格插槽 -->

      <template #createAt="scope">
        <strong> {{ $filters.formatUtcTime(scope.row.createAt) }}</strong>
      </template>
      <template #updateAt="scope">
        <strong> {{ $filters.formatUtcTime(scope.row.updateAt) }}</strong>
      </template>
      <template #handel="scope">
        <el-button
          v-if="isUpdate"
          :icon="Edit"
          text
          type="primary"
          @click="handelEditClick(scope.row)"
          >编辑</el-button
        >
        <el-button
          v-if="isDelete"
          :icon="Delete"
          text
          type="primary"
          @click="handelDeleteClick(scope.row)"
          >删除</el-button
        >
      </template>

      <!-- 动态插槽 -->
      <template v-for="item in otherSlot" :key="item.prop" #[item.slotName]="scope">
        <template v-if="!item.sloName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </TableList>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import TableList from '@/base-ui/tables'
import { Edit, Delete, Plus } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'
import usePermissions from '@/hooks/usePermissions'
export default defineComponent({
  props: {
    contentConfigTable: {
      type: Object,
      required: true
    }
  },
  components: {
    TableList
  },
  emits: ['newClick', 'editClick'],
  setup(props, content) {
    const store = useStore()
    const pageName = computed(() => props.contentConfigTable.pageName)

    //获取按钮权限
    const allpermission = computed<string[]>(() => {
      return store.state.loginModule.permissions
    })
    enum Permissions {
      CREATE = 'create',
      UPDATE = 'update',
      DELETE = 'delete',
      QUERY = 'query'
    }
    const isCreate = usePermissions(pageName.value, Permissions.CREATE, allpermission.value)
    const isUpdate = usePermissions(pageName.value, Permissions.UPDATE, allpermission.value)
    const isDelete = usePermissions(pageName.value, Permissions.DELETE, allpermission.value)
    const isQuery = usePermissions(pageName.value, Permissions.QUERY, allpermission.value)

    //分页的双向绑定
    const filterValueDate = computed(() => store.state.stystemModule.filterQuery)
    const pageQueryInfo = ref({ currentPage: 1, size: 10 })
    watch(
      pageQueryInfo,
      () => {
        //此处需要完善，当进行搜索时，参数也因该传进来
        getPageData(filterValueDate.value)
      },
      { deep: true }
    )
    //进行数据表的请求
    const getPageData = (valueData?: any) => {
      if (!isQuery) return
      store.dispatch('stystemModule/getPageListActions', {
        pageName: pageName.value,
        queryInfo: {
          ...valueData,
          offset: (pageQueryInfo.value.currentPage - 1) * pageQueryInfo.value.size,
          size: pageQueryInfo.value.size
        }
      })
    }

    getPageData()
    //动态获取vuex里面得到的用户表数据
    const dataList = computed(() => store.getters['stystemModule/getDataList'](pageName.value))
    const dataCount = computed(() => store.getters['stystemModule/getDataCount'](pageName.value))

    //动态插槽的处理
    const otherSlot = (props.contentConfigTable.propList as any[]).filter((item) => {
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updateAt') return false
      if (item.slotName === 'handel') return false
      return true
    })

    // 删除/编辑操作
    const handelDeleteClick = (rowDate: any) => {
      console.log(rowDate)
      store.dispatch('stystemModule/deletePageDateAction', {
        pageName: pageName.value,
        id: rowDate.id
      })
    }
    const handelNewClick = () => {
      content.emit('newClick')
    }
    const handelEditClick = (itemDate: any) => {
      content.emit('editClick', itemDate)
    }
    return {
      dataList,
      getPageData,
      Edit,
      Delete,
      Plus,
      dataCount,
      pageQueryInfo,
      otherSlot,
      isCreate,
      isUpdate,
      isDelete,
      handelDeleteClick,
      handelNewClick,
      handelEditClick
    }
  }
})
</script>

<style scoped></style>
