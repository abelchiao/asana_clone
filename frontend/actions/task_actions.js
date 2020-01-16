export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

import * as TaskApiUtil from '../util/task_api_util';

const receiveTasks = tasks => ({
  type: RECEIVE_TASKS,
  tasks
});

const receiveTask = task => ({
  type: RECEIVE_TASK,
  task
});

const removeTask = taskId => ({
  type: REMOVE_TASK,
  taskId
});

export const fetchTasks = sectionId => dispatch => {
  return TaskApiUtil.fetchTasks(sectionId)
    .then(tasks => dispatch(receiveTasks(tasks)))
};

export const fetchTask = taskId => dispatch => {
  return TaskApiUtil.fetchTask(taskId)
    .then(task => dispatch(receiveTask(task)))
};

export const createTask = task => dispatch => {
  return TaskApiUtil.createTask(task)
    .then(task => dispatch(receiveTask(task)))
};

export const updateTask = task => dispatch => {
  return TaskApiUtil.updateTask(task)
    .then(task => dispatch(receiveTask(task)))
};

export const deleteTask = taskId => dispatch => {
  return TaskApiUtil.deleteTask(taskId)
    .then(() => dispatch(removeTask(taskId)))
};