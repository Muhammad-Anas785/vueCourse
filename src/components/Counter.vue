<script setup>
import { ref } from "vue";
let count = ref(0);
const incCount = () => {
  count.value++;
};

const decCount = () => {
  count.value--;
};
</script>
<template>
  <h1>Count: {{ count }}</h1>
  <button @click="incCount">Increment</button>
  <button @click="decCount">Decrement</button>
</template>
