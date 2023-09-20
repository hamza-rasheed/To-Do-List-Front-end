import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/",
});

export const postTask = (taskName) => API.post(`todo/postTodo`, taskName);
export const getTaskData = (id) => API.get(`todo/viewTodo/${id}`);
export const getTasks = () => API.get(`todo/viewTodos`);
export const updateTask = (taskId, bol) =>
  API.patch(`todo/updateTodo/${taskId}`, bol);
export const deletetask = (id) => API.delete(`todo/deleteTodo/${id}`);
