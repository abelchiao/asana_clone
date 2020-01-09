class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.integer :team_id, null: false
      t.date :due_date
      t.text :description, default: '', null: false
      t.timestamps
    end

    add_index :projects, :owner_id
    add_index :projects, :team_id
    add_index :projects, :title, unique: true
  end
end
