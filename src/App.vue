<template>
  <AuthorizationScreen v-if="authorizationScreenOpen" />
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>

<script setup>
  import { ref, provide, watch } from 'vue';
  import AuthorizationScreen from './components/AuthorizationScreen.vue';
  import HeaderSection from './components/HeaderSection.vue';
  import MainPage from './pages/MainPage.vue';
  import FooterSection from './components/FooterSection.vue';

  import { useFirestore } from 'vuefire';
  import { useCollection } from 'vuefire';
  import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

  const db = useFirestore();
  const actions = useCollection(collection(db, 'actions'));

  console.log(actions, 'actions.value');

  const authorizationScreenOpen = ref(false);

  //Тестовые данные

  const levels = ref([
    { level: 1, name: 'Новичок', score: 0 },
    { level: 2, name: 'Исследователь', score: 1000 },
    { level: 3, name: 'Путешественник', score: 1400 },
    { level: 4, name: 'Исскатель приключений', score: 1200 },
    { level: 5, name: 'Знаток', score: 2700 },
    { level: 6, name: 'Эксперт', score: 3800 },
    { level: 7, name: 'Мастер', score: 5300 },
    { level: 8, name: 'Чемпион', score: 7500 },
    { level: 9, name: 'Гуру', score: 10500 },
    { level: 10, name: 'Легенда', score: 14000 },
  ]);

  const visibleActions = ref([]);
  async function getVisibleActions() {
    if (actions.value.length > 0) {
      visibleActions.value = actions.value;
    }
  }
  async function addAction(action) {
    try {
      await addDoc(collection(db, 'actions'), action);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  async function deleteAction(id) {
    console.log(id, 'id');
    try {
      await deleteDoc(doc(db, 'actions', id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  }
  watch(actions, async () => {
    getVisibleActions();
  });

  provide('authorizationScreenOpen', authorizationScreenOpen);
  provide('actions', actions);
  provide('levels', levels);
  provide('addAction', addAction);
  provide('deleteAction', deleteAction);
</script>

<style scoped></style>
