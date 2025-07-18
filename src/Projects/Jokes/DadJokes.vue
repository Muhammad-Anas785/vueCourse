<script setup>
import axios from "axios";
import { ref } from "vue";

let joke = ref("");
const getJokes = async () => {
  try {
    let jokeItem = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    joke.value = jokeItem.data.joke;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <h2>Dad's Jokes</h2>
    <button @click="getJokes">Get the Joke</button>
    <p v-if="joke">{{ joke }}</p>
  </div>
</template>
