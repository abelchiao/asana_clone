# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Team.delete_all
Project.delete_all

User.create!(
  first_name: 'Demo',
  last_name: 'User',
  email: 'demo@demo.demo',
  password: '123456'
  )

Team.create!(
  title: 'Engineering',
  description: 'sajflkajflkjsa'
)

Project.create!(
  title: 'UserAuth',
  owner_id: 1,
  team_id: 1,
  description: 'done'
)

Project.create!(
  title: 'Projects MVP',
  owner_id: 1,
  team_id: 1,
  description: 'asfafafldj'
)

ProjectMembership.create!(
  member_id: 1,
  project_id: 1
)

ProjectMembership.create!(
  member_id: 1,
  project_id: 2
)