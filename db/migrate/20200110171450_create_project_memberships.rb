class CreateProjectMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :project_memberships do |t|
      t.integer :member_id, null: false
      t.integer :project_id, null: false
      t.timestamps
    end

    add_index :project_memberships, [:member_id, :project_id], unique: true
    add_index :project_memberships, :project_id
  end
end
