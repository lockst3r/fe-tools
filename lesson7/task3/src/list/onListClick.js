import { deleteTask, getTaskList } from './tasksGateway.js';
import { changeCompletedTask } from './changeTask.js';
import { renderListItems } from './render.js';
import { setItem } from './storage.js';

export const onListClick = (event) => {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const taskId = event.target.dataset.id;

    deleteTask(`${taskId}`)
      .then(() => getTaskList())
      .then(newTasksList => {
        setItem('tasksList', newTasksList);
        renderListItems();
    });
  };

  changeCompletedTask(event);
}