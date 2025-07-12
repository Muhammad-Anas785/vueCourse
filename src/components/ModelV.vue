<template>
  <div>
    <form @submit.prevent>
      <input type="text" placeholder="enter your name" v-model="formData.name" />
      <input type="email" placeholder="enter your email" v-model="formData.email" />
      <input type="password" placeholder="enter your password" v-model="formData.password" />
      <input type="submit" value="Submit" />
    </form>
    <div>
      <h1>{{ formData.name }}</h1>
      <h1>{{ formData.email }}</h1>
      <h1>{{ formData.password }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let formData = ref({
  name: "",
  email: "",
  password: "",
});
</script>
