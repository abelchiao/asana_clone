class Api::ProjectFavoritesController < ApplicationController
  def create
    @project_favorite = ProjectFavorite.new(project_favorite_params)
    if @project_favorite.save
      render '/api/project_favorites/show'
    else
      render json: @project_favorite.errors.full_messages, code: 422
    end
  end

  def destroy

  end

  private
  def project_favorite_params
    params.require(:project_favorite).permit(:user_id, :project_id)
  end
end
