class RemoveAssigneeIdFromTasks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :assignee_id
  end
end
