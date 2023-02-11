<template>
  <div class="todo-list">
    <div class="row" v-if="todoStore.todos.length">
      <div
        class="col-12 col-sm-6 col-lg-4"
        v-for="(todo, index) in todoStore.todos"
        :key="`${todo.id}-${index}`"
      >
        <TodoCard @delete-item="todoStore.removeTodo(index)" :id="index" :todo="todo"></TodoCard>
      </div>
    </div>
    <div class="todos-void" v-else>
      Задач пока нет
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todos";
import TodoCard from "./TodoCard.vue";
// import { onMounted } from "vue";

const todoStore = useTodoStore();


</script>
