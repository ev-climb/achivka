<template>
  <div class="main-statistics">
    <h2>Мои ачивки:</h2>
    <div class="achievements">
      <img 
        v-for="icon in achievements" 
        :src="icon.urn" 
        :key="icon.index" 
        :width="icon.width" 
        :style="`rotate: ${icon.rotate}deg`" />
    </div>
  </div>
</template>

<script setup>
import traveler from '../assets/images/achievments/achiev-traveler.svg';
import chess from '../assets/images/achievments/achiev-chess.svg';
import brain from '../assets/images/achievments/achiev-brain.svg';
const achievements = [
  {
    index: 0,
    urn: traveler,
    width: 150,
    rotate: 20,
  },{
    index: 0,
    urn: chess,
    width: 80,
    rotate: 10,
  },{
    index: 0,
    urn: brain,
    width: 170,
    rotate: -20,
  },
]
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
    margin-top: 20px;
    padding: 20px;
    width: 90%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 0px 10px 0px rgba(189, 104, 184, 0.4) inset;
    border-radius: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    img{
      cursor: pointer;
      transition: all 0.2s ease-in;
      &:hover{
        scale: 1.1;
      }
    }
  }
}
</style>