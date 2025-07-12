<template>
  <div>
    <h1>Number: {{ number }}</h1>
    <h2>Squared Number: {{ squaredNumber }}</h2>
    <!-- Other example -->
    <h1>Counter:</h1>
    <h2>Number: {{ count }}</h2>
    <h2>Squared Counter: {{ squaredCounter }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const number = ref(5);
const count = ref(2);

const increment = () => {
  count.value++;
};
const squaredNumber = computed(() => {
  return number.value * number.value;
});
const squaredCounter = computed(() => {
  return count.value ** 2;
});
</script>
