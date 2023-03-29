import TaskItem from './TaskItem';

function ShowTasks({ tasks, toggleComplete, deleteTask, handleEditBtn }) {
  return (
    <div>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
              handleEditBtn={handleEditBtn}
            />
          ))}
        </ul>
      ) : (
        <p>No task found!</p>
      )}
    </div>
  );
}

export default ShowTasks;
