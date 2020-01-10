# == Schema Information
#
# Table name: project_memberships
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  member_id  :integer          not null
#  project_id :integer          not null
#
# Indexes
#
#  index_project_memberships_on_member_id_and_project_id  (member_id,project_id) UNIQUE
#  index_project_memberships_on_project_id                (project_id)
#

require 'test_helper'

class ProjectMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
