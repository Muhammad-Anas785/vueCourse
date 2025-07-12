<template>
  <div>
    <h1>Name:{{ userInfo.name }}</h1>
    <h1>Age:{{ userInfo.age }}</h1>
    <h1>Location: {{ userInfo.location }}</h1>
    <button @click="userInfo.name = 'anas'">Change Name</button>
    <button @click="userInfo.age = 25">Change Age</button>
    <button @click="userInfo.location = ['us', 'tx']">Change Location</button>

    <h1>Separate</h1>
    <h2>1. {{ friends[0] }}</h2>
    <h2>2. {{ friends[1] }}</h2>
    <button @click="handShakeFunc">Handshake</button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

let userInfo = ref({
  name: "haider",
  age: 23,
  location: ["pk", "khi"],
});

let friends = reactive([ref("anas"), ref("haider")]);

const handShakeFunc = () => {
    friends[0].value='hand'
    friends[1].value='handshake'
  console.log(friends[0].value);
};
</script>
