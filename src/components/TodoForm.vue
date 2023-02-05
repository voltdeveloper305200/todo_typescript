<template>
  <div class="row">
    <div class="col-xl-5 col-lg-4">
      <input class="todo-input" type="text" />
    </div>
    <div class="col-xl-5 col-lg-4 mt-3 mt-lg-0">
      <input class="todo-input" type="text" />
    </div>
    <div class="col-xl-2 col-lg-4 mt-3 mt-lg-0">
      <button class="todo-button green">Добавить задачу</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>
