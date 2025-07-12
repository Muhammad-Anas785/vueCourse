<script setup>
import { ref } from "vue";

let todoItem = ref("");
let todoList = ref([]);

const addTodo = () => {
  if (todoItem.value.trim() !== "") {
    todoList.value.push(todoItem.value);
    todoItem.value = "";
  }
};
const removeTodo = (index) => {
  todoList.value.splice(index, 1);
};
</script>

<template>
  <div class="todoApp">
    <h1 class="todoHead">Todo App</h1>
    <div class="todoContainer">
      <input type="text" placeholder="Enter the todo item" v-model="todoItem" class="todoInput" />
      <button @click="addTodo" class="addBtn">Add Todo</button>
    </div>
    <div class="todoListContainer">
      <ul class="todoList">
        <li v-for="(todo, index) in todoList" :key="index" class="todoItem">
          {{ todo }}
          <button @click="removeTodo(index)" class="delBtn">Delete Todo</button>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.todoApp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todoHead {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 5rem;
  color: black;
}
.todoInput{
  width: 300px;
  height: 20px;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}
.addBtn {
  padding: 5px 20px;
  font-size: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.delBtn {
  padding: 5px 20px;
  font-size: 1rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.todoContainer {
  display: flex;
  justify-content: center;
}
.todoLisContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todoList{
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.todoItem {
  width: 300px;
  padding: 10px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
