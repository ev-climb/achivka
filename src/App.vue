<template>
  <HeaderSection />
  <router-view />
  <FooterSection />
</template>

<script setup>
import { computed } from "vue";
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
if (isTheFirstEntry.value) {
  actionsStore.updateActions();
  localStorage.achivka_date = new Date().toISOString().slice(0, 10);
}
</script>

<style scoped></style>
