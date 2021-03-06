import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Begin from "../views/Begin.vue";
import Intro from "../views/Intro.vue";
import About from "../views/About.vue";
import Triomphe from "../views/Triomphe.vue";
import Error from "../views/404.vue";
import Story from "../components/Story.vue";
import Labor from "../components/Labor.vue";
import Discover from "../components/Discover.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/start",
    name: "Begin",
    component: Begin
  },
  {
    path: "/introduction",
    name: "intro",
    component: Intro
  },
  {
    path: "/story/:chapter",
    name: "story",
    component: Story
  },
  {
    path: "/discover",
    name: "discover",
    component: Discover
  },
  {
    path: "/labor/:step",
    name: "labor",
    component: Labor
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/triomphe",
    name: "triomphe",
    component: Triomphe
  },
  {
    path: "*",
    component: Error
  }
];

const router = new VueRouter({
  mode:'history',
  routes:routes,
  scrollBehavior () {
  return { x: 0, y: 0 }
}
});

export default router;
