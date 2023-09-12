<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const passwd = ref("");
const passwdAgain = ref("");

const signup = () => {
  console.log("ログイン処理");
  console.log("メールアドレス", email.value);
  console.log("パスワード", passwd.value);
  console.log("パスワード（再度）", passwdAgain.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("passwd", passwd.value);
  router.push({ name: "Home" });
};
</script>
<template>
  <div class="main-container">
    <main>
      <div class="container h-100">
        <div class="row login-title">
          <div class="d-flex justify-content-center align-items-center">
            <h3>新規登録</h3>
          </div>
          <p>自分を追い込む準備は出来ているか？</p>
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
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">パスワード（再度）</div>
              <div class="col"></div>
              <div class="w-100">
                <input
                  v-model="passwdAgain"
                  type="text"
                  class="form-control"
                  placeholder="もう一度パスワードを入力してください"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <button type="button" class="btn btn-primary" @click="signup">
        新規登録
      </button>
      <p class="pt-3">
        <a href="#" @click="router.push({ name: 'Login' })"
          >ログインの方はこちら</a
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
