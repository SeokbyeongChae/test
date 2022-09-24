import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/Index.vue"),
    },
    {
      path: "/name",
      name: "name",
      component: () => import("../views/Name.vue"),
    },
  ],
});

export default router;
