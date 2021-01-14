const baseUrl = "https://5ff2e7d128c3980017b18ca3.mockapi.io/api/v1/todoList";

export const createTask = (taskData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  });

export const deleteTask = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  });

const mapTasks = (tasks) =>
  tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTaskList = () =>
  fetch(baseUrl)
    .then((response) => response.json())
    .then(mapTasks);
