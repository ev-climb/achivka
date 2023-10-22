<template>
  <main>
    <ActionsSection :onDragStart="onDragStart" />
    <ProgressBar @drop="onDrop($event)" @dragover.prevent @dragenter.prevent />
  </main>
</template>

<script setup>
  import { ref, provide, inject, computed } from 'vue';
  import ProgressBar from '../components/ProgressBar.vue';
  import ActionsSection from '../components/ActionsSection.vue';

  const actions = inject('actions');
  const levels = inject('levels');
  const deleteAction = inject('deleteAction');

  const scoreCounter = ref(0);

  const currentLevel = computed(() => {
    let currentLevel;
    if (scoreCounter.value < 0) {
      currentLevel = levels.value[0];
    } else {
      for (let i = levels.value.length - 1; i >= 0; i--) {
        if (scoreCounter.value >= levels.value[i].score) {
          currentLevel = levels.value[i];
          break;
        }
      }
    }

    return currentLevel;
  });

  const nextLevelScores = computed(() => {
    const nextLevel = currentLevel.value.level;
    return levels.value[nextLevel].score;
  });

  const progress = computed(() => {
    if (scoreCounter.value < 0) {
      return 0;
    } else {
      return Math.round((100 / nextLevelScores.value) * scoreCounter.value);
    }
  });
  provide('progress', progress);

  //логика перетаскивания элементов
  function onDragStart(event, item) {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('itemId', item.id.toString());
  }
  function onDrop(event) {
    const itemId = event.dataTransfer.getData('itemId');
    const action = actions.value.filter((action) => action.id === itemId);
    actions.value = actions.value.filter((action) => action.id != itemId);
    scoreCounter.value = scoreCounter.value + action[0].scores;
    deleteAction(action[0].id);
    if (progress.value >= 100) {
      scoreCounter.value = 0;
    }
    console.log(scoreCounter.value, 'scoreCounter.value');
    console.log(actions.value, 'actions.value');
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
