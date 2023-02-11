import { ITodo } from './../types/api';
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue';

export const useTodoStore = defineStore('todoStore', () => {
    const todoTitle = ref("");
    const todoDescription = ref("");
    const todos = ref<ITodo[]>([])
    const selectedTodo = ref<ITodo>({
        id: 1,
        date: '',
        title: '',
        description:''
    })

    const addTodo = (todo: ITodo) => {
        todos.value = [todo, ...todos.value]
    }

    const removeTodo = (id: number) => {
        todos.value.splice(id, 1)
    }

    const selectTodo = (id: number) => {
        selectedTodo.value = todos.value.find(todo => todo.id === id || null) || {
            id: 1,
            date: '',
            title: '',
            description:''
        }
    }

    const updateTodo = (todo: ITodo) => {
        const index = todos.value.findIndex(item => item.id === todo.id)
        console.log(index);
        
        if (index > -1) {
            const newTodos = [...todos.value];
            newTodos[index] = todo;
            todos.value = newTodos
        }
    }

    return { todos, todoTitle, todoDescription, selectedTodo, selectTodo, addTodo, removeTodo, updateTodo }
})