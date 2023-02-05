<template>
  <div class="todo-list">
    <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
            <TodoCard></TodoCard>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoCard from "./TodoCard.vue";

export default defineComponent({
  setup() {},
  components: {
    TodoCard
  }
});
</script>
