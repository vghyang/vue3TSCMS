<template>
  <div class="loginPanel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="tabs" stretch v-model="currentCard">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <account-login ref="accountRef"></account-login>
      </el-tab-pane>
      <el-tab-pane name="iphone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <iphone-login></iphone-login>
      </el-tab-pane>
    </el-tabs>
    <div class="bottom">
      <el-checkbox v-model="isForgetPwd">记住密码</el-checkbox>
      <el-link>忘记密码</el-link>
    </div>
    <el-button type="primary" class="link" @click="handelLink">立即登录</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AccountLogin from './AccountLogin.vue'
import IphoneLogin from './IphoneLogin.vue'
export default defineComponent({
  components: {
    AccountLogin,
    IphoneLogin
  },
  setup() {
    //记住密码布尔值
    let isForgetPwd = ref(true)
    //账号组件的ref对象
    const accountRef = ref<InstanceType<typeof AccountLogin>>()
    //切换选项卡
    let currentCard = ref('account')
    //登陆调用账号组件的登陆
    const handelLink = () => {
      if (currentCard.value === 'account') {
        accountRef.value?.loginActive(isForgetPwd.value)
      } else {
        console.log('手机号登陆')
      }
    }
    return {
      isForgetPwd,
      handelLink,
      accountRef,
      currentCard
    }
  }
})
</script>

<style scoped lang="less">
.loginPanel {
  position: relative;
  .title {
    text-align: center;
  }
  .tabs {
    width: 320px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .link {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
