<template>
  <HeaderSection />
  <router-view />
  <FooterSection />

</template>

<script setup>
import { computed, watch } from "vue";
import { useActionsStore } from "./stores/ActionsStore";
import { useUserStore } from "./stores/UserStore";
import HeaderSection from "./components/HeaderSection.vue";
import FooterSection from "./components/FooterSection.vue";

const actionsStore = useActionsStore();
const userStore = useUserStore();

//Получение данных пользователя
userStore.getLevels();
userStore.getScoreCounter();

//Сброс выполненных активностей при первом входе за день
const isTheFirstEntry = computed(() => {
  return localStorage.achivka_date != new Date().toISOString().slice(0, 10);
});
console.log("isTheFirstEntry: ", isTheFirstEntry.value);
function updateDalyActions() {
  actionsStore.updateActions();
  actionsStore.getActions();
  localStorage.achivka_date = new Date().toISOString().slice(0, 10);
}
if (isTheFirstEntry.value) {
  updateDalyActions();
}
watch(
  () => isTheFirstEntry.value,
  () => {
    updateDalyActions();
  }
);
</script>

<style scoped></style>
