import { createRouter, createWebHistory } from 'vue-router';
import ViewMain from '../views/ViewMain.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: ViewMain
    },
  ]
});

export default router;
