import { renderListItems } from './render';
import { getItem, setItem } from './storage';
import { updateTask, getTaskList } from './tasksGateway';

export const changeCompletedTask = (event) => {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskId = event.target.dataset.id;
  const taskList = getItem('tasksList');
  const { text, createDate } = taskList.find((task) => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTaskList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};
