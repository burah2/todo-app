// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: { id: task.id } });
  };

  const handleToggleComplete = () => {
    dispatch({ type: 'UPDATE_TASK', payload: { id: task.id, completed: !task.completed } });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      <p>{task.title}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
