class Api::SectionsController < ApplicationController
  def index
    @sections = current_user.project_sections
    render :index
  end

  # def index
  #   @sections = Project.find_by(id: params[:projectId]).sections
  #   render :index
  # end

  def show
    @section = Section.find(params[:id])
    render :show
  end

  def create
    @section = Section.new(section_params)
    if @section.save
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def update
    @section = Section.find(params[:id])
    if @section.update(section_params)
      render :show
    else
      render json: @section.errors.full_messages, status: 422
    end
  end

  def destroy
    @section = Section.find(params[:id])
    @section.destroy
    # render :show
  end

  private
  def section_params
    params.require(:section).permit(:project_id, :title, task_order: [])
    #params.require(:section).permit!
  end
end
