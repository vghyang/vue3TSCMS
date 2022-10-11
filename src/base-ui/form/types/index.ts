type FormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  type: FormType
  label?: string
  placeholder?: string
  selectOptions?: any[]
  dataOptions?: any
  rule?: any[]
  field: string
  isHidden?: boolean
}

export interface IForm {
  itemForm: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  reactiveLayout?: any
}
