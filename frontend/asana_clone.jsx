import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login } from './actions/session_actions'
// import { fetchSections, fetchSection, createSection, updateSection, deleteSection } from './util/section_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  };
  
  // window.fetchSections = fetchSections
  // window.fetchSection = fetchSection
  // window.createSection = createSection
  // window.updateSection = updateSection
  // window.deleteSection = deleteSection
  
  window.signup = signup;
  window.login = login;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

