<template>
  <div class="background">
    <form action="">
      <input v-model="newAction.text" label="Опишите активность" />
      <input type="number" label="Введите колличествол баллов" />
      <div class="buttons">
        <button>Сохранить</button>
        <button>Отменить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const newAction = ref({
    text: '',
    scores: 0,
  });
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.096);
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 50vw;
      height: 30vh;
      background: #73ebd5;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        margin-top: 50px;
        width: 90%;
        height: 2rem;
        border: none;
        background: rgba(255, 255, 255, 0.486);
        border-radius: 10px;
      }
    }
  }
</style>
