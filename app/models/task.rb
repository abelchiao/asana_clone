# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  description :text
#  due_date    :date
#  progress    :string
#  status      :boolean          default(FALSE), not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  section_id  :integer
#
# Indexes
#
#  index_tasks_on_due_date    (due_date)
#  index_tasks_on_section_id  (section_id)
#

class Task < ApplicationRecord
  validates :title, presence: true

  belongs_to :section,
    foreign_key: :section_id,
    class_name: :Section

  has_one :project,
    through: :section,
    source: :project

  has_many :task_assignments,
    primary_key: :id,
    foreign_key: :task_id,
    class_name: :TaskAssignment,
    inverse_of: :task,
    dependent: :destroy

  has_many :users,
    through: :task_assignments,
    source: :user
end
