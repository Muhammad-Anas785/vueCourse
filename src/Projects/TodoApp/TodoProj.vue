<script setup>
import { reactive, ref } from "vue";

let todo = ref("");
let todoList = ref([]);

const addTodoItem = () => {
  if (todo.value.trim() !== "") {
    todoList.value.push(todo.value);
    todo.value = "";
  }
  // todo.value = "";
};
</script>

<template>
  <div>
    <h1>Todo Application</h1>
    <ul>
      <li v-for="(todo, i) in todoList" :key="i">{{ todo }}</li>
    </ul>
    <input type="text" placeholder="Enter the item" v-model="todo" />
    <button @click="addTodoItem">Add Todo Item</button>
  </div>
</template>
