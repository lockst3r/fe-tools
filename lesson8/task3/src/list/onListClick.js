import { deleteTask, getTaskList } from './tasksGateway';
import { changeCompletedTask } from './changeTask';
import { renderListItems } from './render';
import { setItem } from './storage';

export const onListClick = (event) => {
  const deleteBtn = event.target.classList.contains('list-item__delete-btn');

  if (deleteBtn) {
    const taskId = event.target.dataset.id;

    deleteTask(`${taskId}`)
      .then(() => getTaskList())
      .then((newTasksList) => {
        setItem('tasksList', newTasksList);
        renderListItems();
      });
  }

  changeCompletedTask(event);
};
