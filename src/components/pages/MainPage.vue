<template>
  <main>
    <h2>Я только что...</h2>
    <ul class="listBlock">
      <li v-for="(todo, index) in todoList" :key="index">{{ todo.text }}</li>
    </ul>
    <ProgressBar />
  </main>
</template>

<script setup>
  import ProgressBar from '../ProgressBar.vue';
  import { ref } from 'vue';
  const todoList = ref([
    { text: 'Сделала домашние задания', scores: 10 },
    { text: 'Посмотрела мультфильмы', scores: -5 },
    { text: 'Сама заправила постель', scores: 5 },
    { text: 'Поиграла на планшете', scores: -5 },
    { text: 'Почистила зубы', scores: 5 },
    { text: 'Сделала зарядку', scores: 10 },
    { text: 'Сделала уборку в комнате', scores: 10 },
  ]);
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
