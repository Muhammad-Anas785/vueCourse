<template>
  <div>
    <h1>Count:{{ initialState.val.count }}</h1>
    <h1>Users: {{ initialState.users }}</h1>
    <button @click="initialState.val.count += 10">Add 10</button>
    <button @click="changeUserFunc">Change User</button>
    <button @click="addUser">Add user</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const initialState = reactive({ val: { count: 0 }, users: ["anas", "naseer"] });
const changeUserFunc = () => {
  initialState.users[0] = "muhammad";
  initialState.users[1] = "anas";
};
const addUser = () => {
  initialState.users.push("taimoori");
};
</script>
