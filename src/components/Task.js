// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    const newDescription = prompt('Edit task description', task.description);
    if (newDescription) {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description: newDescription } });
    }
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <div className="task-item" >
      <span>{task.description}</span>
      <button className="done" onClick={handleToggle}>
        {task.isDone ? 'Undo' : 'Done'}
      </button>
      <button className="edit" onClick={handleEdit}>Edit</button>
      <button className="remove" onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Task;
