class Api::ProjectMembershipsController < ApplicationController
  def create
    @project_membership = ProjectMembership.new(project_membership_params)
    if @project_membership.save
      render '/api/project_memberships/show'
    else
      render json: @project_membership.errors.full_messages, code: 422
    end
  end

  private
  def project_membership_params
    params.require(:project_membership).permit(:member_id, :project_id)
  end
end
