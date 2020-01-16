export const fetchTasks = sectionId => (
  $.ajax({
    url: '/api/tasks',
    method: 'GET',
    data: { sectionId }
  })
);

export const fetchTask = id => (
  $.ajax({
    url: `/api/tasks/${id}`,
    method: 'GET'
  })
);

export const createTask = task => (
  $.ajax({
    url: '/api/tasks',
    method: 'POST',
    data: { task }
  })
);

export const updateTask = task => (
  $.ajax({
    url: `/api/tasks/${task.id}`,
    method: 'PATCH',
    data: { task }
  })
);

export const deleteTask = taskId => (
  $.ajax({
    url: `api/tasks/${taskId}`,
    method: 'DELETE'
  })
);