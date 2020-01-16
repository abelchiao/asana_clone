class AddDefaultValueToTasksCompletion < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :completion_status, :boolean, :default => false
  end
end
