<script setup>
import axios from "axios";
import { ref } from "vue";

let username = ref("");
let userProfile = ref(null);
let errorMsg = ref(null);

const getUsers = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username.value}`);
    const data = response.data;
    if (response.status == 200) {
      userProfile.value = data;
      errorMsg.value = null;
    } else {
      userProfile.value = null;
      errorMsg.value = `Error: ${data.message}`;
    }
  } catch (error) {
    console.log(error);
    errorMsg.value = "An error has occured in fetching data.";
  }
};
</script>

<template>
  <div>
    <h2>Github User Search</h2>
    <div class="github-user-container">
      <input type="text" v-model="username" />
      <button @click="getUsers">Get The User</button>
    </div>
    <div v-if="userProfile" class="data-result">
      <p>Login Id: {{ userProfile.login }}</p>
      <p>Name: {{ userProfile.name }}</p>
    </div>
    <div v-if="errorMsg" class="error-message">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>
