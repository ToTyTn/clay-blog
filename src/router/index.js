import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MumuView from "../views/MumuView.vue";
import NezhaView from "../views/NezhaView.vue";
import BearView from "../views/BearView.vue";
import DoraemonView from "../views/DoraemonView.vue";
import CinnamorollView from "../views/CinnamorollView.vue";
import PleasantGoatView from "../views/PleasantGoatView.vue";
import HalloweenView from "../views/HalloweenView.vue";
// import BookCatalog from '../views/BookCatalog.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mumu",
    name: "mumu",
    component: MumuView,
  },
  {
    path: "/nezha",
    name: "nezha",
    component: NezhaView,
  },
  {
    path: "/bear",
    name: "bear",
    component: BearView,
  },
  {
    path: "/doraemon",
    name: "doraemon",
    component: DoraemonView,
  },
  {
    path: "/cinnamoroll",
    name: "cinnamoroll",
    component: CinnamorollView,
  },
  {
    path: "/PleasantGoat",
    name: "PleasantGoat",
    component: PleasantGoatView,
  },
  {
    path: "/halloween",
    name: "halloween",
    component: HalloweenView,
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
