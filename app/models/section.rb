# == Schema Information
#
# Table name: sections
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  project_id :integer          not null
#
# Indexes
#
#  index_sections_on_project_id  (project_id)
#

class Section < ApplicationRecord
  validates :title, :project_id, presence: true
  validates :title, uniqueness: { scope: :project_id }

  belongs_to :project

  has_many :tasks,
    foreign_key: :section_id,
    class_name: :Task
end
