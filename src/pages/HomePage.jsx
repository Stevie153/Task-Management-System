import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/actions/taskActions';
import { fetchTasks } from '../services/api';

const HomePage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      dispatch(setTasks(tasks));
    };
    getTasks();
  }, [dispatch]);

  const taskOverview = {
    total: tasks.length,
    todo: tasks.filter(task => task.status === 'To-Do').length,
    inProgress: tasks.filter(task => task.status === 'In-Progress').length,
    completed: tasks.filter(task => task.status === 'Completed').length,
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  const recentTasks = tasks.slice(0, 5);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome to the Task Management System</h1>
      <p className="mb-8 text-center text-lg">Track your tasks and stay organized.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button onClick={() => setFilter('All')} className="bg-blue-100 p-6 rounded-lg shadow-md text-center focus:outline-none">
          <h2 className="text-xl font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold">{taskOverview.total}</p>
        </button>
        <button onClick={() => setFilter('To-Do')} className="bg-yellow-100 p-6 rounded-lg shadow-md text-center focus:outline-none">
          <h2 className="text-xl font-semibold">To-Do</h2>
          <p className="text-2xl font-bold">{taskOverview.todo}</p>
        </button>
        <button onClick={() => setFilter('In-Progress')} className="bg-green-100 p-6 rounded-lg shadow-md text-center focus:outline-none">
          <h2 className="text-xl font-semibold">In-Progress</h2>
          <p className="text-2xl font-bold">{taskOverview.inProgress}</p>
        </button>
        <button onClick={() => setFilter('Completed')} className="bg-purple-100 p-6 rounded-lg shadow-md text-center focus:outline-none">
          <h2 className="text-xl font-semibold">Completed</h2>
          <p className="text-2xl font-bold">{taskOverview.completed}</p>
        </button>
      </div>

      <h2 className="text-3xl font-bold mb-4">{filter === 'All' ? 'Recent Tasks' : `${filter} Tasks`}</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks available.</p>
        ) : (
          <ul>
            {filteredTasks.slice(0, filter === 'All' ? 5 : filteredTasks.length).map(task => (
              <li key={task.id} className="mb-2">
                <Link to={`/tasks/${task.id}`} className="text-blue-500 hover:underline">
                  {task.title}
                </Link>
                <span className="text-gray-500"> - {task.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
