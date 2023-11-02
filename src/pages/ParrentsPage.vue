<template>
  <section class="actions-settings">
    <h2>Настройки активностей</h2>
    <div class="line"></div>
    <img
      @click="isActionCreationOpen = true"
      class="add-action"
      src="../assets/images/icons/plus.svg"
      alt="add new action" />
    <ActionCreation v-if="isActionCreationOpen" />

    <ActionsForParrents />
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import ActionCreation from '../components/ActionCreation.vue';
  import ActionsForParrents from '../components/ActionsForParrents.vue';

  const isActionCreationOpen = ref(false);
</script>

<style lang="scss" scoped></style>
