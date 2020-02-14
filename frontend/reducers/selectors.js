export const fetchAssociatedProjects = state => Object.values(state.entities.projects);

export const favoriteSelector = state => {
  return Object.values(state.entities.projects).filter(project => project.favorite === true)
}

export const sectionSelector = (state, projectId) => {
  return Object.values(state.entities.sections).filter(section => section.projectId === Number(projectId))
}

export const taskSelector = (state, sectionId) => {
  return Object.values(state.entities.tasks).filter(task => task.sectionId === Number(sectionId))
}