import { createReducer } from '@reduxjs/toolkit';
import { addTask, updateTask, deleteTask, updateTaskStatus, setTasks } from '../actions/taskActions';

const initialState = {
  tasks: [],
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.tasks.push(action.payload);
    })
    .addCase(updateTask, (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    })
    .addCase(deleteTask, (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    })
    .addCase(updateTaskStatus, (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index].status = action.payload.status;
      }
    })
    .addCase(setTasks, (state, action) => {
      state.tasks = action.payload.map(task => ({
        ...task,
        status: task.completed ? 'Completed' : 'To-Do',
      }));
    });
});

export default taskReducer;
