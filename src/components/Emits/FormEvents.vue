<template>
  <div>
    <form @submit.prevent="$emit('userInfo', userName, userEmail, userPassword)">
      <input type="text" v-model="userName" placeholder="enter the name" />
      <input type="email" v-model="userEmail" placeholder="enter the email" />
      <input type="password" v-model="userPassword" placeholder="enter the password" />
      <input type="submit" value="Click" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

let userName = ref("");
let userEmail = ref("");
let userPassword = ref("");
</script>
