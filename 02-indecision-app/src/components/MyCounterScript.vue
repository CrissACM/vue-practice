<script lang="ts">
import { defineComponent } from 'vue';
import useCounter from './composable/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, counterSquared } = useCounter(props.value);

    return { counter, counterSquared };
  },
});
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
