import { ITodo } from './../types/api';
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useTodoStore = defineStore('todoStore', () => {
    const todoTitle = ref("");
    const todoDescription = ref("");
    const todos = ref<ITodo[]>([])

    const addTodo = (todo: ITodo) => {
        todos.value = [todo, ...todos.value]
    }

    const removeTodo = (id: number) => {
        todos.value.splice(id, 1)
    }

    const updateTodo = (todo: ITodo) => {
        const index = todos.value.findIndex(item => item.id === todo.id)
        if (index > -1) {
            const newTodos = [...todos.value];
            newTodos[index] = todo;
            todos.value = newTodos
        }
    }

    return { todos, todoTitle, todoDescription, addTodo, removeTodo, updateTodo }
})