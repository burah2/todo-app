// src/components/AddTaskForm.js
import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useContext(TaskContext);

  const addTask = () => {
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), title } });
    setTitle('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;
