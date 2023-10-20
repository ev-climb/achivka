<template>
  <div class="progressBarBlock">
    <div class="progressBarr">
      <div class="progressFill" :style="visibleProgress">
        <img class="avatar" src="../assets/images/icons/avatar-girl.svg" alt="avatar" />
      </div>
      <span>{{ progress }}%</span>
      <img class="treasure" src="../assets/images/icons/treasure.svg" alt="treasure" />
    </div>
  </div>
</template>

<script setup>
  import { computed, inject } from 'vue';

  //Шкала прогресса
  const progress = inject('progress');
  const visibleProgress = computed(() => {
    if (progress.value < 3) {
      return `width:3%`;
    } else {
      return `width:${progress.value}%`;
    }
  });
</script>

<style lang="scss" scoped>
  .progressBarBlock {
    margin-top: 170px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    .progressBarr {
      width: 100%;
      height: 15vh;
      background-color: #e906f526;
      border-radius: 40px;
      border: 3px solid #e906f5;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .treasure {
        height: 100px;
        object-fit: cover;
        position: absolute;
        right: 10px;
        top: 20px;
      }
      span {
        font-size: 60px;
        font-weight: 700;
        color: white;
        z-index: 1;
      }
      .progressFill {
        position: absolute;
        left: 0;
        height: 100%;
        max-width: 98%;
        background: #e906f597;
        box-shadow: 0px 0px 6px 5px rgba(236, 0, 251, 0.6);
        border-radius: 40px 0 0 40px;

        .avatar {
          position: absolute;
          height: 60px;
          object-fit: cover;
          right: -30px;
          top: -70px;
        }
      }
    }
  }
</style>
