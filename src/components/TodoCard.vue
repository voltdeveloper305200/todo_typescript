<template>
  <div class="todo-card">
    <span class="todo-card__date">{{ todo.date }}</span>
    <div v-if="!isChanging" class="mt-2">
      <h3 class="todo-card__title mb-0">{{ todo.title }}</h3>
      <p class="todo-card__description mb-0 mt-2">{{ todo.description }}</p>
    </div>
    <div class="mt-2" v-else>
      <input v-model="title" class="todo-change-input" type="text">
      <input v-model="description" class="todo-change-input mt-2" type="text">
    </div>
    <div class="row mt-4">
      <div class="col-12 col-sm-6">
        <button
          @click="isChanging = true"
          v-if="!isChanging"
          class="todo-button green"
        >
          Редактировать
        </button>
        <button @click="changeTodo" v-else class="todo-button green">Сохранить</button>
      </div>
      <div class="col-12 col-sm-6">
        <button @click="$emit('delete-item')" class="todo-button red">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ITodo } from "../types/api";
import { useTodoStore } from "../stores/todos";
import { randomInteger } from "../utils/utils";
const todoStore = useTodoStore();

interface Props {
  todo: ITodo;
  id: number;
}

const isChanging = ref(false);
const title = ref('');
const description = ref('');

const date = new Date();
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
const year = date.getFullYear();

const changeTodo = () => {
  const newTodo:ITodo = {
    id: randomInteger(1, 10000),
    title: title.value,
    description: description.value,
    date: `${day}.${month}.${year}`
  } 
  todoStore.updateTodo(newTodo)
  isChanging.value = false
}

defineProps<Props>();
</script>
