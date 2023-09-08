import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Signup from "../pages/Signup.vue";
import Login from "../pages/Login.vue";
import CreateTask from "../pages/CreateTask.vue";
import Mypage from "../pages/Mypage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/createtask",
    name: "CreateTask",
    component: CreateTask,
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: Mypage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
