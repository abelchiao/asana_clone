export const fetchProjects = () => (
  $.ajax({
    url: '/api/projects',
    method: 'GET'
  })
);

export const fetchProject = id => (
  $.ajax({
    url: `/api/projects/${id}`,
    method: 'GET'
  })
);

export const createProject = project => (
  $.ajax({
    url: '/api/projects',
    method: 'POST',
    data: { project }
  })
);

export const updateProject = project => (
  $.ajax({
    url: `/api/projects/${project.id}`,
    method: 'PATCH', 
    data: { project }
  })
);

export const deleteProject = projectId => (
  $.ajax({
    url: `/api/projects/${projectId}`,
    method: 'DELETE',
  })
);

export const createProjectFavorite = project_favorite => (
  $.ajax({
    url: '/api/project_favorites',
    method: 'POST',
    data: { project_favorite }
  })
);

export const deleteProjectFavorite = projectFavoriteId => (
  $.ajax({
    url: `/api/project_favorites/${projectFavoriteId}`,
    method: 'DELETE'
  })
)

// export const createProjectMembership = project_membership => (
//   $.ajax({
//     url: '/api/project_memberships',
//     method: 'POST',
//     data: { project_membership }
//   })
// );