<template>
  <div>
    <h1>Multiple Sources watcher</h1>
    <h2>User Name: {{ username }}</h2>
    <h2>Count: {{ counter }}</h2>
    <button @click="username = 'taimoori'">Change Name</button>
    <button @click="counter++">Increment</button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

let counter = ref(0);
let username = ref("anas");

watch([username, counter], (newVal, oldVal) => {
  console.log("New Value", newVal);
  console.log("Old value", oldVal);
});
</script>
