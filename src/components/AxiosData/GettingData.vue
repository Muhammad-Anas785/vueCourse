<template>
  <div>
    <h1>Get Data Using Axios</h1>
    <button @click="fetchData">Fetch Data</button>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    data.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
</script>
