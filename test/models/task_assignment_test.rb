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

require 'test_helper'

class TaskAssignmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
