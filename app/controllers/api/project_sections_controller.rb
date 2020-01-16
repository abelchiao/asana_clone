class Api::ProjectSectionsController < ApplicationController
  def index
    project = Project.find(params[:id])
    @project_sections = project.sections
    render :index
  end

  
end
