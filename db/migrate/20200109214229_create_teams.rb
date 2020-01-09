class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :title, null: false
      t.text :description, default: "", null: false
      t.timestamps
    end

    add_index :teams, :title, unique: true
  end
end
