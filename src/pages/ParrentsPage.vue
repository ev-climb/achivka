<template>
  <div>Parrents Page</div>
</template>

<script setup>
  import ActionsForParrents from '../components/ActionsForParrents.vue';
</script>

<style lang="scss" scoped>
  .actions-settings {
    margin-top: 5vh;
    padding: 5%;
    width: 100%;
    background: #15ccae;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: #f0f8ff;
      font-size: 2rem;
    }
    .line {
      margin-top: 2%;
      width: 90%;
      border-bottom: 3px solid aliceblue;
    }
    .add-action {
      margin-top: 2%;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        opacity: 70%;
      }
    }
  }
</style>
