class Api::ProjectFavoritesController < ApplicationController
  def index
    @project_favorites = current_user.project_favorites
    @favorite_projects = current_user.favorite_projects
    render :index
  end

  def create
    @project = Project.find(params[:project_favorite][:project_id])
    @project_favorite = ProjectFavorite.new(project_favorite_params)
    @sections = current_user.project_sections
    if @project_favorite.save
      @favorite_projects = current_user.favorite_projects
      @project_favorites = current_user.project_favorites
      # render json: @project_favorite
      # render 'api/project_favorites/show'
      render 'api/projects/show'
    else
      render json: @project_favorite.errors.full_messages, code: 422
    end
  end

  def destroy
    @project_favorite = ProjectFavorite.find(params[:id])
    @project = Project.find(@project_favorite.project_id)
    @sections = current_user.project_sections
    # Need to revisit to remove unnecessary associations
    @favorite_projects = current_user.favorite_projects
    @project_favorites = current_user.project_favorites
    # @project_favorite = ProjectFavorite.find_by((user_id: current_user.id, project_id: params[:project_id])) 
    @project_favorite.destroy
    render 'api/projects/show'
    # render json: @project_favorite
  end

  private
  def project_favorite_params
    params.require(:project_favorite).permit(:user_id, :project_id)
  end
end
