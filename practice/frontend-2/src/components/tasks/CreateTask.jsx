import { useEffect, useState } from 'react';

function CreateTask({ addNewTask, taskForEdit, editTask }) {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text) {
      if (taskForEdit) {
        editTask(text);
      } else addNewTask(text);
      setText('');
    } else {
      alert('Invalid text');
    }
  }

  useEffect(() => {
    setText(taskForEdit?.text);
  }, [taskForEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Type yout task'
      />
      <button type='submit'>{taskForEdit ? 'Edit' : 'Create task'}</button>
    </form>
  );
}

export default CreateTask;
