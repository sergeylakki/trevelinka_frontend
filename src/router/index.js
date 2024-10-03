import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('../views/HomePage.vue');
const HikeList = () => import('../views/HikeList.vue');
const HikeDetails = () => import('../views/HikeDetails.vue');
const CreateHike = () => import('../views/CreateHike.vue');


const routes = [
  { path: '/', component: HomePage },
  { path: '/hikes', component: HikeList },
  { path: '/hikes/:id', component: HikeDetails },
  { path: '/create-hike', component: CreateHike },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
