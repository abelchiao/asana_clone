class Api::SectionsController < ApplicationController
  def index
    project = Project.find(params[:id])
    @sections = project.sections
    render :index
  end

  
end
