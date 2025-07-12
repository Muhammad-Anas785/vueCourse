<template>
  <div>
    <ProvideStudent />
    <hr />
    <h3>Friends List</h3>
    <ul>
      <li v-for="(dost, index) in friendsList" :key="index">
        {{ dost }}
      </li>
    </ul>
    <hr />

    <h3>Car Detail:</h3>
    <ul>
      <li v-for="(value, key, index) in carDetail" :key="index">{{ key }} : {{ value }}</li>
    </ul>
    <hr>

    <h3>Car List</h3>
    <ul>
      <li v-for="(value, index) in carList" :key="index">{{ value }}</li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from "vue";
import ProvideStudent from "./ProvideStudent.vue";
const friendsList = inject("friends");
const carDetail = inject("car");
const carList = inject("carsList");
</script>
