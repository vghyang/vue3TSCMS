<template>
  <div class="tab-list">
    <div class="header">
      <slot name="header">
        <h3>{{ title }}</h3>
        <div class="handel">
          <slot name="headerHandel"></slot>
        </div>
      </slot>
    </div>
    <el-table :data="dataList" :border="true" v-bind="childrenProps">
      <el-table-column v-if="showSelectionColumn" type="selection"></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        label="序号"
        type="index"
        width="55px"
        align="center"
      ></el-table-column>
      <template v-for="item in propList" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
          align="center"
          show-overflow-tooltip
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <div class="page">
          <el-pagination
            small="small"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.currentPage"
            :page-sizes="[10, 20, 30]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="dataCount"
          />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
const props = defineProps({
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectionColumn: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '用户列表'
  },
  propList: {
    type: Array as PropType<any[]>
  },
  dataList: {
    type: Object,
    required: true
  },
  dataCount: {
    type: Number,
    default: 0
  },
  page: {
    type: Object,
    required: true
  },
  childrenProps: {
    type: Object,
    default: () => ({})
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})
const emits = defineEmits(['update:page'])
// 分页器事件处理
const handleSizeChange = (size: number) => {
  emits('update:page', { ...props.page, size })
  console.log(size)
}
const handleCurrentChange = (currentPage: number) => {
  //
  emits('update:page', { ...props.page, currentPage })
}
</script>

<style scoped lang="less">
.tab-list {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page {
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
}
</style>
