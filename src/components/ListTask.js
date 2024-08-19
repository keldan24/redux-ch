// src/components/ListTask.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button
          onClick={() => setFilter('done')}
          className={filter === 'done' ? 'active' : ''}
        >
          Done
        </button>
        <button
          onClick={() => setFilter('notDone')}
          className={filter === 'notDone' ? 'active' : ''}
        >
          Not Done
        </button>
      </div>
      <div>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
