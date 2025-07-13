<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "What is HTML?",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    open: false,
  },
  {
    title: "What is CSS?",
    content:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    open: false,
  },
  {
    title: "What is JS?",
    content:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    open: false,
  },
]);

const toggleItem = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    open: index === i ? !item.open : false,
  }));
};
</script>

<template>
    <div class="accordionContainer">
      <div v-for="(item, index) in items" :key="index" class="accordianList">
        <div class="accordion-header" @click="toggleItem(index)">
          {{ item.title }}
          <span>{{ item.open ? "▼" : "▶" }}</span>
        </div>
        <div v-show="item.open" class="accordianContent">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
</template>

<style scoped>

.accordionContainer {
  max-width: 100%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.accordianList {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  width: 50%;
}
.accordion-header {
  background-color: #3498db;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #fff;
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordianContent {
  padding: 15px;
  border-top: 1px solid #ddd;
  background-color: #f9f9f9;
  color: #333;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
