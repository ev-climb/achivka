<template>
  <header>
    <img class="logo" src="../assets/images/icons/logo.png" alt="logo" />
    <img class="logo" src="../assets/images/icons/logo.png" alt="logo" />
    <div>
      <div class="cabinet">
        <img src="../assets/images/icons/lock.svg" alt="lock" />
        Кабинет родителей
      </div>
      <div class="avatar-block">
        <img class="avatar" src="../assets/images/icons/avatar-girl.svg" alt="avatar" />
        Василиса
        <img class="settings" src="../assets/images/icons/settings.svg" alt="settings" />
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .logo {
      height: 90px;
      object-fit: cover;
      margin-left: -10px;
    }
    div {
      display: flex;
      .cabinet {
        width: 300px;
        height: 55px;
        border: 3px solid #15ccae;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        font-size: 20px;
        img {
          height: 40px;
          object-fit: cover;
        }
      }
      .avatar-block {
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .avatar {
          height: 55px;
          object-fit: cover;
        }
        .settings {
          height: 40px;
          object-fit: cover;
        }
      }
    }
  }
</style>
