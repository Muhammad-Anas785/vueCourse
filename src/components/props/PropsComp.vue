<template>
  <div>
    <h1>Props</h1>
    <!-- <PropsValidation :fullName="name" :age="age" /> -->
    <!-- <ComplexProps :friends="friends" :userInfo="userInfo" /> -->
    <CustomValidatorProp name="anas" :age="28" password="impossiblePassword" />
  </div>
</template>

<script setup>
//props are 'immutable' which means there value can't be change and they are read only
import CustomValidatorProp from "./CustomValidatorProp.vue";
// import { ref } from "vue";
// import ComplexProps from "./props/ComplexProps.vue";
// import PropsValidation from "./PropsValidation.vue";
// const name = ref("anas");
// const age = ref(25);

// const friends = ref(["a", "b", "c", "d"]);
// const userInfo = ref({
//   name: "anas",
//   age: 25,
//   location: ["karachi", "pakistan"],
// });
</script>
