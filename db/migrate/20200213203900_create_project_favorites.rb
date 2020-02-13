class CreateProjectFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :project_favorites do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :project_favorites, [:user_id, :project_id], unique: true
    add_index :project_favorites, :project_id
  end
end
