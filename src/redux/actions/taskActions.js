import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('ADD_TASK');
export const updateTask = createAction('UPDATE_TASK');
export const deleteTask = createAction('DELETE_TASK');
export const updateTaskStatus = createAction('UPDATE_TASK_STATUS');
export const setTasks = createAction('SET_TASKS');
