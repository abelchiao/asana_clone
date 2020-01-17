import { RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK } from '../actions/task_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';

const tasksReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_TASKS:
      nextState = Object.assign({}, action.tasks);
      return nextState;
    case RECEIVE_TASK:
      nextState[action.task.id] = action.task;
      return nextState;
    case REMOVE_TASK:
      delete nextState[action.taskId]
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_PROJECT:
      nextState = Object.assign({}, oldState, action.tasks)
      return nextState;
    default:
      return oldState;
  };
};

export default tasksReducer;