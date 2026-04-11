import axios from 'axios'

const API = axios.create({
    baseURL:"http://localhost:8000/api"
})

export const getTodos = () => API.get('/todos');

export const createTodo = (data: { title: string }) => API.post('/todos', data);

export const updateTodo = (id: string, data: { title: string }) => API.put(`/todos/${id}`, data);

export const deleteTodo = (id: string) => API.delete(`/todos/${id}`);

export const toggleTodo = (id: string, completed: boolean) => API.put(`/todos/${id}`, { completed });

export default API;