import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/blog',
    name: 'blog overview',
    component: () => import(/* webpackChunkName: "blog overview" */ '../views/blog/Overview.vue'),
  },
  {
    path: '/blog/:blogId',
    name: 'blog detail',
    props: true,
    component: () => import(/* webpackChunkName: "Blog detail" */ '../views/blog/Detail.vue'),
  },
  {
    path: '*',
    name: 'not found',
    component: () => import(/* webpackChunkName: "Not found" */ '@/views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
