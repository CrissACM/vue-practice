<script setup lang="ts">
import MyCounterScript2 from './components/my-counter-sript/MyCounterScript2.vue';
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>

<template>
  <h1>Indecision App</h1>
  <p>Let the computer decide for you!</p>

  <hr />

  <MyCounter :value="1" />
  <MyCounterScript :value="2" />
  <MyCounterScript2 :value="3" />
</template>
