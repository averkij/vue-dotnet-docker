import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home")
  },
  {
    path: "/page",
    name: "page",
    component: () => import("@/views/Page"),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
