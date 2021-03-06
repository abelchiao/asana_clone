import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login } from './actions/session_actions';
// import { fetchSections, fetchSection, createSection, updateSection, deleteSection } from './util/section_api_util';
import { fetchTasks, fetchTask, createTask, updateTask, deleteTask } from './util/task_api_util';
import { fetchSections, fetchSection, createSection, updateSection } from './actions/section_actions';
// import { fetchProject } from './actions/project_actions';
import { fetchProject, createProjectFavorite, deleteProjectFavorite } from './util/project_api_util';
import { createFavorite, removeFavorite } from './actions/project_actions';

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
  
  // // testing sections api calls
  // window.fetchSections = fetchSections;
  // window.fetchSection = fetchSection;
  // window.createSection = createSection;
  // window.updateSection = updateSection;
  // window.deleteSection = deleteSection;
  
  // // testing sections api calls
  // window.fetchTasks = fetchTasks;
  // window.fetchTask = fetchTask;
  // window.createTask = createTask;
  // window.updateTask = updateTask;
  // window.deleteTask = deleteTask;
  
  // // testing section actions
  // window.fetchSections = fetchSections;
  // window.fetchSection = fetchSection;
  // window.createSection = createSection;
  // // testing session actions
  // window.signup = signup;
  // window.login = login;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  // window.fetchProject = fetchProject;
  window.fetchProject = fetchProject
  window.createProjectFavorite = createProjectFavorite
  window.deleteProjectFavorite = deleteProjectFavorite
  window.createFavorite = createFavorite;
  window.removeFavorite = removeFavorite;
  window.updateSection = updateSection

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

