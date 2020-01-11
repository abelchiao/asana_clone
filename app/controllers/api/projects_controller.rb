class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    render :index
  end
  
  def create
    @project = Project.new(project_params)
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  private
  def project_params
    params.require(:project)
      .permit(:title, :owner_id, :team_id, :due_date, :description, member_ids: [])
  end
end