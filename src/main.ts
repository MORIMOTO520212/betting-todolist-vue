import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import VueAxios from "vue-axios";

const store = createStore({
  state() {
    return {
      api: {
        signInUrl: "http://192.168.35.29:3000/users/sign_in.json",
        csrfToken: "",
      },
      user: {
        point: 0,
      },
      tasks: [
        {
          id: "sdu32iosdf",
          title: "レポート提出期限",
          description: "詳細",
          price: 1000,
          deadline: Date.now(),
        },
        {
          id: "f8953kjt",
          title: "タスク",
          description: "詳細",
          price: 500,
          deadline: Date.now(),
        },
      ],
    };
  },
  mutations: {
    createTask(state: any, data: any) {
      console.log("createTask", data.id);
      state.tasks.unshift(data);
    },
    deleteTask(state: any, targetId: any) {
      console.log("deleteTask", targetId);
      state.tasks = state.tasks.filter(({ id }: any) => id !== targetId);
    },
    addPoint(state: any) {
      state.user.point += 10;
    },
  },
});

const app = createApp(App);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios); // provide 'axios'
app.use(store);
app.use(router);
app.mount("#app");
