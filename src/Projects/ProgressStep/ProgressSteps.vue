<script setup>
import { ref } from "vue";

const steps = ref(["Step 1", "Step 2", "Step 3"]);
const currentStep = ref(0);
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) {
    currentStep.value++;
  }
};
const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>

<template>
  <div class="progress-container">
    <h2>Progress Steps</h2>
    <div class="steps-list">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['step', { 'step-active': index === currentStep } ]"
      >
        {{ step }}
      </div>
    </div>
    <div>
      <button @click="previousStep" :disabled="currentStep === 0">Previous Step</button>
      <button @click="nextStep" :disabled="currentStep === steps.length - 1">Next Step</button>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

h2 {
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  color: #764ba2;
  margin-bottom: 32px;
  font-size: 2rem;
}

.steps-list {
  display: flex;
  gap: 24px;
  margin-bottom: 32px;
}

.step {
  padding: 16px 32px;
  border-radius: 24px;
  background: #f3f3f3;
  color: #333;
  font-size: 1.1rem;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.07);
  transition: background 0.2s, color 0.2s;
}
.step-active {
  background: linear-gradient(90deg, #667eea 0%, #af514c 100%);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.18);
}

button {
  padding: 10px 28px;
  font-size: 1rem;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  background: linear-gradient(90deg, #667eea 0%, #af514c 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin: 0 8px;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.10);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
button:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
}
button:hover:not(:disabled) {
  background: linear-gradient(90deg, #af514c 0%, #667eea 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.18);
}
</style>
