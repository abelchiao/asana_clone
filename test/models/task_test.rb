# == Schema Information
#
# Table name: tasks
#
#  id                :bigint           not null, primary key
#  completion_status :boolean          default(FALSE), not null
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

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
