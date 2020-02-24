class AddSectionOrderToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :section_order, :integer, array: true, default: []
  end
end
