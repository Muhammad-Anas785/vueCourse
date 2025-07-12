import { ref } from "vue";

export const useCounter = (initialValue) => {
  const count = ref(initialValue);
  const inc = () => count.value++;
  const dec = () => count.value--;
  return { count, inc, dec };
};
