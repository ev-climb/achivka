import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';

import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebase';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('./pages/MainPage.vue'),
    },
    {
      path: '/parrents',
      name: 'Parrents',
      component: import('./pages/ParrentsPage.vue'),
    },
  ],
});

const app = createApp(App)
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  .use(router);

app.mount('#app');
