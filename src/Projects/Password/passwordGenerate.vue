<script setup>
import { ref } from "vue";

const passwordLength = ref(12);
const includesUpperCase = ref(true);
const includesChars = ref(true);
const includesNumber = ref(true);
const generatedPassword = ref("");

const generatePassword = () => {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = includesUpperCase.value ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numberChars = includesNumber.value ? "0123456789" : "";
  const symbolChars = includesChars.value ? "!@#$%^&*()_+[]{}|;:,.<>?/~`" : "";

  const allChars = lowerCaseChars + upperCaseChars + numberChars + symbolChars;

  let password = "";

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }
  generatedPassword.value = password;
};
</script>

<template>
  <div>
    <h3>Password Generator</h3>
    <label for="">Password Length</label>
    <input type="number" v-model="passwordLength" min="4" max="32" />
    <br />
    <label for="">Includes Uppercase</label>
    <input type="checkbox" v-model="includesUpperCase" />
    <br />
    <label for="">Includes Numbers</label>
    <input type="checkbox" v-model="includesNumber" />
    <br />
    <label for="">Includes Special Characters</label>
    <input type="checkbox" v-model="includesChars" />
    <br />
    <button @click="generatePassword">Generate Password</button>

    <div v-if="generatedPassword">
      <strong>Generated Password: {{ generatedPassword }}</strong>
    </div>
  </div>
</template>
