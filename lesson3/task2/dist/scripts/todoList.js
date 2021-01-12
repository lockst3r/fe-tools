/* eslint-disable import/extensions */
import { onCreateTask } from './createTask.js';
import { onListClick } from './updateTask.js';
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);
};