<template>
  <div class="main-per-day">
    <h2>Сегодня я сделала:</h2>
    <ul>
      <p v-if="actionsStore.completedActions.length === 0">Пока ничего, давай начнём!:)</p>
      <li
        v-for="(action, index) in actionsStore.completedActions"
        :key="index"
        :style="action.scores < 0 && 'background-color: rgb(255, 227, 218)'"
      >
        {{ action.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useActionsStore } from '../stores/ActionsStore'

const actionsStore = useActionsStore();

</script>

<style lang="scss" scoped>
.main-per-day {
  height: 500px;
  background: #efc2f860;
  border-radius: 30px;
  padding: 50px 20px;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    color: rgb(93, 85, 85);
  }

  ul {
    margin-top: 20px;
    padding: 20px;
    width: 90%;
    height: 90%;
    display: grid;
    grid-auto-rows: max-content;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(189, 104, 184, 0.4) inset;
    border-radius: 20px;
    overflow: auto;

    p {
      align-self: center;
      justify-self: center;
    }

    li {
      margin-top: 10px;
      padding-left: 10px;
      width: 90%;
      height: 30px;
      background-color: rgb(218, 255, 221);
      border-radius: 10px;
      display: flex;
      align-items: center;
      color: rgb(52, 53, 53);

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
}
</style>