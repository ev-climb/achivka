<template>
  <h2>Я только что...</h2>
  <ul class="listBlock">
    <Loader v-if="loading" />
    <li
      v-else-if="actions.length > 0"
      v-for="(action, index) in actions"
      draggable="true"
      :key="index"
      :style="action.scores > 0 && 'background: #1fca52a8;'"
      @dragstart="onDragStart($event, action)"
    >
      {{ action.text }}
    </li>
    <p v-else>На сегодня всё! Давай продолжим завтра:)</p>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useActionsStore } from "../stores/ActionsStore";
import Loader from "./Loader.vue";

const loading = computed(()=>{
  return !actionsStore.actions.length;
})


const actionsStore = useActionsStore();

actionsStore.getActions();

const actions = computed(()=>{
  return actionsStore.actions.filter(action=>!action.done)
})

const props = defineProps({
  onDragStart: Function,
});
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 5%;
  font-size: 45px;
  color: #535353;
}
ul {
  margin-top: 50px;
  padding: 20px;
  width: 570px;
  height: 210px;
  border: 3px solid #e906f5;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.4) inset;
  border-radius: 30px;
  background-color: #e906f526;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 30px;
    text-align: center;
    color: rgb(93, 85, 85);
  }
  li {
    padding: 5px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 100%;
    background: rgba(204, 83, 83, 0.219);
    border-radius: 10px;
    cursor: pointer;
    color: #fafafa;
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.03);
    }
  }
}
</style>
