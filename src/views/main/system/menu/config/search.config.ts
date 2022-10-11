import { IForm } from '@/base-ui/form/types'
export const serachConfigForm: IForm = {
  itemForm: [
    {
      field: 'name',
      type: 'input',
      label: '用户',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'enable',
      type: 'select',
      label: '状态',
      selectOptions: [
        { title: '启用', value: '1' },
        { title: '禁用', value: '0' }
      ]
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
