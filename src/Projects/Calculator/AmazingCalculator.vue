<script setup>
import { computed, ref } from "vue";

let displayVal = ref("0");

const appToDisplay = (value) => {
  if (displayVal.value === "0") {
    displayVal.value = value;
  } else {
    displayVal.value += value;
  }
};

const clearDisplay = () => {
  displayVal.value = "0";
};

const calculate = () => {
  try {
    displayVal.value = eval(displayVal.value).toString();
  } catch (error) {
    displayVal.value = error.message;
  }
};

const displayClass = computed(() => {
  return displayVal.value.length > 12 ? "small-text" : "";
});
</script>
<template>
  <div class="calculator-container">
    <div class="calculator">
      <input v-model="displayVal" readonly :class="displayClass" />
      <div class="calculator-row">
        <button @click="appToDisplay('7')">7</button>
        <button @click="appToDisplay('8')">8</button>
        <button @click="appToDisplay('9')">9</button>
        <button @click="appToDisplay('/')">/</button>
      </div>
      <div class="calculator-row">
        <button @click="appToDisplay('4')">4</button>
        <button @click="appToDisplay('5')">5</button>
        <button @click="appToDisplay('6')">6</button>
        <button @click="appToDisplay('*')">*</button>
      </div>
      <div class="calculator-row">
        <button @click="appToDisplay('1')">1</button>
        <button @click="appToDisplay('2')">2</button>
        <button @click="appToDisplay('3')">3</button>
        <button @click="appToDisplay('-')">-</button>
      </div>
      <div class="calculator-row">
        <button @click="appToDisplay('0')">0</button>
        <button @click="appToDisplay('.')">.</button>
        <button @click="calculate">=</button>
        <button @click="appToDisplay('+')">+</button>
      </div>
      <div class="calculator-row">
        <button @click="clearDisplay">C</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.calculator-container {
  min-height: 95vh;
  width: 100%;
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0 !important;
}

.calculator {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  padding: 32px 28px 24px 28px;
  min-width: 320px;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.calculator input {
  width: 100%;
  font-size: 2rem;
  padding: 12px 10px;
  margin-bottom: 18px;
  border: none;
  border-radius: 8px;
  background: #f3f3f3;
  text-align: right;
  color: #232526;
  font-family: "Segoe UI", "Roboto", "Arial", sans-serif;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.07);
}

.calculator button {
  width: 60px;
  height: 48px;
  margin: 6px 6px 0 0;
  font-size: 1.2rem;
  font-family: "Segoe UI", "Roboto", "Arial", sans-serif;
  border: none;
  border-radius: 8px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.1);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.calculator button:hover {
  background: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.18);
}
.calculator button:last-child {
  background: #dc3545;
  color: #fff;
}
.calculator button:last-child:hover {
  background: #b52a37;
}
.calculator-row {
  display: flex;
  width: 100%;
  justify-content: center;
}
.small-text {
  font-size: 14px;
}
</style>
