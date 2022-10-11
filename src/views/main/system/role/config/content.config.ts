export const contentConfigTable: any = {
  propList: [
    { prop: 'name', label: '姓名', minWidth: '100px', slotName: 'name' },
    { prop: 'intro', label: '权限', minWidth: '100px', slotName: 'intro' },
    { prop: 'createAt', label: '创建时间', minWidth: '120px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120px', slotName: 'handel' }
  ],
  showIndexColumn: true,
  showSelectionColumn: true,
  pageName: 'role'
}
