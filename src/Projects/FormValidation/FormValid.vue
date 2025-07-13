<script setup>
import { computed, ref } from "vue";

let name = ref("");
let email = ref("");
let password = ref("");

let isValidName = computed(() => name.value.trim() !== "");
let isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
let isValidPassword = computed(() => password.value.length >= 8);

let isValidForm = computed(() => isValidName.value && isValidEmail.value && isValidPassword.value);

const formSubmit = () => {
  if (isValidForm.value) {
    alert("Form Submitted");
  } else {
    alert("Check your credentials");
  }
};
</script>

<template>
  <div class="formBody">
    <div class="formConatainer">
      <h2 class="formHeading">Form Validation</h2>
      <form @submit.prevent="formSubmit">
        <div class="form-group">
          <label for="">Name:</label>
          <input type="text" placeholder="Enter the Name.." v-model="name" />
          <p v-if="!isValidName">Please enter the valid name</p>
        </div>
        <div class="form-group">
          <label for="">Email:</label>
          <input type="email" placeholder="Enter the Email.." v-model="email" />
          <p v-if="!isValidEmail">Please enter the valid email</p>
        </div>
        <div class="form-group">
          <label for="">Password:</label>
          <input type="password" placeholder="Enter the Password.." v-model="password" />
          <p v-if="!isValidPassword">Password length must be atleast 8</p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.formBody {
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.formConatainer {
  border: 1px solid black;
  width: 30%;
  height: 80vh;
  justify-content: center;
  border-radius: 20px;
  padding: 10px 50px;
}
.formHeading {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 30px;
}
label{
  display: block;
  margin: 10px 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
p{
  color: red;
  font-size: 14px;
}
</style>
