class Api::TasksController < ApplicationController
  def create
    @task = Task.new(task_params)
    if @task.save
      render 'api/tasks/show'
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  private
  def task_params
    params.require(:task)
      .permit(:title, :due_date, :status, :section_id, :progress, :description, user_ids: [])
  end
end
