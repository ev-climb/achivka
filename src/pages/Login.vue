<template>
  <div class="background" @click="authorizationScreenOpen = false">
    <form @click.stop>
      <input type="email" placeholder="e-mail" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <button @click="login">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import firebase from "firebase";

const authorizationScreenOpen = inject("authorizationScreenOpen");
const email = ref('');
const password = ref('');
const initials = ref('');

function login() {
  firebase.auth().signInWithEmailAndPassword(email.value, password.value).then(
    (user) => {
      console.log(user);
    },
    (err) => {
      console.log(err)
    }
  );
};
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
