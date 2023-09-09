<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Header from "../components/Header.vue";

const store = useStore();
const router = useRouter();

const addTask = () => {
  console.log("タスクを追加する処理");
  router.push({ name: "CreateTask" });
};
</script>

<template>
  <div class="main-container">
    <header>
      <Header />
    </header>
    <main>
      <div class="w-100 container">
        <div class="row">
          <div class="col"></div>
          <div class="col-3">
            <button
              type="button"
              class="btn btn-lg w-100"
              @click="router.push({ name: 'MyPage' })"
            >
              <img class="w-100" src="../assets/person-circle.svg" />
            </button>
          </div>
        </div>
      </div>
      <p>タスク一覧</p>
      <ul class="list-group">
        <li v-for="task in store.state.tasks" class="list-group-item p-0">
          <div class="task-card container bg-body-secondary p-2">
            <div class="row">
              <div class="col">レポート提出期限</div>
              <div class="col-3">
                <button type="button" class="btn">
                  <img src="../assets/check-lg.svg" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-6 my-fs-14px">2023年10月1日</div>
              <div class="col-3 my-fs-14px">1,000円</div>
            </div>
          </div>
        </li>
      </ul>
    </main>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <button
              type="button"
              class="btn btn-outline-primary btn-lg"
              @click="addTask"
            >
              <img src="../assets/plus-lg.svg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <RouterPage />
</template>
