<script lang="ts" src="./MyCounterScript2.ts"></script>

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
