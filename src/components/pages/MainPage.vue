<template>
  <main>
    <TodoListSection :todoList="todoList" :onDragStart="onDragStart" />
    <ProgressBar @drop="onDrop($event)" @dragover.prevent @dragenter.prevent />
  </main>
</template>

<script setup>
  import { ref, provide, computed } from 'vue';
  import ProgressBar from '../ProgressBar.vue';
  import TodoListSection from '../TodoListSection.vue';

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
    if (scoreCounter.value < 0) {
      return 0;
    } else {
      return (100 / nextLevelScores.value) * scoreCounter.value;
    }
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
  }
</style>
