<template>
  <ul class="listBlock">
    <p v-if="actions.length === 0">Добавьте первую активность</p>
    <li v-else v-for="(action, index) in actions" :key="index">
      {{ action.text }}
    </li>
  </ul>
</template>

<script setup>
  import { inject } from 'vue';

  const actions = inject('actions');
</script>

<style lang="scss" scoped>
  h2 {
    margin-top: 5%;
    font-size: 45px;
  }
  ul {
    margin-top: 50px;
    padding: 20px;
    width: 80%;
    height: 210px;
    border: 3px solid #f0f8ff;
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
</style>
