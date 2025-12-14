import { computed, ref } from 'vue';

export default function useCounter(initialValue: number = 5) {
  const counter = ref(initialValue);
  const counterSquared = computed(() => counter.value * counter.value);

  return {
    counter,
    counterSquared,
  };
}
