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
  import { ref, provide } from 'vue';
  import { useActionsStore } from '../stores/ActionsStore';
  import ActionCreation from '../components/ActionCreation.vue';
  import ActionsForParrents from '../components/ActionsForParrents.vue';

  const actionsStore = useActionsStore();
  const isActionCreationOpen = ref(false);
  const isActionEditing = ref(false);
  const currentAction = ref({});

  actionsStore.getActions();

  provide('isActionCreationOpen', isActionCreationOpen);
  provide('isActionEditing', isActionEditing);
  provide('currentAction', currentAction);
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
