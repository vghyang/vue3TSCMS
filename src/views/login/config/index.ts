import type { FormRules } from 'element-plus'
import { reactive } from 'vue'
//校验规则
export const rules = reactive<FormRules>({
  name: [
    { required: true, message: '必须填写用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}$/, message: '用户名必须是5-10个字母或者数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须填写密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{3,}$/, message: '密码必须三个数以上', trigger: 'blur' }
  ]
})
