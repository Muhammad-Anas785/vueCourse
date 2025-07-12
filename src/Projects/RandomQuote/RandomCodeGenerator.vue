<script setup>
import { onMounted, ref } from "vue";
const quotes = ref([
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "C.S. Lewis",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "It always seems impossible until it is done.", author: "Nelson Mandela" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
]);

let currentQoute = ref({ text: "", author: "" });

const generateQuote = () => {
  let quoteIndex = Math.floor(Math.random() * quotes.value.length);
  currentQoute.value = quotes.value[quoteIndex];
};

onMounted(() => {
  generateQuote();
});
</script>

<template>
  <div class="quote-body">
    <h1 class="app-title">Random Quote Generator</h1>
    <blockquote class="quote-block">
      <p>Qoute: {{ currentQoute.text }}</p>

      <cite> Author: {{ currentQoute.author }} </cite>
    </blockquote>
    <button @click="generateQuote" class="quoteBtn">Generate quote</button>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.quote-body {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.app-title {
  color: #fff;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 32px;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.quote-block {
  background: rgba(255,255,255,0.97);
  border-radius: 18px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
  padding: 36px 32px 24px 32px;
  min-width: 340px;
  max-width: 90vw;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 6px solid #764ba2;
  position: relative;
}
.quote-block p {
  font-size: 1.3rem;
  color: #333;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-bottom: 18px;
  text-align: center;
  font-style: italic;
}
.quote-block cite {
  font-size: 1.1rem;
  color: #764ba2;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  text-align: right;
  display: block;
  font-style: normal;
}

.quoteBtn {
  padding: 12px 32px;
  font-size: 1.1rem;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(31, 38, 135, 0.15);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
}
.quoteBtn:hover {
  background: linear-gradient(90deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(31, 38, 135, 0.22);
}
</style>
