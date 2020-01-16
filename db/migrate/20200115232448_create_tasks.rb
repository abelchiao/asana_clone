class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.integer :assignee_id
      t.date :due_date
      t.boolean :completion_status, null: false
      t.integer :section_id
      t.string :progress
      t.text :description
      t.timestamps
    end

    add_index :tasks, :assignee_id
    add_index :tasks, :section_id
    add_index :tasks, :due_date
  end
end
