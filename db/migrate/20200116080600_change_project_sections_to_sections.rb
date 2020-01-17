class ChangeProjectSectionsToSections < ActiveRecord::Migration[5.2]
  def change
    rename_table :project_sections, :sections
  end
end
