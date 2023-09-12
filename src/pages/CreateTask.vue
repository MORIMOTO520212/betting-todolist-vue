<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import md5 from "js-md5";

const store = useStore();
const router = useRouter();
const title = ref("");
const description = ref("");
const price = ref("100");
const deadline = ref(new Date().toISOString().split(".")[0]);

interface Task {
  id: String;
  title: String;
  description: String;
  price: Number;
  deadline: Date;
}

const addTask = () => {
  console.log("タスクの追加処理");
  const task: Task = {
    id: md5(new Date().getTime().toString()),
    title: title.value,
    description: description.value,
    price: parseInt(price.value),
    deadline: new Date(deadline.value),
  };
  store.commit("createTask", task);
  router.push({ name: "Home" });
};
</script>
<template>
  <div class="main-container">
    <main>
      <div class="container h-100">
        <div class="row">
          <h5>タスクの追加</h5>
        </div>
        <div class="row">
          <div class="container">
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">タスクのタイトル</div>
              <div class="col"></div>
              <div class="w-100">
                <input
                  v-model="title"
                  type="text"
                  class="form-control"
                  placeholder="入力してください"
                />
              </div>
            </div>
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">タスク内容の詳細</div>
              <div class="col"></div>
              <div class="w-100">
                <div class="form-floating">
                  <textarea
                    v-model="description"
                    class="form-control"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">詳細</label>
                </div>
              </div>
            </div>
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">掛け金</div>
              <div class="col"></div>
              <div class="w-100">
                <div class="input-group mb-3">
                  <input
                    v-model="price"
                    type="text"
                    class="form-control"
                    placeholder="タスクに掛ける金額"
                  />
                  <button
                    class="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    金額
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">100円</a></li>
                    <li>
                      <a class="dropdown-item" href="#">200円</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">500円</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">1,000円</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row row-cols-2 py-3 gy-2">
              <div class="col text-start">期限</div>
              <div class="col"></div>
              <div class="w-100">
                <input
                  v-model="deadline"
                  type="datetime-local"
                  class="form-control"
                  :min="new Date().toISOString().split('.')[0]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <button type="button" class="btn btn-primary" @click="addTask">
        タスクを追加する
      </button>
    </footer>
  </div>
</template>

<style scoped>
input[type="datetime-local"] {
  width: 100%;
  background: #fff;
}
input[type="datetime-local" i] {
  color: #000;
}
</style>
