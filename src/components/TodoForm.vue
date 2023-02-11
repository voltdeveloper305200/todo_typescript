<template>
  <form @submit.prevent="addTodo" action="">
    <div class="row">
      <div class="col-xl-5 col-lg-4">
        <input
          v-model="todoStore.todoTitle"
          placeholder="Title"
          class="todo-input"
          name="title"
          type="text"
        />
      </div>
      <div class="col-xl-5 col-lg-4 mt-3 mt-lg-0">
        <input
          v-model="todoStore.todoDescription"
          placeholder="Short description"
          class="todo-input"
          name="description"
          type="text"
        />
      </div>
      <div class="col-xl-2 col-lg-4 mt-3 mt-lg-0">
        <button class="todo-button green">Add task</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useTodoStore } from "../stores/todos";
import { ITodo } from "../types/api";
import { randomInteger } from "../utils/utils";
import { useDate } from "../utils/date";

const todoStore = useTodoStore();

const {formatingDate} = useDate();

const resetForm = () => {
  todoStore.todoTitle = "";
  todoStore.todoDescription = "";
};

const addTodo = () => {
  const newTodo: ITodo = {
    id: randomInteger(1, 10000),
    title: todoStore.todoTitle,
    description: todoStore.todoDescription,
    date: formatingDate(),
  };
  todoStore.addTodo(newTodo);
  resetForm();
};
</script>
