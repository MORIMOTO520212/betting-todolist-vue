import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";

const store = createStore({
  state() {
    return {
      tasks: [{}, {}, {}],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
