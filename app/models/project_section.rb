# == Schema Information
#
# Table name: project_sections
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :integer          not null
#
# Indexes
#
#  index_project_sections_on_project_id_and_title  (project_id,title) UNIQUE
#

class ProjectSection < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :title, uniqueness: { scope: :project_id }

  belongs_to :project

  has_many :tasks,
    foreign_key: :section_id,
    class_name: :Task
end
