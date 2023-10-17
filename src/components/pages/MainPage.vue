<template>
  <main>
    <h2>Я только что...</h2>
    <ul class="listBlock">
      <template v-for="(todo, index) in todoList" :key="index">
        <li v-if="todo.done" draggable="true" @dragstart="onDragStart($event, todo)">
          {{ todo.text }}
        </li>
      </template>
    </ul>
    <ProgressBar @drop="onDrop($event)" @dragover.prevent @dragenter.prevent />
  </main>
</template>

<script setup>
  import ProgressBar from '../ProgressBar.vue';
  import { ref, provide, computed } from 'vue';

  const todoList = ref([
    { id: 1, text: 'Сделала домашние задания', scores: 10, done: true },
    { id: 2, text: 'Сама заправила постель', scores: 5, done: true },
    { id: 3, text: 'Посмотрела мультфильмы', scores: -5, done: true },
    { id: 4, text: 'Поиграла на планшете', scores: -5, done: true },
    { id: 5, text: 'Почистила зубы', scores: 5, done: true },
    { id: 6, text: 'Сделала зарядку', scores: 10, done: true },
    { id: 7, text: 'Сделала уборку в комнате', scores: 10, done: true },
  ]);

  const scoreCounter = ref(0);
  const nextLevelScores = ref(1000);
  const progress = computed(() => {
    return (100 / nextLevelScores.value) * scoreCounter.value;
  });

  //логика перетаскивания элементов
  function onDragStart(event, item) {
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('itemId', item.id.toString());
  }
  function onDrop(event) {
    const itemId = parseInt(event.dataTransfer.getData('itemId'));
    const todo = todoList.value.filter((todo) => todo.id === itemId);
    todoList.value = todoList.value.filter((todo) => todo.id != itemId);
    scoreCounter.value = scoreCounter.value + todo[0].scores;
    console.log(scoreCounter.value, 'scoreCounter.value');
  }

  provide('progress', progress);
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
      border-radius: 30px;
      background-color: #e906f526;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        padding: 5px 20px;
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 30px;
        width: 100%;
        background: rgba(255, 255, 255, 0.575);
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.4s, background 0.4s;
        &:hover {
          transform: scale(1.03);
          background: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }
</style>
