@projects.each do |project|
  json.set! project.id do
    json.partial! 'project', project: project
    if @favorite_projects.include?(project)
      json.set! :favorite, true
    else
      json.set! :favorite, false
    end
  end
end