# == Schema Information
#
# Table name: tasks
#
#  id                :bigint           not null, primary key
#  completion_status :boolean          not null
#  description       :text
#  due_date          :date
#  progress          :string
#  title             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  assignee_id       :integer
#  section_id        :integer
#
# Indexes
#
#  index_tasks_on_assignee_id  (assignee_id)
#  index_tasks_on_due_date     (due_date)
#  index_tasks_on_section_id   (section_id)
#

class Task < ApplicationRecord
  validates :completion_status, :title, presence: true

  belongs_to :section,
    foreign_key: :section_id,
    class_name: :ProjectSection

  belongs_to :assignee,
    foreign_key: :assignee_id,
    class_name: :User
end
