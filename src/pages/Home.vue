<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Header from "../components/Header.vue";

const store = useStore();
const router = useRouter();
const modalTitle = ref();
const modalMessage = ref();
const options: any = ref({
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

// タスクの完了処理
const done = (e: any) => {
  // 期限の確認
  const taskIndex = store.state.tasks.findIndex(({ id }: any) => {
    return id === e.target.id;
  });
  const taskDate = store.state.tasks[taskIndex].expires;
  console.log("delete task:", store.state.tasks[taskIndex]);
  if (new Date() <= new Date(taskDate)) {
    modalTitle.value = "セーフです！";
    modalMessage.value =
      "おめでとうございます！今後も期限内にタスク完了を心掛けましょう！";
  } else {
    modalTitle.value = "アウトです！";
    modalMessage.value =
      "残念ながら、このタスクは期限内に完了できませんでした。掛け金は手元には戻りません。";
  }
  document.getElementById("btnPaymentModal")?.click();

  // タスクを消す
  store.commit("deleteTask", e.target.id);
};

// タスクの追加遷移
const addTask = () => {
  console.log("タスクを追加する処理");
  router.push({ name: "CreateTask" });
};
</script>

<template>
  <div class="main-container">
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
              <img class="w-100" src="../assets/undraw_male_avatar_g98d.svg" />
            </button>
          </div>
        </div>
      </div>
      <h5 class="mb-4">タスク一覧</h5>
      <ul
        class="list-group w-100 overflow-x-hidden overflow-y-scroll"
        style="height: 80%"
      >
        <li
          v-for="{ id, title, detail, payment, expires } in store.state.tasks"
          class="list-group-item list-group-item-primary p-0"
        >
          <div class="task-card container p-2">
            <div class="row w-100">
              <div class="col text-start ps-4">
                <strong>{{ title }}</strong>
                <p class="my-fs-14px py-2 m-0">{{ detail }}</p>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn px-1 py-1"
                  @click="done"
                  style="width: 40px; height: 40px"
                >
                  <img :id="id" class="w-100" src="../assets/check-lg.svg" />
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-6 my-fs-14px">
                <img src="../assets/clock-history.svg" />
                {{ new Date(expires).toLocaleDateString(undefined, options) }}
              </div>
              <div class="col-3 my-fs-14px">
                <img src="../assets/piggy-bank.svg" />
                {{ payment }}円
              </div>
            </div>
          </div>
        </li>
        <li v-if="store.state.tasks.length === 0">
          <p>タスクはありません</p>
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

    <!-- Button trigger modal -->
    <button
      id="btnPaymentModal"
      type="button"
      class="d-none btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
    </button>
    <!-- Payment Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              {{ modalTitle }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">{{ modalMessage }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              了解
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
