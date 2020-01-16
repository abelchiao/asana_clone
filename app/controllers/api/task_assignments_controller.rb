class Api::TaskAssignmentsController < ApplicationController
    def create
    @task_assignment = TaskAssignment.new(task_assignment_params)
    if @task_assignment.save
      render '/api/task_assignments/show'
    else
      render json: @task_assignment.errors.full_messages, code: 422
    end
  end

  private
  def task_assignment_params
    params.require(:task_assignment).permit(:user_id, :task_id)
  end
end
