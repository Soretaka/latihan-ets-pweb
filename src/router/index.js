import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import createView from "../views/createView.vue";
import categoryView from "../views/categoryView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: createView,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: createView,
  },
  {
    path: "/category",
    name: "category",
    component: categoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
