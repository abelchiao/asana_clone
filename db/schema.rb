# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_24_090109) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "project_favorites", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_favorites_on_project_id"
    t.index ["user_id", "project_id"], name: "index_project_favorites_on_user_id_and_project_id", unique: true
  end

  create_table "project_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "project_id"], name: "index_project_memberships_on_member_id_and_project_id", unique: true
    t.index ["project_id"], name: "index_project_memberships_on_project_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.integer "owner_id", null: false
    t.integer "team_id", null: false
    t.date "due_date"
    t.text "description", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "section_order", default: [], array: true
    t.index ["owner_id"], name: "index_projects_on_owner_id"
    t.index ["team_id"], name: "index_projects_on_team_id"
    t.index ["title"], name: "index_projects_on_title", unique: true
  end

  create_table "sections", force: :cascade do |t|
    t.integer "project_id", null: false
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "task_order", default: [], array: true
    t.index ["project_id"], name: "index_sections_on_project_id"
  end

  create_table "task_assignments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "task_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["task_id"], name: "index_task_assignments_on_task_id"
    t.index ["user_id", "task_id"], name: "index_task_assignments_on_user_id_and_task_id", unique: true
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title", null: false
    t.date "due_date"
    t.boolean "status", default: false, null: false
    t.integer "section_id"
    t.string "progress"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["due_date"], name: "index_tasks_on_due_date"
    t.index ["section_id"], name: "index_tasks_on_section_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_teams_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
