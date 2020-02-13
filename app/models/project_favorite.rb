# == Schema Information
#
# Table name: project_favorites
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_project_favorites_on_project_id              (project_id)
#  index_project_favorites_on_user_id_and_project_id  (user_id,project_id) UNIQUE
#

class ProjectFavorite < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project
end
