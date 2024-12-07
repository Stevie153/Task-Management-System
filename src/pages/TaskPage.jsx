import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskList from '../components/task/TaskList';
import TaskDetails from '../components/task/TaskDetails';
import TaskForm from '../components/task/TaskForm';
import { addTask, updateTask, deleteTask, updateTaskStatus, setTasks } from '../redux/actions/taskActions';
import { fetchTasks } from '../services/api';

const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      dispatch(setTasks(tasks));
    };
    getTasks();
  }, [dispatch]);

  const handleSaveTask = (task) => {
    if (task.id) {
      dispatch(updateTask(task));
    } else {
      task.id = new Date().getTime();
      dispatch(addTask(task));
    }
    setIsFormOpen(false);
    setSelectedTask(null);
  };

  const handleUpdateStatus = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    const newStatus = task.status === 'To-Do' ? 'In-Progress' : task.status === 'In-Progress' ? 'Completed' : 'To-Do';
    dispatch(updateTaskStatus({ id: taskId, status: newStatus }));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return task.status === filter;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Tasks</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setIsFormOpen(true);
            setSelectedTask(null);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
        >
          Add Task
        </button>
      </div>
      <div className="mb-4">
        <button onClick={() => setFilter('All')} className={`mr-2 px-4 py-2 rounded ${filter === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>All</button>
        <button onClick={() => setFilter('To-Do')} className={`mr-2 px-4 py-2 rounded ${filter === 'To-Do' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>To-Do</button>
        <button onClick={() => setFilter('In-Progress')} className={`mr-2 px-4 py-2 rounded ${filter === 'In-Progress' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>In-Progress</button>
        <button onClick={() => setFilter('Completed')} className={`px-4 py-2 rounded ${filter === 'Completed' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>Completed</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskList tasks={filteredTasks} onEdit={setSelectedTask} onDelete={(id) => dispatch(deleteTask(id))} onUpdateStatus={handleUpdateStatus} />
        {isFormOpen && (
          <TaskForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSave={handleSaveTask} task={selectedTask} />
        )}
      </div>
      {selectedTask && <TaskDetails task={selectedTask} />}
    </div>
  );
};

export default TaskPage;
