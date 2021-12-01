import { createRouter, createWebHistory } from "vue-router";
import home from "./page/home.vue";
import chatroom from "./page/chatroom.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: home,
    },
    {
      path: "/chat",
      component: chatroom,
    },
  ],
});
