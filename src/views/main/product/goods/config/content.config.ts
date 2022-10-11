export const contentConfigTable: any = {
  title: '商品列表',
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100px', slotName: 'name' },
    { prop: 'oldPrice', label: '原价格', minWidth: '100px', slotName: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '100px', slotName: 'newPrice' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '120px', slotName: 'imgUrl' },
    { prop: 'status', label: '状态', minWidth: '100px', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '120px', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120px', slotName: 'updateAt' },
    { label: '操作', minWidth: '180px', slotName: 'handel' }
  ],
  showIndexColumn: true,
  showSelectionColumn: true,
  pageName: 'goods'
}
