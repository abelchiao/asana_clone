import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const projectsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState)
  switch (action.type) {
    case RECEIVE_PROJECT:
      nextState[action.project.id] = action.project;
      return nextState;
    case RECEIVE_PROJECTS:
      nextState = Object.assign({}, action.projects)
      return nextState;
    case REMOVE_PROJECT:
      delete nextState[action.projectId]
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  };
};

export default projectsReducer;