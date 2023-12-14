<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
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
