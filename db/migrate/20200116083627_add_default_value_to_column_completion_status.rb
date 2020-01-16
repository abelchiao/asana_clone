class AddDefaultValueToColumnCompletionStatus < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tasks, :completion_status, from: nil, to: false
  end
end
