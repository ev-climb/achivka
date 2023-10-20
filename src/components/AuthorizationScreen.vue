<template>
  <div class="background" @click="authorizationScreenOpen = false">
    <form @click.stop>
      <input type="email" placeholder="e-mail" />
      <input type="password" placeholder="password" />
    </form>
  </div>
</template>

<script setup>
  import { inject } from 'vue';

  const authorizationScreenOpen = inject('authorizationScreenOpen');
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.334);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 30%;
      height: 40%;
      background: wheat;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10%;
      border-radius: 20px;
      z-index: 20;
      input {
        width: 60%;
        height: 20%;
        font-size: 20px;
      }
    }
  }
</style>
