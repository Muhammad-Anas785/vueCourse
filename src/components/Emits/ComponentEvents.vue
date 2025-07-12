<template>
  <div>
    <h1>Component Event</h1>
    <h2>Count: {{ count }}</h2>
    <!-- <ChildComponentEvents @incrementCount="count++" /> -->
    <h1>Form data</h1>
    <h2>Name:{{ dataName }}</h2>
    <h2>Email: {{ dataEmail }}</h2>
    <h2>Password: {{ dataPass }}</h2>
    <FormEvents @userInfo="submitInfo" />
  </div>
</template>

<script setup>
import { ref } from "vue";
// import ChildComponentEvents from "./ChildComponentEvents.vue";
import FormEvents from "./FormEvents.vue";

let count = ref(0);
let dataName = ref("");
let dataEmail = ref("");
let dataPass = ref("");
const submitInfo = (name, email, password) => {
  dataName.value = name;
  dataEmail.value = email;
  dataPass.value = password;
  console.log(name, email, password);
};
</script>
