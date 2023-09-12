<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const emailEditFlag = ref(false);
const passwdEditFlag = ref(false);
const cardEditFlag = ref(false);

const email = ref(localStorage.getItem("email"));
const passwd = ref(localStorage.getItem("passwd"));
</script>
<template>
  <div class="main-container">
    <main>
      <div class="container">
        <div class="row pb-2">
          <button
            type="button"
            class="btn"
            style="width: 10%"
            @click="router.push({ name: 'Home' })"
          >
            <img class="h-100" src="../assets/arrow-left.svg" />
          </button>
        </div>
        <div class="row">
          <div class="col-3">
            <img
              class="profile-icon"
              src="../assets/undraw_male_avatar_g98d.svg"
            />
          </div>
          <div class="col text-start">
            <div class="row h-100 align-items-center fs-4">
              {{ email }}
            </div>
          </div>
        </div>
      </div>
      <div class="container pt-3">
        <div class="row row-cols-2 py-2 gy-2">
          <div class="col text-start">メールアドレス</div>
          <div class="col"></div>
          <div class="w-100">
            <div class="input-group mb-3">
              <input
                v-model="email"
                type="text"
                class="form-control"
                :disabled="!emailEditFlag"
              />
              <button type="button" class="btn btn-primary text-white">
                <img
                  v-if="emailEditFlag"
                  src="../assets/check-lg-white.svg"
                  @click="emailEditFlag = false"
                />
                <img
                  v-else
                  src="../assets/pencil-square.svg"
                  @click="emailEditFlag = true"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="row row-cols-2 py-2 gy-2">
          <div class="col text-start">パスワード</div>
          <div class="col"></div>
          <div class="w-100">
            <div class="input-group mb-3">
              <input
                v-model="passwd"
                type="text"
                class="form-control"
                :disabled="!passwdEditFlag"
              />
              <button type="button" class="btn btn-primary text-white">
                <img
                  v-if="passwdEditFlag"
                  src="../assets/check-lg-white.svg"
                  @click="passwdEditFlag = false"
                />
                <img
                  v-else
                  src="../assets/pencil-square.svg"
                  @click="passwdEditFlag = true"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="row py-5 gy-2">
          <button
            type="button"
            class="btn btn-primary w-100"
            @click="cardEditFlag = !cardEditFlag"
          >
            {{
              cardEditFlag
                ? "クレジットカード情報を保存する"
                : "クレジットカード情報を編集する"
            }}
          </button>
          <div class="container pt-4" v-if="cardEditFlag">
            <div class="row py-2">
              <div class="col-5">カード番号</div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="1234 5678 9012"
                />
              </div>
            </div>
            <div class="row py-2">
              <div class="col-5">有効期限</div>
              <div class="col">
                <input type="text" class="form-control" placeholder="月" />
              </div>
              <div class="col-1">/</div>
              <div class="col">
                <input type="text" class="form-control" placeholder="年" />
              </div>
            </div>
            <div class="row py-2">
              <div class="col-5">セキュリティコード</div>
              <div class="col">
                <input type="text" class="form-control" placeholder="123" />
              </div>
            </div>
            <div class="row py-2">
              <div class="col-5">カード名義人</div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="YAMADA TARO"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <button
        type="button"
        class="btn btn-danger w-100"
        @click="router.push({ name: 'Login' })"
      >
        ログアウトする
      </button>
    </footer>
  </div>
</template>

<style scoped>
img.profile-icon {
  width: 80%;
}
</style>
