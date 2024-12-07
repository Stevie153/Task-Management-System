import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/InputField';
import Button from '../common/Button';
import Modal from '../common/Modal';

const TaskForm = ({ isOpen, onClose, onSave, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [status, setStatus] = useState(task ? task.status : 'To-Do');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

  const handleSubmit = () => {
    onSave({ id: task ? task.id : null, title, description, status, dueDate });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={task ? 'Edit Task' : 'Add Task'}>
      <form>
        <InputField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <InputField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <InputField label="Status" value={status} onChange={(e) => setStatus(e.target.value)} type="select" options={['To-Do', 'In-Progress', 'Completed']} />
        <InputField label="Due Date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} type="date" />
        <Button label="Save" onClick={handleSubmit} />
      </form>
    </Modal>
  );
};

TaskForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  task: PropTypes.object
};

export default TaskForm;
