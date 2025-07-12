<template>
  <div>
    <h1 v-if="isLoggedIn">Welcom, {{ name }}</h1>
    <h1 v-else>Please use creds to show details</h1>
    <div v-show="showDetails">
      <h2>You are now able to show details</h2>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

let name = ref("anas");
let isLoggedIn = ref(true);
let showDetails = ref(isLoggedIn);
</script>
