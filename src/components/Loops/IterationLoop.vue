<template>
  <div>
    <p v-for="(person, index) in names" :key="index">{{ index + 1 }} : {{ person }}</p>
    <!-- Students -->

    <ul v-for="({ id, name, age }, index) in students" :key="index">
      <li>Id: {{ id }}</li>
      <li>Name: {{ name }}</li>
      <li>Age: {{ age }}</li>
    </ul>

    <!-- foods array of arrays -->
    <ul v-for="(food, i) in foods" :key="i">
      <li v-for="(f, index) in food" :key="index">
        {{ f }}
      </li>
    </ul>

    <!-- games -->
    <ul v-for="(game, key, i) in complexObjects" :key="i">
      <li>{{ game }}</li>
      <li v-for="(val, index) in game" :key="index">{{ val }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

let names = ref(["Muhammad", "anas", "naseer", "taimoori"]);
let students = ref([
  { id: 1, name: "anas", age: 25 },
  { id: 2, name: "haider", age: 25 },
  { id: 3, name: "huzaifa", age: 25 },
  { id: 4, name: "sami", age: 25 },
]);
let foods = ref([
  ["biryani", "korma"],
  ["burger", "pizza"],
  ["noodles", "chowmein"],
]);

let complexObjects = ref({
  game1: { name: "gta", release: 2011 },
  game2: { name: "gta 6", release: 2025 },
});
</script>
