<template>
  <div @click="closeActionCreation()" class="background">
    <form @click.stop>
      <div class="header">
        <h2>Создание новой активности</h2>
        <div class="line"></div>
      </div>
      <div class="inputs">
        <input v-model="newAction.text" placeholder="Сделал домашние задания" />
        <div class="scores-block">
          <p>Сумма баллов за выполнение:</p>
          <select class="scores" v-model="newAction.scores">
            <option>-20</option>
            <option>-10</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      </div>
      <div class="buttons">
        <button
          @click.prevent="saveNewAction(newAction)"
          :disabled="!isNewActionValid"
          :class="!isNewActionValid ? 'disabled' : ''">
          Сохранить
        </button>
        <button @click.prevent="closeActionCreation()">Отменить</button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import { ref, inject, computed } from 'vue';
  const newAction = ref({
    text: '',
    scores: 10,
  });
  const addAction = inject('addAction');
  const isActionCreationOpen = inject('isActionCreationOpen');
  const currentAction = inject('currentAction');
  const isActionEditing = inject('isActionEditing');

  const isNewActionValid = computed(() => {
    return newAction.value.text.length > 0 ? true : false;
  });
  console.log(isActionEditing);
  if (isActionEditing.value === true) {
    newAction.value = currentAction.value;
  }

  function saveNewAction(action) {
    if (isNewActionValid.value) {
      addAction(action);
      isActionCreationOpen.value = false;
      isActionEditing.value = false;
    } else {
      console.log('форма не валидна');
    }
  }

  function closeActionCreation() {
    isActionCreationOpen.value = false;
    isActionEditing.value = false;
  }
</script>

<style lang="scss" scoped>
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.254);
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      width: 800px;
      height: 400px;
      background: #73ebd5;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      z-index: 1;
      .header {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        h2 {
          font-size: 2rem;
          color: white;
        }
        .line {
          width: 70%;
          border-bottom: 3px solid aliceblue;
        }
      }
      .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        input {
          padding: 5px 20px;
          width: 90%;
          border: none;
          display: flex;
          align-items: center;
          font-size: 30px;
          background: rgba(255, 255, 255, 0.575);
          border-radius: 10px;
          &::placeholder {
            opacity: 0.5;
          }
          &:focus {
            outline: 1px solid #479183;
          }
        }
        .scores-block {
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          p {
            font-size: 2rem;
            color: #479183;
          }
          .scores {
            padding: 5px 20px;
            width: 150px;
            border: none;
            display: flex;
            align-items: center;
            font-size: 30px;
            background: rgba(255, 255, 255, 0.575);
            border-radius: 10px;
            color: #479183;
          }
        }
      }

      .buttons {
        width: 90%;
        display: flex;
        justify-content: space-between;

        button {
          width: 100px;
          height: 40px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 700;
          background: #c1bfbc9e;
          box-shadow: 0px 0px 5px #479183;
          color: rgb(255, 255, 255);
          transition: box-shadow 0.2s ease-in-out;
          cursor: pointer;
          &:first-of-type {
            background: #479183;
          }
          &:hover {
            box-shadow: 0px 0px 10px #479183;
          }
        }
        .disabled {
          background: #c1bfbc9e !important;
          &:hover {
            box-shadow: 0px 0px 5px #479183;
          }
        }
      }
    }
  }
</style>
