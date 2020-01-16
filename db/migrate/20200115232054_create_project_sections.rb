class CreateProjectSections < ActiveRecord::Migration[5.2]
  def change
    create_table :project_sections do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.timestamps
    end

    add_index :project_sections, [:project_id, :title], unique: true
  end
end
