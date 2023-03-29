import { useState } from 'react';
import shortid from 'shortid';

import Layout from '../components/layout/Layout';
import CreateTask from '../components/tasks/CreateTask';
import FilterVisibility from '../components/tasks/FilterVisibility';
import ShowTasks from '../components/tasks/ShowTasks';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [visibility, setVisibility] = useState('all');
  const [idForEdit, setIdForEdit] = useState(null);

  function addNewTask(text) {
    const task = {
      text,
      isCompleted: false,
      createdAt: new Date(),
      id: shortid.generate(),
    };

    setTasks([task, ...tasks]);
  }

  function handleChangeVisibility(e) {
    setVisibility(e.target.value);
  }

  function toggleComplete(id) {
    const oldTasks = [...tasks];
    const taskIndex = oldTasks.findIndex((task) => task.id === id);
    oldTasks[taskIndex].isCompleted = !oldTasks[taskIndex].isCompleted;

    setTasks(oldTasks);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleEditBtn(id) {
    setIdForEdit(id);
  }

  function editTask(text) {
    const oldTasks = [...tasks];
    const taskIndex = oldTasks.findIndex((task) => task.id === idForEdit);
    oldTasks[taskIndex].text = text;

    setTasks(oldTasks);
    setIdForEdit(null);
  }

  let tasksForRender = null;
  if (visibility === 'completed') {
    tasksForRender = tasks.filter((task) => task.isCompleted);
  } else if (visibility === 'running') {
    tasksForRender = tasks.filter((task) => !task.isCompleted);
  } else {
    tasksForRender = tasks;
  }

  return (
    <Layout>
      <h1>Tasks</h1>
      <CreateTask
        addNewTask={addNewTask}
        taskForEdit={
          idForEdit
            ? tasksForRender.find((task) => task.id === idForEdit)
            : undefined
        }
        editTask={editTask}
      />
      <FilterVisibility
        visibility={visibility}
        handleChangeVisibility={handleChangeVisibility}
      />
      <ShowTasks
        tasks={tasksForRender}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        handleEditBtn={handleEditBtn}
      />
    </Layout>
  );
}

export default Tasks;

/**
 * Create new tasks
 * Display all tasks
 * Filter tasks by complete, incomplete ans all
 * Delete tasks
 * Edit tasks
 */
