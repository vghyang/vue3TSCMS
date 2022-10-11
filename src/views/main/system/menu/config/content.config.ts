export const contentConfigTable: any = {
  title: '菜单列表',
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100px', slotName: 'name' },
    { prop: 'type', label: '类型', minWidth: '100px', slotName: 'type' },
    { prop: 'url', label: '菜单url', minWidth: '100px', slotName: 'cellphone' },
    { prop: 'permission', label: '按钮权限', minWidth: '100px', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '120px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120px', slotName: 'updateAt' }
  ],
  showIndexColumn: false,
  showSelectionColumn: false,
  pageName: 'menu',
  childrenProps: {
    rowKey: 'id',
    treeProp: { children: 'children' }
  },
  showFooter: false
}
