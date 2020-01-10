export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

import * as ProjectApiUtil from '../util/project_api_util';

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

export const createProject = project => dispatch => {
  return ProjectApiUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)));
};

export const fetchProjects = () => dispatch => {
  return ProjectApiUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
}