<template lang="pug">
#login-box-container
  q-btn#cancel-login(size="xl" @click="$emit('cancel-login')", icon="close", flat, round, dense)
  .row.flex.flex-center.fluid
    .rwd-flexbox.flex-start-center
      h2.fluid.text-center.bold {{$t('Login')}}
      q-form(@submit.prevent="login")
        div
          label(for="username") Username:
          input#username(type="text", v-model="username")
        div
          label(for="password") Password:
          input#password(type="password", v-model="password")
        .small-space
        .flex.flex-center
          q-btn-group.flex.flex-center(push)
            q-btn(push, type="submit", color="primary") Login
            q-btn(push, color="secondary") Register
      p(v-if="errorMessage", style="color: red") {{ errorMessage }}

</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginComponent",
  setup() {
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");

    function login() {
      // 在這裡添加你的登錄邏輯
      if (
        username.value === "yourUsername" &&
        password.value === "yourPassword"
      ) {
        // 登錄成功，可以導航到其他頁面或執行其他操作
        errorMessage.value = "";
        // 例如，導航到首頁
        // this.$router.push("/");
      } else {
        // 登錄失敗，顯示錯誤消息
        errorMessage.value = "帳號或密碼不正確";
      }
    }

    return {
      username,
      password,
      errorMessage,
      login,
    };
  },
};
</script>

<style scoped>
#cancel-login {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  border-radius: 50%;
  border: 3px solid white;
  background-color: red;
}

#login-box-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999 !important;
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(199, 199, 199, 0.82);
}
</style>
