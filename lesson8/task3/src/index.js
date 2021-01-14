import { renderListItems } from './list/render';
import { initTodoListHandlers } from './list/todoList';
import { getTaskList } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTaskList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderListItems();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);
