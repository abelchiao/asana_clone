json.project do
  json.partial! 'api/projects/project', project: @project

  if @favorite_projects.include?(@project)
    json.set! :favorite, true
  else
    json.set! :favorite, false
  end

  @project_favorites.each do |project_favorite|
    if project_favorite.id === @project.id
      json.set! :favorite_id, project_favorite.id
    end
  end
end

json.sections do 
  @project.sections.each do |section|
    json.set! section.id do
      json.partial! 'api/sections/section', section: section
    end
  end
end

@project.sections.each do |section|
  section.tasks.each do |task|
    json.tasks do
      json.set! task.id do
        json.partial! 'api/tasks/task', task: task
      end
    end
  end
end