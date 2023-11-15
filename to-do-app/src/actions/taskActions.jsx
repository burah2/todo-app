// src/actions/taskActions.js
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action creators
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (taskId, updatedTask) => ({
  type: UPDATE_TASK,
  payload: { id: taskId, updatedTask },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: { id: taskId },
});
