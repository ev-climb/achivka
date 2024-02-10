<template>
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>

<script setup>
  import { provide, computed } from 'vue';
  import HeaderSection from './components/HeaderSection.vue';
  import FooterSection from './components/FooterSection.vue';

  import { useFirestore, useCollection } from 'vuefire';
  import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

  const db = useFirestore();
  const levels = useCollection(collection(db, 'levels'));
  const dailyActions = useCollection(collection(db, 'daily'));
  const completedActions = useCollection(collection(db, 'completed'));
  const allActions = useCollection(collection(db, 'actions'));
  const scoreCounter = useCollection(collection(db, 'scoreCounter'));

  const isTheFirstEntry = computed(() => {
    const date = new Date().toLocaleDateString();
    if ( localStorage.achivka_date !== date ) {
      return true;
    } else {
      return false;
    }
  })

  updateDailyActions();

  function updateDailyActions() {
    if (isTheFirstEntry.value) {
      getDailyActions()
      clearDailyCompletedActions()
    }
  }

  function getDailyActions() {
    dailyActions.value.map((action, index)=>{
      try {
        deleteDoc(doc(db, 'daily', dailyActions.value[index].id));
        console.log('dailyActions was cleared');
      } catch (error) {
        console.error('Error removing an action: ', error);
      }
    })
    allActions.value.map((action)=>{
      try {
        addDoc(collection(db, 'daily'), action);
        console.log('dailyActions has been updated');
      } catch (error) {
        console.error('Error dailyActions updating: ', error);
      }
    })
    const date = new Date().toLocaleDateString();
    localStorage.achivka_date = date;
  }

  async function clearDailyCompletedActions() {
    completedActions.value.map((action, index)=>{
      try {
        deleteDoc(doc(db, 'completed', completedActions.value[index].id));
        console.log('completedActions was cleared');
      } catch (error) {
        console.error('Error removing an action: ', error);
      }
    })
    const date = new Date().toLocaleDateString();
    localStorage.achivka_date = date;
  }

  async function addScores(scores) {
    let newScoresValue = {
        scoreCounter: Number(scores)
    }
    try {
      await deleteDoc(doc(db, 'scoreCounter', scoreCounter.value[0].id));
      await addDoc(collection(db, 'scoreCounter'), newScoresValue);
    } catch (error) {
      console.error('Error adding an action: ', error)
    }
  }

  async function addAction(action) {
    try {
      await addDoc(collection(db, 'actions'), action);
      await addDoc(collection(db, 'daily'), action);
    } catch (error) {
      console.error('Error adding an action: ', error);
    }
  }
  async function deleteAction(id) {
    try {
      await deleteDoc(doc(db, 'actions', id));
      await deleteDoc(doc(db, 'daily', id));
    } catch (error) {
      console.error('Error removing an action: ', error);
    }
  }

  async function addCompletedAction(action) {
    await addDoc(collection(db, 'completed'), action);
  }

  provide('dailyActions', dailyActions);
  provide('allActions', allActions);
  provide('levels', levels);
  provide('addAction', addAction);
  provide('deleteAction', deleteAction);
  provide('scoreCounter', scoreCounter)
  provide('addScores', addScores)
  provide('addCompletedAction', addCompletedAction)
  provide('completedActions', completedActions)

</script>

<style scoped></style>
