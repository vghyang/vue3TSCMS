<template>
  <div class="account">
    <el-form :rules="rules" :model="account" ref="form">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/index'
import { ElForm } from 'element-plus'
import localCache from '@/utils/localCache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const form = ref<InstanceType<typeof ElForm>>()
    //登陆
    const loginActive = (isForgetPwd: boolean) => {
      form.value?.validate((isValid) => {
        if (isValid) {
          //判断记住密码
          if (isForgetPwd) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.clearCache()
          }
          //登陆请求
          store.dispatch('loginModule/accountLoginActive', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginActive,
      form
    }
  }
})
</script>

<style scoped></style>
