import classes from './Tasks.module.css';

function TaskItem({ task, toggleComplete, deleteTask, handleEditBtn }) {
  return (
    <li key={task.id} className={classes.taskItem}>
      <p>{task.text}</p>{' '}
      <button onClick={() => toggleComplete(task.id)}>
        {task.isCompleted ? 'completed' : 'running'}
      </button>
      <button
        onClick={() => handleEditBtn(task.id)}
        disabled={task.isCompleted ? true : false}
      >
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)}>delete</button>
    </li>
  );
}

export default TaskItem;
