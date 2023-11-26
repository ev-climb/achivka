<template>
    <div class="main-per-day">
        <h2>Сегодня я...</h2>
        <ul>
            <li v-for="(action, index) in actions" :key="index">{{action.text}}</li>
        </ul>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const actions = inject('completedActions');

</script>

<style lang="scss" scoped>
.main-per-day {
    height: 500px;
    background: #efc2f860;
    border-radius: 30px;
    padding: 50px 20px;
    width: 48%;
}
</style>