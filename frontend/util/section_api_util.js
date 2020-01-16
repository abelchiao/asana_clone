export const fetchSections = projectId => (
  $.ajax({
    url: '/api/sections',
    method: 'GET',
    data: { projectId: projectId }
  })
);

export const fetchSection = id => (
  $.ajax({
    url: `/api/sections/${id}`,
    method: 'GET'
  })
);

export const createSection = section => (
  $.ajax({
    url: '/api/sections',
    method: 'POST',
    data: { section }
  })
);

export const updateSection = section => (
  $.ajax({
    url: `/api/sections/${section.id}`,
    method: 'PATCH',
    data: { section }
  })
);

export const deleteSection = sectionId => (
  $.ajax({
    url: `/api/sections/${sectionId}`,
    method: 'DELETE',
  })
);