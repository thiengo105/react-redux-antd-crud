import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoService } from "services/todo.service";

const PREFIX = "todo";
const actionNames = {
  getTodos: PREFIX + "/getTodos",
  getTodo: PREFIX + "/getTodo",
  createTodo: PREFIX + "/createTodo",
  editTodo: PREFIX + "/editTodo",
  deleteTodo: PREFIX + "/deleteTodo",
}

export const getTodosAction = createAsyncThunk(
  actionNames.getTodos,
  async (params) => {
    const response = await TodoService.getTodos(params)
    return response.data;
  }
)

export const getTodoAction = createAsyncThunk(
  actionNames.getTodo,
  async (todoId) => {
    const response = await TodoService.getTodo(todoId);
    return response.data
  }
)


export const createTodoAction = createAsyncThunk(
  actionNames.createTodo,
  async (body) => {
    await TodoService.createTodo(body);
    return Promise.resolve();
  }
)


export const editTodoAction = createAsyncThunk(
  actionNames.editTodo,
  async ({ todoId, body }) => {
    await TodoService.editTodo(todoId, body);
    return Promise.resolve();
  }
)


export const deleteTodoAction = createAsyncThunk(
  actionNames.editTodo,
  async (todoId) => {
    await TodoService.deleteTodo(todoId);
    return Promise.resolve();
  }
)

