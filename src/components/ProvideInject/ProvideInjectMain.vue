<template>
  <div>
    <ProvideSchool />
  </div>
</template>

<script setup>
//Provide Inject Hamen props drilling se bachata hai
//ismain ham data kahin bhi bnaden fetch ham kisi bhi component mein ksrskty hain
//provide method se ham data declare aur store krty hain
//inject method se ham data fetch krty hain jahan bhi hamen data chahye hota hai
// syntax --> provide("property-name", property-value);
// syntax --> let stdName = inject("property-name");

import { provide } from "vue";
import ProvideSchool from "./ProvideSchool.vue";

provide("studentName", "anas");
provide("studentAge", 25);
provide("studentLocation", ["khi", "pk"]);

provide("friends", ["anas", "huzaifa", "haider"]);
provide("car", {
  name: "Lamborghini",
  model: "Aventador",
  releaseDate: "2025",
  color: "Black",
});
provide("carsList", [
  {
    name: "Lamborghini",
    model: "Aventador",
    releaseDate: "2025",
    color: "Black",
  },
  {
    name: "Bugatti",
    model: "Chiron",
    releaseDate: "2024",
    color: "White",
  },
  {
    name: "Toyota",
    model: "Supra",
    releaseDate: "2024",
    color: "Red",
  },
]);
</script>
