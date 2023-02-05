<template>
  <div class="todo-card">
    <span class="todo-card__date">05.02.2023</span>
    <h3 class="todo-card__title mt-2">Купить хлеб</h3>
    <p class="todo-card__description">Сходить в магазин и купить хлеб</p>
    <div class="row">
      <div class="col-12 col-sm-6">
        <button class="todo-button green">Редактировать</button>
      </div>
      <div class="col-12 col-sm-6">
        <button class="todo-button red">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
