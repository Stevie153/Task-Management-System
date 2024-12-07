import React from 'react';
import PropTypes from 'prop-types';

const TaskDetails = ({ task }) => {
  if (!task) return <div>Select a task to see details</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">{task.title}</h2>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p><strong>Description:</strong> {task.description}</p>
    </div>
  );
};

TaskDetails.propTypes = {
  task: PropTypes.object
};

export default TaskDetails;
