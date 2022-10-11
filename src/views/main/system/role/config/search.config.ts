import { IForm } from '@/base-ui/form/types'
export const serachConfigForm: IForm = {
  itemForm: [
    {
      field: 'role',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限选择',
      placeholder: '请输入权限'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      dataOptions: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: {
    padding: '5px 20px'
  },
  reactiveLayout: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: {
      span: 8
    },
    xl: 6
  }
}
