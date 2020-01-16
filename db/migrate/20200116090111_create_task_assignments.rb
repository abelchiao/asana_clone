class CreateTaskAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :task_assignments do |t|
      t.integer :user_id, null: false
      t.integer :task_id, null: false
      t.timestamps
    end

    add_index :task_assignments, [:user_id, :task_id], unique: true
    add_index :task_assignments, :task_id
  end
end
