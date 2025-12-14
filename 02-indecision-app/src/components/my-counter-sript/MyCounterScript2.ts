import { defineComponent } from 'vue';
import useCounter from '../composable/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const { counter, counterSquared } = useCounter(props.value);

    return { counter, counterSquared };
  },
});
