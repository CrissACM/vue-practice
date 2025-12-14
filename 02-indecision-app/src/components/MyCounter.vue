<script setup lang="ts">
import useCounter from './composable/useCounter';

interface Props {
  value: number;
}

const props = defineProps<Props>();

const { counter, counterSquared } = useCounter(10);
</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Counter Squared: {{ counterSquared }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>
