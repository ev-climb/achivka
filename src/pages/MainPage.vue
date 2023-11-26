<template>
  <main>
    <section class="main">
      <ActionsSection :onDragStart="onDragStart" />
      <ProgressBar @drop="onDrop($event)" @dragover.prevent @dragenter.prevent />
    </section>
    <section class="history">
      <ActionsPerDay/>
      <ActionsStatistics/>
    </section>
  </main>
</template>

<script setup>
  import { provide, inject, computed } from 'vue';
  import ProgressBar from '../components/ProgressBar.vue';
  import ActionsSection from '../components/ActionsSection.vue';
  import ActionsPerDay from '../components/ActionsPerDay.vue'
  import ActionsStatistics from '../components/ActionsStatistics.vue'

  const actions = inject('actions');
  const levels = inject('levels');
  const deleteAction = inject('deleteAction');
  const counter = inject('scoreCounter');
  const addScores = inject('addScores')
const addCompletedAction = inject('addCompletedAction');

  const scoreCounter = computed(()=> {
    if (counter.value.length > 0) {
      return counter.value[0].scoreCounter
    }
    return 0
  })

  const currentLevel = computed(() => {
    let level;
    if (scoreCounter.value < 0) {
      level = levels.value[0];
    } else {
      for (let i = 0; i < levels.value.length; i++) {    
        if (scoreCounter.value >= levels.value[i].score) {
          level = levels.value[i];
          break;
        }
      }
    }
    return level;
  });

  const nextLevelScores = computed(() => {
    if (currentLevel.value) {
      const nextLevel = currentLevel.value.level;
      return levels.value[nextLevel].score;
    } else {
      return 999999
    }
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
    const newScoreCounterValue = Number(scoreCounter.value) + Number(action[0].scores);
    addScores(newScoreCounterValue)
    addCompletedAction(action[0])
    deleteAction(action[0].id);
    if (progress.value >= 100) {
      addScores(0)
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #efc2f860;
    border-radius: 30px;
    padding: 50px 20px;
  }
  .history {
    margin-top: 4%;
    width: 100%;
    display: flex;
    gap: 4%;
  }
</style>
