<template>
  <div class="iphone">
    <el-form :model="iphone" :rules="rules">
      <el-form-item label="手机号" prop="pNum">
        <el-input v-model="iphone.pNum" />
      </el-form-item>
      <div class="get-code">
        <el-form-item label="验证码" prop="code">
          <el-input type="number" v-model="iphone.code" />
        </el-form-item>
        <el-button type="primary">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const iphone = reactive({
      pNum: '',
      code: ''
    })

    const rules = {
      pNum: [
        { required: true, message: '请输入手机号', trigger: 'blur' },
        { pattern: /^[0-9]{5,10}$/, message: '手机号必须是数字', trigger: 'blur' }
      ],
      code: [
        { required: true, message: '请输入验证码', trigger: 'blur' },
        { pattern: /^[a-z0-9]{3,}$/, message: '验证码必须三个数以上', trigger: 'blur' }
      ]
    }
    return {
      iphone,
      rules
    }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
}
</style>
