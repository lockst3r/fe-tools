import { additionListTasks } from './additionTasks.js';
import { onListClick } from './onListClick.js';

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.addEventListener('click', additionListTasks);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListClick);
}