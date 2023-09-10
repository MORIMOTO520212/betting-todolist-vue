<script setup lang="ts">
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const axios: any = inject("axios");
const store = useStore();
const router = useRouter();

const email = ref(undefined);
const passwd = ref(undefined);

const login = () => {
  console.log("ログイン処理");
  console.log("メールアドレス", email.value);
  console.log("パスワード", passwd.value);
  const data = JSON.stringify({
    user: {
      email: "example1@.com",
      password: "password",
    },
  });
  const options = {
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": store.state.api.csrfToken,
    },
  };
  // ユーザー認証
  axios.post(store.state.api.signInUrl, data, options).then((response: any) => {
    if (response.status === 200) {
      console.log("Request Succeeded.");
      console.log(response.data);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("passwd", "");
      localStorage.setItem(
        "authenticationToken",
        response.data.authentication_token
      );
    }
  });
  // ホーム画面に遷移
  router.push({ name: "Home" });
};
</script>
<template>
  <div class="main-container">
    <main>
      <div class="container h-100">
        <div class="row login-title">
          <div class="d-flex justify-content-center align-items-center">
            <h3>ログイン</h3>
          </div>
        </div>
        <div class="row login-form">
          <div class="container">
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">メールアドレス</div>
              <div class="col"></div>
              <div class="w-100">
                <input
                  v-model="email"
                  type="text"
                  class="form-control"
                  placeholder="メールアドレスを入力してください"
                />
              </div>
            </div>
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">パスワード</div>
              <div class="col"></div>
              <div class="w-100">
                <input
                  v-model="passwd"
                  type="text"
                  class="form-control"
                  placeholder="パスワードを入力してください"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <button type="button" class="btn btn-primary" @click="login">
        ログイン
      </button>
      <p class="pt-3">
        <a href="#" @click="router.push({ name: 'Signup' })"
          >新規登録の方はこちら</a
        >
      </p>
    </footer>
  </div>
</template>

<style scoped>
.login-title {
  height: 40%;
}
.login-form {
  height: auto;
}
</style>
