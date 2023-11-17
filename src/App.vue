<template>
  <AuthorizationScreen v-if="authorizationScreenOpen" />
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>

<script setup>
  import { ref, provide, watch, computed } from 'vue';
  import AuthorizationScreen from './components/AuthorizationScreen.vue';
  import HeaderSection from './components/HeaderSection.vue';
  import FooterSection from './components/FooterSection.vue';

  import { useFirestore, useCollection } from 'vuefire';
  import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

  const db = useFirestore();
  const actions = useCollection(collection(db, 'daily'));
  const allActions = useCollection(collection(db, 'actions'));

  console.log(actions, 'actions.value');
  console.log(allActions.value, 'allActions.value');

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


  const isTheFirstEntry = computed(() => {
    const date = new Date().toLocaleDateString();
    console.log(date);
    if ( localStorage.achivka_date == date ) {
      return false;
    } else {
      localStorage.achivka_date = date;
      return true;
    }
  })

  async function addAction(action) {
    try {
      await addDoc(collection(db, 'actions'), action);
      await addDoc(collection(db, 'daily'), action);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
  async function deleteAction(id) {
    try {
      await deleteDoc(doc(db, 'actions', id));
      await deleteDoc(doc(db, 'daily', id));
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  }

  if (isTheFirstEntry) {
    allActions.value.map((action)=>{
      try {
        addDoc(collection(db, 'daily'), action);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    })
  }

  provide('authorizationScreenOpen', authorizationScreenOpen);
  provide('actions', actions);
  provide('allActions', allActions);
  provide('levels', levels);
  provide('addAction', addAction);
  provide('deleteAction', deleteAction);
</script>

<style scoped></style>
