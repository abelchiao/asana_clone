class Api::TasksController < ApplicationController
  def index
    @tasks = Section.find_by(id: params[:sectionId]).tasks
    render :index
  end
  
  def show
    @task = Task.find(params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render json: @task
  end

  private
  def task_params
    params.require(:task)
      .permit(:title, :due_date, :status, :section_id, :progress, :description, user_ids: [])
  end
end
