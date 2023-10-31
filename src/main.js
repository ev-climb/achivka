import { createApp } from 'vue';
import App from './App.vue';
import MainPage from './pages/MainPage.vue';
import ParrentsPage from './pages/ParrentsPage.vue';

import './style.css';

//router
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/parrents',
      name: 'parrents',
      component: ParrentsPage,
    },
  ],
  history: createWebHistory(),
});

//firebase
import { VueFire, VueFireAuth } from 'vuefire';
import { firebaseApp } from './config/firebase';

const app = createApp(App);
app.use(router).use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
});
app.mount('#app');
