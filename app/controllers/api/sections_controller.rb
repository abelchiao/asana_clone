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
    # p section_params
    if @section.update(section_params)
      @section.task_order = [] unless section_params[:task_order]
      if @section.save!
        render :show
      else
        render json: @section.errors.full_messages, status: 422
      end
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
    # p = params.require(:section).permit(:project_id, :title, :task_order, task_order: [])
    # if p['task_order'] == 'null'
    #   p['task_order'] = Array.new
    # end
    # p

    # p = params.require(:photo).permit(tags: [])
    # p["tags"].reject! { |tag| tag == "null" }
    # p
    
    # params[:task_order] ||= [] if params.has_key?(:task_order)
    params.require(:section).permit(:project_id, :title, task_order: [])
    # params[:task_order] ||= [] if params.has_key?(:task_order)
    # p params
    # params.require(:section).permit!
    #params.require(:section).permit!
  end
end
