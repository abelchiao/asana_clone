# == Schema Information
#
# Table name: task_assignments
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  task_id    :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_task_assignments_on_task_id              (task_id)
#  index_task_assignments_on_user_id_and_task_id  (user_id,task_id) UNIQUE
#

class TaskAssignment < ApplicationRecord
  validates :task_id, uniqueness: { scope: :user_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User,
    inverse_of: :task_assignments
  
  belongs_to :task,
    foreign_key: :task_id,
    class_name: :Task,
    inverse_of: :task_assignments
end
