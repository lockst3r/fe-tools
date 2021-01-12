const baseUrl = "https://5ff86cd110778b001704348e.mockapi.io/api/v1/tasks";

const mapTasks = tasks => tasks.map(({ id, ...rest }) => ({ ...rest, id }));

export const getTasksList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });