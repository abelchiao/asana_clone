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

class ProjectMembership < ApplicationRecord
  validates :member_id, uniqueness: { scope: :project_id }

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User
    
  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project
end
