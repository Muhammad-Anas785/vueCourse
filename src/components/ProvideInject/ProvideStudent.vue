<template>
  <div>
    <h1>Student Info</h1>
    <h2>Name: {{ stdName }}</h2>
    <h2>Age: {{ stdAge }}</h2>
    <h2>Location: {{ stdLoc }}</h2>
  </div>
</template>

<script setup>
import { inject } from "vue";

let stdName = inject("studentName");
let stdAge = inject("studentAge");
let stdLoc = inject("studentLocation");
</script>
