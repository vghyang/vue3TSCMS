import { IForm } from '@/base-ui/form/types'
export const modalConfigForm: IForm = {
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
      field: 'password',
      type: 'input',
      label: '密码',
      placeholder: '请输入密码',
      isHidden: true
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'role',
      type: 'select',
      label: '角色选择',
      selectOptions: []
    },
    {
      field: 'department',
      type: 'select',
      label: '部门选择',
      selectOptions: []
    }
  ],
  labelWidth: '100px',
  itemStyle: {
    padding: '5px 20px'
  },
  reactiveLayout: {
    span: 24
  }
}
