<template>
  <div>
    <h2>Count: {{ count }}</h2>
    <button @click="inc">Increment</button>
    <button @click="dec">Decrement</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

let count = ref(1);
const inc = () => {
  count.value++;
};
const dec = () => {
  count.value--;
};

defineExpose({ count, inc, dec }); //defineExpose se parent component child comp k refs utha leta hai
//abhi isky refs private hain
</script>
