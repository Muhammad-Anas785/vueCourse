<template>
  <div>
    <h1>Counter: {{ state.count }}</h1>
    <button @click="state.inc">Increment</button>
    <button @click="state.dec">Decrement</button>
  </div>
</template>

<script setup>
import { useCounter } from "@/Composables/useCounter";

const state = useCounter(10);
</script>
