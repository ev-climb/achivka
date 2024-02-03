<template>
  <h2>Я только что...</h2>
  <ul class="listBlock">
    <p v-if="dailyActions.length === 0">На сегодня всё! Давай продолжим завтра:)</p>
    <li
      v-else
      v-for="(action, index) in dailyActions"
      draggable="true"
      :key="index"
      :style="action.scores > 0 && 'background: #1fca52a8;'"
      @dragstart="onDragStart($event, action)">
      {{ action.text }}
    </li>
  </ul>
</template>

<script setup>
  import { inject } from 'vue';

  const dailyActions = inject('dailyActions');

  const props = defineProps({
    onDragStart: Function,
  });
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 5%;
    font-size: 45px;
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
