import { renderListItems } from "./list/render.js";
import { initTodoListHandlers } from "./list/todoList.js";
import { getTaskList } from "./list/tasksGateway.js";
import { setItem } from "./list/storage.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTaskList().then((tasksList) => {
    setItem("tasksList", tasksList);
    renderListItems();
  });

  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === "tasksList") {
    renderListItems();
  }
};

window.addEventListener("storage", onStorageChange);
