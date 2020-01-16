class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :completion_status, :status
  end
end
