// src/App.js
import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1>To-Do App</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
