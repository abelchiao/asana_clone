class AddTaskOrderToSection < ActiveRecord::Migration[5.2]
  def change
    add_column :sections, :task_order, :integer, array: true, default: []
  end
end
