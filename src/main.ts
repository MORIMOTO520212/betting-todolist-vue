import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

const store = createStore({
  state() {
    return {
      user: {},
      tasks: [
        {
          id: "sdu32iosdf",
          title: "レポート提出期限",
          detail: "詳細",
          payment: 1000,
          expires: Date.now(),
        },
        {
          id: "f8953kjt",
          title: "タスク",
          detail: "詳細",
          payment: 500,
          expires: Date.now(),
        },
      ],
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
    createTask(state: any, data: any) {
      console.log("createTask", data.id);
      state.tasks.unshift(data);
    },
    deleteTask(state: any, targetId: any) {
      console.log("deleteTask", targetId);
      state.tasks = state.tasks.filter(({ id }: any) => id !== targetId);
    },
  },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
