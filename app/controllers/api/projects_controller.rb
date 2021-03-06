class Api::ProjectsController < ApplicationController
  def index
    @projects = current_user.projects
    @sections = current_user.project_sections
    @favorite_projects = current_user.favorite_projects
    @project_favorites = current_user.project_favorites
    render :index
  end
  
  def show
    @project = Project.find(params[:id])
    @sections = current_user.project_sections
    @favorite_projects = current_user.favorite_projects
    @project_favorites = current_user.project_favorites
    render :show
  end
  
  def create
    @project = Project.new(project_params)
    @sections = current_user.project_sections
    @favorite_projects = current_user.favorite_projects
    @project_favorites = current_user.project_favorites
    if @project.save
      render 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    @sections = current_user.project_sections
    @favorite_projects = current_user.favorite_projects
    @project_favorites = current_user.project_favorites

    if @project.update(project_params)
      @project.section_order = [] unless project_params[:section_order]
      if @project.save!
        render :show
      else
        render json: @project.errors.full_messages, status: 422
      end
      # render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    # render :show
  end

  private
  def project_params
    params.require(:project)
      .permit(:title, :owner_id, :team_id, :due_date, :description, section_order: [], member_ids: [])
  end
end