<template>
  <form @submit.prevent="addTodo" action="">
    <div class="row">
      <div class="col-xl-5 col-lg-4">
        <input
          v-model="todoStore.todoTitle"
          placeholder="Название"
          class="todo-input"
          name="title"
          type="text"
        />
      </div>
      <div class="col-xl-5 col-lg-4 mt-3 mt-lg-0">
        <input
          v-model="todoStore.todoDescription"
          placeholder="Краткое описание"
          class="todo-input"
          name="description"
          type="text"
        />
      </div>
      <div class="col-xl-2 col-lg-4 mt-3 mt-lg-0">
        <button class="todo-button green">Добавить задачу</button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useTodoStore } from "../stores/todos";
import { ITodo } from "../types/api";
import { randomInteger } from "../utils/utils";

const todoStore = useTodoStore();

const date = new Date();
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
const year = date.getFullYear();

const addTodo = () => {
  const data: ITodo = {
    id: randomInteger(1, 10000),
    title: todoStore.todoTitle,
    description: todoStore.todoDescription,
    date: `${day}.${month}.${year}`,
  };
  todoStore.addTodo(data);
};
</script>
