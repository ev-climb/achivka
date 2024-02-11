<template>
  <div class="main-per-day">
    <h2>Сегодня я сделала:</h2>
    <ul>
      <li
        v-for="(action, index) in completedActions"
        :key="index"
        :style="action.scores < 0 && 'background-color: rgb(255, 227, 218)'"
      >
        {{ action.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from "vue";

const completedActions = inject("completedActions");
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
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(189, 104, 184, 0.4) inset;
    border-radius: 20px;
    overflow: auto;

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