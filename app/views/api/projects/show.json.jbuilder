json.project do
  json.partial! 'api/projects/project', project: @project
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