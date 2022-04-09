import { createSlice } from "@reduxjs/toolkit";
import { getTodoAction, getTodosAction } from "./todo.action";

const initialState = {
  // Data
  todos: [],
  todo: null,

  // Loading
  loading: {
    getAll: false,
    getDetails: false,
  },

  // Error
  error: {
    getAll: null,
    getDetails: null
  }
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) =>
  builder
  // Get all todos
  .addCase(getTodosAction.pending, (state) => {
    state.error.getAll = null;
    state.loading.getAll = true;
  }).addCase(getTodosAction.fulfilled, (state, action) => {
    state.loading.getAll = false;
    state.todos = action.payload;
  }).addCase(getTodosAction.rejected, (state, action) => {
    state.loading.getAll = false;
    state.error.getAll = action.error;
  })
  // Get todo details
  .addCase(getTodoAction.pending, (state) => {
    state.error.getDetails = null;
    state.loading.getDetails = true;
  }).addCase(getTodoAction.fulfilled, (state, action) => {
    state.loading.getDetails = false;
    state.todo = action.payload;
  }).addCase(getTodoAction.rejected, (state, action) => {
    state.loading.getDetails = false;
    state.error.getDetails = action.error;
  })
})

const todoActions = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { todoActions };
export default todoReducer;