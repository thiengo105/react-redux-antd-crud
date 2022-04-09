import axios from "axios";
import { API_URL } from "constants/api-url";

export class TodoService {

  static getTodos(params) {
    return axios.get(API_URL + `/todo`, { params });
  }

  static getTodo(todoId) {
    return axios.get(API_URL + `/todo/${todoId}`);
  }

  static createTodo(body) {
    return axios.post(API_URL + `/todo`, body);
  }

  static editTodo(todoId, body) {
    return axios.put(API_URL + `/todo/${todoId}`, body);
  }

  static deleteTodo(todoId) {
    return axios.delete(API_URL + `/todo/${todoId}`);
  }
}