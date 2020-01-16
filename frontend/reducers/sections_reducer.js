import { RECEIVE_SECTIONS, RECEIVE_SECTION, REMOVE_SECTION } from '../actions/section_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sectionsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_SECTIONS:
      nextState = Object.assign({}, action.sections);
      return nextState;
    case RECEIVE_SECTION:
      nextState[action.section.id] = action.section;
      return nextState;
    case REMOVE_SECTION:
      delete nextState[action.sectionId]
      return nextState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return oldState;
  };
};

export default sectionsReducer;