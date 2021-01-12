import "core-js/modules/es.array.find.js";

/* eslint-disable import/extensions */
import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList, deleteTask } from "./tasksGateway.js";
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }

  var taskId = e.target.dataset.id;
  var tasksList = getItem("tasksList");

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    endEvent: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};
export var onDeleteTask = function onDeleteTask(e) {
  var isDelete = e.target.classList.contains("list-item__delete-btn");

  if (!isDelete) {
    return;
  }

  var taskId = e.target.dataset.id;
  var tasksList = getItem("tasksList");

  var _tasksList$find2 = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find2.text,
      createDate = _tasksList$find2.createDate;

  var done = e.target.checked;
  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    endEvent: done ? new Date().toISOString() : null
  };
  deleteTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
};
export var onListClick = function onListClick(e) {
  var checkboxItem = e.target.classList.contains("list-item__checkbox");
  var deleteItem = e.target.classList.contains("list-item__delete-btn");

  if (deleteItem) {
    onDeleteTask(e);
  }

  if (checkboxItem) {
    onToggleTask(e);
  }
};