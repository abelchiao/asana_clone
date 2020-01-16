class RemoveIndexFromSections < ActiveRecord::Migration[5.2]
  def change
    remove_index :sections, name: "index_sections_on_project_id_and_title"
    add_index :sections, :project_id
  end
end
