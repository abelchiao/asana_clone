import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import currentProjectReducer from './current_project_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentProject: currentProjectReducer
});

export default uiReducer