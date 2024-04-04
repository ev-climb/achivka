<template>
  <div class="main-statistics">
    <h2>Мои ачивки:</h2>
    <div class="achievements">
      <div class="points">
        <img src="../assets/images/levels/level1.png" alt="level">
      </div>
      <img src="../assets/images/levels/picForLevel1.jpg" alt="girl">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.main-statistics {
  height: 500px;
  background: #efc2f860;
  border-radius: 30px;
  padding: 50px 20px;
  width: 48%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  h2 {
    color: rgb(93, 85, 85);
  }
  .achievements {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 50px;
    justify-content: space-between;
    .points {
      position: relative;
      width: 100%;
      img {
        position: absolute;
        max-height: 200px;
        border: none;
        transform: rotate(0deg);
      }
    }
    img {
      max-height: -webkit-fill-available;
      border: 3px solid #e906f5;
      border-radius: 30px;
      transform: rotate(-4deg);
    }
  }
}
</style>