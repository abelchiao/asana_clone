@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project

    if @favorite_projects.include?(project)
      json.set! :favorite, true
    else
      json.set! :favorite, false
    end

    @project_favorites.each do |project_favorite|
      if project_favorite.project_id == project.id
        json.set! :favorite_id, project_favorite.id
      end
    end
  end
end