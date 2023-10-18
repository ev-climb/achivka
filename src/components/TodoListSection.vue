<template>
  <h2>Я только что...</h2>
  <ul class="listBlock">
    <li
      v-for="(todo, index) in todoList"
      :key="index"
      draggable="true"
      @dragstart="onDragStart($event, todo)">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    todoList: Array,
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
    gap: 20px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      padding: 5px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
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
