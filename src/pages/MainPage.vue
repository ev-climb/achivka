<template>
  <main>
    <section class="main">
      <ActionsSection :onDragStart="onDragStart" />
      <ProgressBar
        :progress="progress"
        @drop="onDrop($event)"
        @dragover.prevent
        @dragenter.prevent
      />
    </section>
    <section class="history">
      <ActionsPerDay />
      <ActionsStatistics />
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { useActionsStore } from "../stores/ActionsStore";
import { useUserStore } from "../stores/UserStore";
import ProgressBar from "../components/ProgressBar.vue";
import ActionsSection from "../components/ActionsSection.vue";
import ActionsPerDay from "../components/ActionsPerDay.vue";
import ActionsStatistics from "../components/ActionsStatistics.vue";

const actionsStore = useActionsStore();
const userStore = useUserStore();

const scoreCounter = computed(() => {
  return userStore.scoreCounter[0]?.scoreCounter
    ? userStore.scoreCounter[0].scoreCounter
    : 0;
});

const currentLevel = computed(() => {
  let level;

  for (let i = 0; i < userStore.levels.length; i++) {
    if (scoreCounter.value >= userStore.levels[i].score) {
      level = userStore.levels[i];
      break;
    }
  }
  return level;
});

const nextLevelScores = computed(() => {
  if (currentLevel.value) {
    const nextLevel = currentLevel.value.level;
    return userStore.levels[nextLevel].score;
  } else {
    return 999999;
  }
});

const progress = computed(() => {
  return Math.round((100 / nextLevelScores.value) * scoreCounter.value);
});

//логика перетаскивания элементов
function onDragStart(event, item) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemId", item.id);
}
function onDrop(event) {
  const itemId = event.dataTransfer.getData("itemId");
  const action = actionsStore.actions.find((action) => action.id == itemId);

  const newScoreCounterValue =
    Number(scoreCounter.value) + Number(action.scores);
  userStore.addScores(newScoreCounterValue);
  actionsStore.toCompleted(action);
  actionsStore.getActions();
  if (progress.value >= 100) {
    addScores(0);
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
