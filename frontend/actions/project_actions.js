export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_MEMBERSHIP = 'RECEIVE_PROJECT_MEMBERSHIP';

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

// const receiveProjectMembership = (memberId, projectId) => ({
//   type: RECEIVE_PROJECT_MEMBERSHIP,
//   memberId,
//   projectId
// })

export const createProject = project => dispatch => {
  // debugger
  return ProjectApiUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)))
    // .then((project) => ProjectApiUtil.createProjectMembership(project.owner_id, project.id))
    // .then(project => ProjectApiUtil.createProjectMembership(project.owner_id, project.id))
};

export const fetchProjects = () => dispatch => {
  return ProjectApiUtil.fetchProjects()
    .then(projects => dispatch(receiveProjects(projects)))
};

export const fetchProject = projectId => dispatch => {
  return ProjectApiUtil.fetchProject(projectId)
    .then(project => dispatch(receiveProject(project)))
};

export const deleteProject = projectId => dispatch => {
  return ProjectApiUtil.deleteProject(projectId)
    .then(() => dispatch(removeProject(projectId)))
};