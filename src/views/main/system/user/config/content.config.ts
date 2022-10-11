export const contentConfigTable: any = {
  propList: [
    { prop: 'name', label: '姓名', minWidth: '100px', slotName: 'name' },
    { prop: 'realname', label: '真实姓名', minWidth: '100px', slotName: 'realname' },
    { prop: 'cellphone', label: '手机号', minWidth: '100px', slotName: 'cellphone' },
    { prop: 'enable', label: '状态', minWidth: '100px', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '120px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120px', slotName: 'updateAt' },
    { label: '操作', minWidth: '120px', slotName: 'handel' }
  ],
  showIndexColumn: true,
  showSelectionColumn: true,
  pageName: 'users'
}
