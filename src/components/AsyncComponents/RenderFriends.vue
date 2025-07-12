<template>
  <div>
    <h1>Friends List</h1>
    <ul>
      <li v-for="(fr, index) in friends" :key="index">
        {{ fr }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const friends = ref(["anas", "jibran", "arshan"]);
</script>
