# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  description :text             default(""), not null
#  due_date    :date
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  owner_id    :integer          not null
#  team_id     :integer          not null
#
# Indexes
#
#  index_projects_on_owner_id  (owner_id)
#  index_projects_on_team_id   (team_id)
#  index_projects_on_title     (title) UNIQUE
#

class Project < ApplicationRecord
  validates :owner_id, :team_id, presence: true
  validates :title, presence: true, uniqueness: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :team,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :Team

  has_many :project_memberships,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: :ProjectMembership,
    inverse_of: :project,
    dependent: :destroy

  has_many :members,
    through: :project_memberships,
    source: :member
    # inverse_of: :projects

  has_many :sections,
    foreign_key: :project_id,
    class_name: :Section

  has_many :tasks,
    through: :sections,
    source: :tasks

  has_many :project_favorites,
    foreign_key: :project_id,
    class_name: :ProjectFavorite

  has_many :favorite_users,
    through: :project_favorites,
    source: :user
end
