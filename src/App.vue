<template>
  <HeaderSection />
  <MainPage />
  <FooterSection />
</template>

<script setup>
  import { ref, provide } from 'vue';
  import HeaderSection from './components/HeaderSection.vue';
  import MainPage from './components/pages/MainPage.vue';
  import FooterSection from './components/FooterSection.vue';

  //Тестовые данные
  const todoList = ref([
    { id: 1, text: 'Сделала домашние задания', scores: 10, done: true },
    { id: 2, text: 'Сама заправила постель', scores: 5, done: true },
    { id: 3, text: 'Посмотрела мультфильмы', scores: -5, done: true },
    { id: 4, text: 'Поиграла на планшете', scores: -5, done: true },
    { id: 5, text: 'Почистила зубы', scores: 5, done: true },
    { id: 6, text: 'Сделала зарядку', scores: 10, done: true },
    { id: 7, text: 'Сделала уборку в комнате', scores: 10, done: true },
  ]);
  const levels = ref([
    { level: 1, name: 'Новичок', score: 0 },
    { level: 2, name: 'Исследователь', score: 1000 },
    { level: 3, name: 'Путешественник', score: 1400 },
    { level: 4, name: 'Исскатель приключений', score: 1200 },
    { level: 5, name: 'Знаток', score: 2700 },
    { level: 6, name: 'Эксперт', score: 3800 },
    { level: 7, name: 'Мастер', score: 5300 },
    { level: 8, name: 'Чемпион', score: 7500 },
    { level: 9, name: 'Гуру', score: 10500 },
    { level: 10, name: 'Легенда', score: 14000 },
  ]);

  provide('todoList', todoList);
  provide('levels', levels);
</script>

<style scoped></style>
